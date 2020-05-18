import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Company } from './company.component';
import companies from './work.json';
import { Banner } from './Banner';
import profile from './assets/images/profile.jpg';

export const AppComponent = (props) => {
  const { classes } = props;
  const bannerContent = () => (<React.Fragment>
    <img src={profile} className={classes.profileImage} alt='Profile' />
    <Typography variant="subtitle1">Hello, I'm</Typography>
    <Typography variant="h1">Cameron Pickle</Typography>
</React.Fragment>);
  return (
    <div className={classes.app}>
      <Banner component={bannerContent}>
      </Banner>
      <header className={classes.appHeader}>

        <div>
          {companies.companies.map(c =>
            <Company key={c.id} company={c} />)}
        </div>
      </header>
    </div>
  );
}

const styles = {
  appHeader: {
    backgroundColor: '#222',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  app: {
    textAlign: 'center'
  },
  profileImage: {
    marginTop: '30vh',
    borderRadius: '50%',
    border: '4px solid #09f'
  }
}

export const App = withStyles(styles)(AppComponent);
