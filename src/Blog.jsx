import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Company } from './components/Company';
import { Banner } from './Banner';
import { Navbar } from './components/Navbar';
import { Typography } from '@material-ui/core';

export const BlogComponent = (props) => {
  const { classes } = props;
  const bannerContent = () => (
    <>
      <header className={classes.appHeader}>
        <Company
          key={100}
          company={{
            id: 100,
            label:
              'How to Fix Halo Infinite Sound Issues (Not a driver problem)',
          }}
        >
          <div className={classes.textArea}>
            <Typography variant='h2' className={classes.content}>
              The Problem
            </Typography>
            <Typography className={classes.content}>
              I had been playing Halo Infinite for about a month when it's
              crackling sound and no audio from either Halo Infinite or Discord
              started to plague me.
            </Typography>
            <Typography className={classes.content}>
              After fighting the problem for a week and finding no working
              solution online I finally came across a workaround that got me
              back to having audio in both Halo and Discord 100% of the time.
            </Typography>
            <Typography variant='h2' className={classes.content}>
              The Fix
            </Typography>
            <Typography className={classes.content}></Typography>
          </div>
        </Company>
      </header>
    </>
  );
  return (
    <div className={classes.app}>
      <Banner component={bannerContent}></Banner>
      <Navbar />
    </div>
  );
};

const styles = {
  appHeader: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  app: {
    textAlign: 'center',
  },
  profileImage: {
    marginTop: '30vh',
    borderRadius: '50%',
    border: '4px solid #09f',
  },
  content: {
    whiteSpace: 'pre-wrap',
    textAlign: 'initial',
  },
  textArea: {
    padding: '20px',
  },
};

export const Blog = withStyles(styles)(BlogComponent);
