import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import userStyles from "./DownloadAppStyle";
import splashImg from "../../assets/images/splash.png";
import splashImg350 from "../../assets/images/splash-350.png";
import splashImg250 from "../../assets/images/splash-250.png";
import appStoreImg from "../../assets/images/app-store.png";
import brand from "../../assets/logo/logo-dark.png";
import background from "../../assets/images/logo-transparent.png";
export const DownloadApp: React.FC = () => {
  const classes = userStyles();
  return (
    <Container maxWidth="lg" className={classes.download}>
      <div className={classes.titleWrapper}>
        <Typography variant="h4" className={classes.title1}>
          Your Palm
        </Typography>
        <Typography variant="h4" className={classes.title2}>
          Is Your New Credit Card!
        </Typography>
      </div>
      <Grid container className={classes.downloadContainer}>
        <img
          src={background}
          alt="background"
          className={classes.containerBg}
        />
        <Grid item xs={12} sm={5} className={classes.imageWrapper}>
          <img
            src={splashImg}
            alt="Synq"
            className={classes.splashImg}
            srcSet={splashImg250 + " 250w," + splashImg350 + " 350w,"}
          />
        </Grid>
        <Grid item xs={9} sm={6} className={classes.contentContainer}>
          <img src={brand} alt="Synq" className={classes.brand} />
          <Typography variant="h5" className={classes.contentTitle}>
            User app is available on iOS Phones. We are working on the Android
            version.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Sign up and start making payments within seconds - No more credit
            cards, no more barcodes, no more waiting.
          </Typography>
          <img
            onClick={() => {
              window.open(
                "https://apps.apple.com/us/app/Synq-palmpay/id1608363309"
              );
            }}
            src={appStoreImg}
            alt="app store"
            width={170}
            height={60}
            className={classes.appStoreImg}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
