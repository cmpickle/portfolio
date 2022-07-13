import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Company } from './components/Company';
import companies from './work.json';
import profile from './assets/images/profile.webp';
import { Banner } from './Banner';
import { Navbar } from './components/Navbar';

export const AppComponent = (props) => {
  const { classes } = props;
  const bannerContent = () => (
    <>
      <div className={classes.tile0}>
        <div className={classes.topSpacer}></div>
        <div className={classes.badge}>
          <img src={profile} className={classes.profileImage} alt='Profile' />
          <Typography color='textPrimary' variant='subtitle1'>Hello, I'm</Typography>
          <Typography color='textPrimary' variant='h1'>Cameron Pickle</Typography>
        </div>
      </div>
      <header className={classes.appHeader}>
        <Company
          key={100}
          company={{
            id: 100,
            label: 'About Me',
            description:
              "For me, Software Engineering is a way of life.\n\nOriginally I planned on being an Electrical Engineer but quickly found that I was obsessed with Software and the problems that I could solve with it (Although I still do enjoy some good hardware work now and again). I began my journey in the software world writing C++ to control Arduinos and was enveloped by the thrill of getting it do what I wanted. I went from the guy who had never written code before to the top of the class because I loved spending time writing code!\n\nI have a passion for constantly learning and stretching myself. I love that software engineering is like a constantly evolving puzzle that I get to learn and adapt to in order to make cool new things faster and with higher quality. I enjoy learning about code, learning best practices, and learning new coding tools. My only complaint is that there isn't enough time in the day to learn everything that I want to!\n\nI started out with Java and C# and ended up enjoying the Microsoft world. I learned about design patterns and became obsessed with writing clean, scalable, and maintainable code. After a while I fell into the world of web development learning Angularjs and React. I took a heavy liking to React and started to learn Go. I then learned about DevOps where I have set up robust scalable deploy processes using docker and Kubernetes and dove into big data with messaging in Kafka and searching with Elastic Search as I continued to branch out and explore the fascinating world of software development. I have worked across many industries including enterprise content management, planning, contact center, automotive, advertising, financial, and dance. I also tend to have a bad habit of becoming the leader of all the teams I work with.\n\nAt home when I am not wake surfing, 3D Printing, automating my home, or reading I like to get in some more coding. I have worked on many personal projects and side projects over the years. I have had fun making Android apps and games, Unity games, scripts and utilities for my personal life and for my family, and as some of my side projects I have built a full dance payment and registration system and a financial advisor lead generator and distributor software.",
            flairs: [
              {
                path: 'assets/images/tech/github.webp',
                alt: 'Github',
                link: 'https://github.com/cmpickle',
              },
              {
                path: 'assets/images/tech/stack-overflow.webp',
                alt: 'Stack Overflow',
                link: 'https://stackoverflow.com/users/1758235/cmpickle',
              },
              {
                path: 'assets/images/tech/linkedin.webp',
                alt: 'LinkedIn',
                link: 'https://www.linkedin.com/in/cameronpickle/',
              },
            ],
          }}
        >
          <a
            href='https://stackoverflow.com/users/1758235/cmpickle'
            target='_blank'
            rel='noopener noreferrer'
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
          </a>
        </Company>
        {companies.companies.map((c) => (
          <Company key={c.id} company={c} />
        ))}
      </header>
      <Navbar />
    </>
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
    borderRadius: '50%',
    border: '4px solid #09f',
  },
  tile0: {
    height: '100vh',
  },
  badge: {
    width: 'fit-content',
    borderRadius: '1000px',
    backdropFilter: 'blur(5px) saturate(180%)',
    backgroundColor: 'rgba(0,153,255,.4)',
    margin: 'auto',
    padding: '10px 80px',
  },
  topSpacer: {
    height: '30vh',
  }
};

export const App = withStyles(styles)(AppComponent);
