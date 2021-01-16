import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

declare global {
    interface Window {
        kakao: any,
    }
}

const Container = styled.div`
    min-height: 700px;
`;

const Map = styled.div`
    display: inline-block;
    width: 90%;
    height: 700px;
`;

const Span = styled.span`
    line-height: 700px;
`;

const KakaoMap: React.FC = () => {
    const [isAgreed, setIsAgreed] = useState<boolean>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.REACT_APP_KAKAO_KEY}`;    
    document.head.appendChild(script);
    
    useEffect(() => {
        if(navigator.geolocation) {
            const options = {
                // 가능한 경우, 높은 정확도의 위치(예를 들어, GPS 등)를 읽어오려면 true로 설정한다.
                enableHighAccuracy : false,
                // 위치 정보를 강제로 재확인하기 위해 사용하기도 하는 이 값의 기본 값은 0이다.
                maximumAge : 300000,
            };

            new Promise<GeolocationPosition>((resolve) => {
                navigator.geolocation.watchPosition(position => {
                    resolve(position);
                    setIsAgreed(true);
                    setIsLoading(false);
                }, () => {
                    setIsAgreed(false);
                    setIsLoading(false);
                }, options);
            }).then((data) => {
                    window.kakao.maps.load(() => {
                        const container = document.getElementById('map');
                        const mapOption = {
                            center: new window.kakao.maps.LatLng(
                                 data.coords.latitude, data.coords.longitude
                            ),
                            level: 3,
                        };
                        const map = new window.kakao.maps.Map(container, mapOption);
                        const marker = new window.kakao.maps.Marker({
                            position: map.getCenter()
                        });
                        
                        marker.setMap(map);
                    });
            }).catch(() => toast('다시시도 해주세요'));
        } else {
            toast('위치 정보가 지원되지 않습니다');
        }
    }, []);
    
    return (
      <Container>
        {isLoading ? (
          <Span>
            <Loading />
          </Span>
        ) : (
          <>
            {!isAgreed ? 
              <Span>위치 정보 공유에 동의해주세요 :)</Span> 
            : 
              <Map id='map' />}
          </>
        )}
      </Container> 
    );
};

export default KakaoMap;