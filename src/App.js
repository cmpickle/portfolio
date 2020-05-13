import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Company } from './company.component';
import companies from './work.json';

export const AppComponent = (props) => {
  const { classes } = props;
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <Typography variant="subtitle1">Hello, I'm</Typography>
        <Typography variant="h1">Cameron Pickle</Typography>
        <Typography variant="h4">Here's what I've been up to:</Typography>

        <div className={classes.list}>
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
  list: {

  }
}

export const App = withStyles(styles)(AppComponent);
