import { Container, Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import { SocialLinks } from "../../components/social-links/SocialLinks";
import useStyles from "./CryptoStyles";
import heroImg from "../../assets/images/petra-hero1.png";
import heroImg770 from "../../assets/images/petra-hero-770.png";
import heroImg420 from "../../assets/images/petra-hero-420.png";
import favicon from "../../assets/images/favicon-dark.png";
import petraxlogo from "../../assets/images/favicon-main.png";
import { CryptoItemType } from "../../model/model";
import { CryptoItem } from "../../components/crypto-item/CryptoItem";

export default function Crypto(): JSX.Element {
  //jss style
  const classes = useStyles();

  // items data
  const cryptoItems: CryptoItemType[] = [
    {
      title: "Synqoin",
      image: favicon,
      text: "Synqoin is the first crypto currency designed for daily transactions.",
    },
  ];
  return (
    <Grid container direction="column">
      <Hidden xsDown>
        <SocialLinks />
      </Hidden>
      <Grid item xs={12}>
        <Grid container>
          <img
            src={heroImg}
            className={classes.heroImgae}
            srcSet={heroImg420 + " 420w," + heroImg770 + " 768w"}
          />
        </Grid>
      </Grid>
      <Grid item className={classes.container}>
        <Container maxWidth="lg">
          <Grid container className={classes.content} direction="column">
            <Grid container justifyContent="space-around">
              {cryptoItems.map((item) => (
                <CryptoItem {...item} key={item.title} />
              ))}
            </Grid>
            <Typography variant="body1" className={classes.info}>
              {" "}
              You will soon be able to pay with Synqoin at all of our partner
              locations.{" "}
            </Typography>
            <Typography variant="h3" className={classes.comingSoon}>
              Contact us to become one of our earliest investors!
            </Typography>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
