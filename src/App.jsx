import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Company } from './company.component';
import companies from './work.json';

export const AppComponent = ({ classes }) => (
  <div className={classes.app}>
    <header className={classes.appHeader}>
      <Typography variant="subtitle1">Hello, I&lsquo;m</Typography>
      <Typography variant="h1">Cameron Pickle</Typography>
      <Typography variant="h4">Here&lsquo;s what I&lsquo;ve been up to:</Typography>

      {companies.companies.map((c) => <Company key={c.id} company={c} />)}
    </header>
  </div>
);

const styles = {
  appHeader: {
    backgroundColor: '#282c34',
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
};

AppComponent.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export const App = withStyles(styles)(AppComponent);
