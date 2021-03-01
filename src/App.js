import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Company } from './company.component';
import companies from './work.json';
import { Banner } from './Banner';
import profile from './assets/images/profile.jpg';

export const AppComponent = (props) => {
  const { classes } = props;
  const bannerContent = () => (
    <React.Fragment>
      <img src={profile} className={classes.profileImage} alt='Profile' />
      <Typography variant='subtitle1'>Hello, I'm</Typography>
      <Typography variant='h1'>Cameron Pickle</Typography>
      <header className={classes.appHeader}>
        <Company
          key={100}
          company={{
            id: 100,
            label: 'About Me',
            description: '',
            flairs: [
              { path: 'assets/images/tech/github.png', alt: 'C#' },
              {
                path: 'assets/images/tech/stack-overflow.png',
                alt: 'SQL Server',
              },
              { path: 'assets/images/tech/linkedin.jpg', alt: 'Selenium' },
            ],
          }}
        >
          <img
            src='https://stackoverflow.com/users/flair/1758235.png?theme=dark'
            width='208'
            height='58'
            alt='profile for cmpickle at Stack Overflow, Q&amp;A for professional and enthusiast programmers'
            title='profile for cmpickle at Stack Overflow, Q&amp;A for professional and enthusiast programmers'
            style={{
              border: '5px solid rgb(0, 136, 255)',
              borderRadius: '5px',
              margin: '40px',
            }}
          ></img>
        </Company>
        {companies.companies.map((c) => (
          <Company key={c.id} company={c} />
        ))}
      </header>
    </React.Fragment>
  );
  return (
    <div className={classes.app}>
      <Banner component={bannerContent}></Banner>
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
};

export const App = withStyles(styles)(AppComponent);
