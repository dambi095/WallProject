import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RiKakaoTalkFill, RiFacebookBoxFill, RiShareFill } from 'react-icons/ri';

declare global {
    interface Window {
        Kakao: any;
    }
}

const Container = styled.div`
    position: relative;
    height: 60px;
    color: ${(props) => props.theme.primaryText};
`;

const ShareButton = styled.div`
    display: inline-block;
    margin-right: 10px;
`;

const P = styled.p`
    height:40px;
`;

const Share: React.FC = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://developers.kakao.com/sdk/js/kakao.js`;    
        document.head.appendChild(script);

        script.onload = (() => {
            window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
            window.Kakao.Link.createDefaultButton({
                container: '.kakaoBtn',
                objectType: 'feed',
                content: {
                    title: '모두의 담벼락',
                    description: '주변 담벼락에 글을 작성해보세요',
                    imageUrl: 'image = string',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com'
                    }
                },
                buttons: [
                    {
                    title: '웹으로 이동',
                    link: {
                        webUrl: 'https://developers.kakao.com'
                    }
                }, 
                {
                    title: '앱으로 이동',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                    },
                }]
            });
        });
    }, []);

    return (
      <>
        <P>공유하기</P>
        <Container>
          <ShareButton>
            <RiKakaoTalkFill className='kakaoBtn' size='50' color='F5E1A4' />
          </ShareButton>
          <ShareButton>
            <RiFacebookBoxFill size='50' color='CED9E5' />
          </ShareButton>
          <ShareButton>
            <RiShareFill size='50' color='A192B2' />
          </ShareButton>
        </Container>
      </>
    );
};

export default Share;
