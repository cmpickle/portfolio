import React from 'react';
import { withStyles } from '@material-ui/core';
import BannerImage from './assets/images/olympus.jpg';

const BannerComponent = ({ component: Component = 'div', classes }) => (
  <div className={classes.banner}>
    <Component className={classes.heading} />
  </div>
);

const styles = {
  banner: {
    minHeight: 100 + 'vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImage: 'url(' + BannerImage + ')',
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

export const Banner = withStyles(styles)(BannerComponent);
