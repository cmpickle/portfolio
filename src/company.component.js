import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CompanyComponent = (props) => {
  const { company, classes, children } = props;
  return (
    <Paper className={classes.card}>
      <div className={classes.imageBackground}>
        {company.image ? (
          <img
            src={company.image}
            alt={company.name}
            className={classes.image}
          />
        ) : (
          <Typography variant='h2' className={classes.label}>
            {company.label}
          </Typography>
        )}
      </div>
      <div className={classes.textArea}>
        <Typography variant='h4' className={classes.content}>
          {company.name}
        </Typography>
        <Typography className={`${classes.content} ${classes.roleStyle}`}>
          {company.position} {company.timeline}
        </Typography>
        <Typography className={classes.content}>
          {company.technology}
        </Typography>
        <Typography className={classes.content}>
          {company.description}
        </Typography>
        {company.flairs &&
          company.flairs.map((flair, i) => (
            <a key={i} href={flair.link} target='_blank' rel='noopener noreferrer'>
              <img className={classes.flair} src={flair.path} alt={flair.alt} />
            </a>
          ))}
      </div>
      {children}
    </Paper>
  );
};

const styles = {
  label: {
    color: '#000000',
    padding: '60px 0px',
  },
  image: {
    maxWidth: '90vw',
    maxHeight: '200px',
    objectFit: 'contain',
    backgroundColor: '#FFFFFF',
  },
  content: {
    whiteSpace: 'pre-wrap',
    textAlign: 'initial',
  },
  roleStyle: {
    color: '#09f',
  },
  card: {
    margin: '20px',
    maxWidth: '1000px',
  },
  textArea: {
    padding: '20px',
  },
  imageBackground: {
    backgroundColor: 'white',
  },
  flair: {
    width: '100px',
    height: '100px',
    margin: '20px',
    border: '5px solid #08F',
    objectFit: 'contain',
    borderRadius: '15%',
    backgroundColor: '#FFF',
  },
};

export const Company = withStyles(styles)(CompanyComponent);
