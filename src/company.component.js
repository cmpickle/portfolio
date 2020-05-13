import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CompanyComponent = (props) => {
  const {
    company,
    classes,
  } = props;
  return (
    <Paper className={classes.card}>
      <div className={classes.imageBackground}>
        <img src={company.image} alt={company.name} className={classes.image} />
      </div>
      <div className={classes.textArea}>
        <Typography variant="h4" className={classes.content}>{company.name}</Typography>
        <Typography className={`${classes.content} ${classes.roleStyle}`}>{company.position} {company.timeline}</Typography>
        <Typography className={classes.content}>{company.technology}</Typography>
        <Typography className={classes.content}>{company.description}</Typography>
      </div>
    </Paper>
  );
};

const styles = {
    image: {
        width: '400px',
        height: '200px',
        objectFit: 'contain',
        backgroundColor: '#FFFFFF'
    },
    content: {
        whiteSpace: 'pre-wrap',
        textAlign: 'initial'
    },
    roleStyle: {
      color: '#09f'
    },
    card: {
        margin: '20px',
        maxWidth: '1000px'
    },
    textArea: {
      padding: '20px'
    },
    imageBackground: {
      backgroundColor: 'white'
    }
}

export const Company = withStyles(styles)(CompanyComponent);