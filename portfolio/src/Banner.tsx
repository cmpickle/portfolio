import React from 'react';
import BannerImage from './assets/images/olympus.jpg';
import { YStack } from 'tamagui';

const BannerComponent = ({ component: Component = 'div', classes }) => (
  <YStack minHeight='100vh' backgroundImage={`url(${BannerImage})`} backgroundSize='cover' backgroundAttachment='fixed' backgroundRepeat='no-repeat' backgroundPosition='center center' justifyContent='center' alignItems='center' textAlign='center'>
    <Component fontSize={4.8 + 'vw'} fontWeight={300} color='#fff' textShadow='0 1px 3px rgba(0,0,0,.7)' top={50 + '%'} position='absolute' left={50 + '%'} textAlign='center' right='auto' width={90 + '%'} transform='translateX(-50%) translateY(-50%)' maxWidth={1170 + 'px'} />
  </YStack>
);

const styles = {
  banner: {
    minHeight: 100 + 'vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    // backgroundImage: 'url(' + BannerImage + ')',
    textAlign: 'center',
  },
  bannerImage: {
    height: '100vh',
  },
  heading: {
    fontSize: 4.8 + 'vw',
    fontWeight: 300,
    color: '#fff',
    textShadow: '0 1px 3px rgba(0,0,0,.7)',
    top: 50 + '%',
    position: 'absolute',
    left: 50 + '%',
    textAlign: 'center',
    right: 'auto',
    width: 90 + '%',
    transform: 'translateX(-50%) translateY(-50%)',
    maxWidth: 1170 + 'px',
  },
};

export const Banner = BannerComponent;
