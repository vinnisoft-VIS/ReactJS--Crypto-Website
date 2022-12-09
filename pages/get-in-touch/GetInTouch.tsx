import { Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import heroImg from "../../assets/images/get-in-touch-hero1.png";
import heroImg400 from "../../assets/images/get-in-touch-hero-400.png";
import heroImg760 from "../../assets/images/get-in-touch-hero-760.png";
import { ContactForm } from "../../components/contact/ContactForm";
import { SocialLinks } from "../../components/social-links/SocialLinks";
import useStyles from "./GetInTouchStyle";

const GetInTouch: React.FC = () => {
  // jss style
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Hidden xsDown>
        <SocialLinks />
      </Hidden>
      {/* main background image  */}
      <img
        src={heroImg}
        className={classes.heroImgae}
        srcSet={heroImg400 + " 400w," + heroImg760 + " 760w"}
      />
      {/* contact form section  */}
      <Grid item className={classes.formContainer}>
        <Typography variant="h4" className={classes.title1}>
          Get in Touch
        </Typography>
        <Typography variant="body1" className={classes.title2}>
          We will get back to you and sign you up asap!
        </Typography>
        <ContactForm />
      </Grid>
    </Grid>
  );
};
export default GetInTouch;
