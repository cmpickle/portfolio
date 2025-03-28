import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';

export const ContentCard = (props) => {
  const { id, name, picture, description } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card} key={id}>
      <CardActionArea style={{ height: '100%' }}>
        {
          <CardMedia
            image={picture}
            style={{
              height: '300px',
              width: '100%',
            }}
            title={name}
          />
        }
        <CardContent style={{ height: '100%' }}>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const useStyles = makeStyles({
  card: {
    margin: '10px',
    width: '300px',
  },
  grid: {
    display: 'grid',
    gridGap: '10px',
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridAutoFlow: 'dense',
    transition: 'all 1s',
  },
  accordion: {
    backgroundColor: '#fdd7d3',
  },
});
