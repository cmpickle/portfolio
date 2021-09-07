import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Banner } from "./Banner";
import { Navbar } from "./components/Navbar";

export const PrintingComponent = (props) => {
  const { classes } = props;
  const bannerContent = () => (
    <>
      <Typography color="textPrimary" variant="h1">
        3D Printing
      </Typography>
    </>
  );
  return (
    <div className={classes.app}>
      <Banner component={bannerContent}></Banner>
      <Navbar />
    </div>
  );
};

const styles = {
  appHeader: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontize: "calc(10px + 2vmin)",
    color: "white",
  },
  app: {
    textAlign: "center",
  },
  profileImage: {
    marginTop: "30vh",
    borderRadius: "50%",
    border: "4px solid #09f",
  },
};

export const Printing = withStyles(styles)(PrintingComponent);
