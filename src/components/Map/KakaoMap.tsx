/* eslint-disable new-cap */
/* eslint-disable no-new */
import React, { useEffect } from 'react';
import styled from 'styled-components';

declare global {
    interface Window {
        kakao: any;
    }
}

const Container = styled.div``;

const Map = styled.div`
    display: inline-block;
    width: 80%;
    height: 700px;
`;

const KakaoMap: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.REACT_APP_KAKAO_KEY}`;    
        document.head.appendChild(script);

        script.onload = (() => {
            new window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const mapOption = {
                    center: new window.kakao.maps.LatLng(
                        33.450701, 126.570667
                    ),
                    level: 9,
                  };
                const map = new window.kakao.maps.Map(container, mapOption);
                const marker = new window.kakao.maps.Marker({
                    position: map.getCenter()
                });
                marker.setMap(map);
            });
        });
    });
    
    return (
      <Container>
        <Map id='map' />
      </Container> 
    );
};

export default KakaoMap;