import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import { Banner } from './Banner';
import { Navbar } from './components/Navbar';
import { Company } from './components/Company';

const ProjectsComponent = (props) => {
  const bannerContent = () => (
    <>
      <Typography variant='h1'>Projects</Typography>
      <div className={props.classes.appHeader}>
        <Company
          key={100}
          company={{
            id: 100,
            name: 'Vibe',
            image: 'assets/images/vibe.png',
            description:
              'I created a CMS for a dance studio with User roles for Admins and Teachers. Admins are able to update the site content and view financials for the site while teachers are only able to access their specific classes and send emails to their classes. Clients are able to create their own accounts with one or more dancers complete registration and make online payments for their tuition and fees. Click the link below to see a demo of the site.',
            flairs: [
              {
                path: 'assets/images/vibe-flair.png',
                alt: 'Vibe Dance',
                link: 'https://vibe.cameronpickle.com',
              },
            ],
          }}
        ></Company>
      </div>
      <Navbar />
    </>
  );
  return <Banner component={bannerContent}></Banner>;
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
};

export const Projects = withStyles(styles)(ProjectsComponent);
