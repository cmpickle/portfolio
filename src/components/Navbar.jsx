import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
// import BookIcon from '@material-ui/icons/Book';
// import PrintingIcon from "@material-ui/icons/Print";
// import { ReactComponent as PrintingIcon } from '../assets/images/3DPrinting/3DPrinting.svg';
// import ProjectsIcon from '@material-ui/icons/FolderSpecial';
import { Redirect, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  nav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    float: 'left',
    color: '#09f',
    borderTop: '4px solid #323232',
  },
  navIcon: {
    color: 'white',
  },
  selected: {
    color: '#09f !important',
  },
  svgStyle: {
    fillColor: '#0000aa',
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [route, setRoute] = useState(location.pathname);
  const [redirect, setRedirect] = useState(undefined);
  if (redirect) {
    if (window.location.pathname !== redirect) {
      return <Redirect push to={redirect} />;
    }
  }

  return (
    <>
      <div style={{ height: '60px' }} />
      <BottomNavigation
        value={route}
        onChange={(event, newRoute) => {
          setRoute(newRoute);
          setRedirect(newRoute);
        }}
        showLabels
        className={classes.nav}
      >
        <BottomNavigationAction
          label='Home'
          classes={{ selected: classes.selected }}
          className={classes.navIcon}
          value='/'
          icon={<HomeIcon />}
        />
        {/* <BottomNavigationAction
          label='Blog'
          classes={{ selected: classes.selected }}
          className={classes.navIcon}
          value='/blog'
          icon={<BookIcon />} */}
        />
        {/* <BottomNavigationAction
          label='Projects'
          classes={{ selected: classes.selected }}
          className={classes.navIcon}
          value='/projects'
          icon={<ProjectsIcon />}
        />
        <BottomNavigationAction
          label='3D Printing'
          classes={{ colorPrimary: classes.selected }}
          className={classes.navIcon}
          value='/3d-printing'
          icon={<PrintingIcon height={24} width={24} />}
        /> */}
      </BottomNavigation>
    </>
  );
};
