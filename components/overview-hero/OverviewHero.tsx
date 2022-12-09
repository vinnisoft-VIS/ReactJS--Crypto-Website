import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.png";
import heroImg1280 from "../../assets/images/hero-1280(1).png";
import heroImg800 from "../../assets/images/hero-800.png";
import heroImg400 from "../../assets/images/hero-400.png";
import { useStyles } from "./OverviewHeroStyles";
import { CountDown } from "../countdown/CountDown";

export const OverviewHero: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.hero}>
      <Grid container>
        <img
          src={heroImage}
          className={classes.heroImgae}
          srcSet={
            heroImg400 +
            " 414w," +
            heroImg800 +
            " 768w," +
            heroImg1280 +
            " 1280w"
          }
          alt="Synq overview"
          loading="eager"
          width="2170"
          height="1220"
        />
      </Grid>
      <Grid container className={classes.container}>
        <Grid item xs={9} sm={7} md={6} lg={5} className={classes.heroWrapper}>
          {/* <CountDown /> */}
          <Typography
            variant="h4"
            color="textPrimary"
            className={classes.headerTextBig}
          >
            Synq PalmPay is here!
          </Typography>

          {/* <Typography
            variant="body1"
            color="textPrimary"
            align="right"
            className={classes.text}
          >
            Join our Virtual Launch on Thursday March 17, 2022. <br />
            12:00 - 1:30pm (EST).
          </Typography>
          <a
            href="https://www.eventbrite.com/e/Synq-palmpay-product-launch-registration-292806761907"
            target="_blank"
            rel="noreferrer"
            className={classes.navLink}
          >
            <Button variant="contained" className={classes.button}>
              Register Here!
            </Button>
          </a> */}
          {/* <br />
          <br /> */}

          <Typography
            variant="body1"
            color="textPrimary"
            align="right"
            className={classes.text}
          >
            Synq offers conventional and crypto payment exchange through the
            integration of contactless palm readers with tablets!
          </Typography>
          <Link to="/get-in-touch" className={classes.navLink}>
            <Button variant="contained" className={classes.button}>
              Get Started!
            </Button>
          </Link>
          <br />

          {/* <Typography
            variant="h5"
            color="textPrimary"
            className={classes.headerText}
          >
            Your Future & Your Decision
          </Typography> */}
        </Grid>
      </Grid>
    </Grid>
  );
};
