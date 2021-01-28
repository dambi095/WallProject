import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {toast} from 'react-toastify';
import Loading from './Loading';

declare global {
	interface Window {
		kakao: any;
	}
}

const Container = styled.div`
	min-height: 600px;
`;

const Map = styled.div`
	display: inline-block;
	width: 90%;
	height: 600px;
`;

const Span = styled.span`
	line-height: 600px;
`;

const KakaoMap: React.FC = () => {
	const [isAgreed, setIsAgreed] = useState<boolean>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const script = document.createElement('script');
	script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.REACT_APP_KAKAO_KEY}`;
	document.head.appendChild(script);

	useEffect(() => {
		if (navigator.geolocation) {
			const options = {
				// 가능한 경우, 높은 정확도의 위치(예를 들어, GPS 등)를 읽어오려면 true로 설정한다.
				enableHighAccuracy: false,
				// 위치 정보를 강제로 재확인하기 위해 사용하기도 하는 이 값의 기본 값은 0이다.
				maximumAge: 300000,
				timeout: 8000,
			};

			new Promise<GeolocationPosition>((resolve) => {
				navigator.geolocation.watchPosition(
					(position) => {
						resolve(position);
						setIsAgreed(true);
						setIsLoading(false);
					},
					() => {
						setIsAgreed(false);
						setIsLoading(false);
					},
					options,
				);
			})
				.then((data) => {
					window.kakao.maps.load(() => {
						const container = document.getElementById('map');
						const mapOption = {
							center: new window.kakao.maps.LatLng(
								data.coords.latitude,
								data.coords.longitude,
							),
							level: 2,
						};
						const map = new window.kakao.maps.Map(
							container,
							mapOption,
						);
						const positions = [
							{
								title: '내위치',
								latlng: new window.kakao.maps.LatLng(
									data.coords.latitude,
									data.coords.longitude,
								),
							},
							{
								title: '내위치 근처',
								latlng: new window.kakao.maps.LatLng(
									37.616567,
									126.720582,
								),
							},
							{
								title: '카카오',
								latlng: new window.kakao.maps.LatLng(
									33.450705,
									126.570677,
								),
							},
							{
								title: '생태연못',
								latlng: new window.kakao.maps.LatLng(
									33.450936,
									126.569477,
								),
							},
							{
								title: '텃밭',
								latlng: new window.kakao.maps.LatLng(
									33.450879,
									126.56994,
								),
							},
							{
								title: '근린공원',
								latlng: new window.kakao.maps.LatLng(
									33.451393,
									126.570738,
								),
							},
						];

						const imageSrc =
							'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
						const markers = [];
						for (let i = 0; i < positions.length; i += 1) {
							// 마커 이미지의 이미지 크기 입니다
							const imageSize = new window.kakao.maps.Size(
								24,
								35,
							);

							// 마커 이미지를 생성합니다
							const markerImage = new window.kakao.maps.MarkerImage(
								imageSrc,
								imageSize,
							);

							// 마커를 생성합니다
							const marker = new window.kakao.maps.Marker({
								map, // 마커를 표시할 지도
								position: positions[i].latlng, // 마커를 표시할 위치
								title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
								image: markerImage, // 마커 이미지
							});

							markers.push(marker);
						}
						// 현재위치에서 반경 100미터 안에있는 마커들만 표시
						markers.forEach((m: any) => {
							const c1 = map.getCenter();
							const c2 = m.getPosition();
							const poly = new window.kakao.maps.Polyline({
								// map: map, 을 하지 않아도 거리는 구할 수 있다.
								path: [c1, c2],
							});
							const dist = poly.getLength(); // m 단위로 리턴

							if (dist < 100) {
								m.setMap(map);
							} else {
								m.setMap(null);
							}
						});
					});
				})
				.catch(() => toast('다시시도 해주세요'));
		} else {
			toast('위치 정보가 지원되지 않습니다');
		}
	}, [isAgreed, isLoading]);

	return (
		<Container>
			{isLoading ? (
				<Span>
					<Loading />
				</Span>
			) : (
				<>
					{!isAgreed ? (
						<Span>위치 정보 공유에 동의해주세요 :)</Span>
					) : (
						<Map id='map' />
					)}
				</>
			)}
		</Container>
	);
};

export default KakaoMap;
