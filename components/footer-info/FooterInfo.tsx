import { Grid, Typography, Link as MuLink } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./FooterInfoStyle";
import brand from "../../assets/logo/logo-dark.png";
type FooterInfoType = {
  headerInfo?: boolean;
};
export const FooterInfo: React.FC<FooterInfoType> = ({
  headerInfo = false,
}: FooterInfoType) => {
  const classes = useStyles({ headerInfo });
  return (
    <Grid
      container
      xs={12}
      sm={3}
      className={classes.orgDetail}
      direction="column"
      alignItems="flex-start"
    >
      <Link to="/">
        <img
          src={brand}
          alt="Synq"
          className={classes.brand}
          width={120}
          height={40}
        />
      </Link>
      <Typography variant="body1" className={classes.text}>
        The world is waiting for a comprehensive and futuristic payment
        processing solution. Synq is designed for our time.
      </Typography>
      <div className={classes.icons}>
        <MuLink
          color="secondary"
          href="https://twitter.com/synq_one"
          target="_blank"
          rel="noopener"
        >
          <Twitter name="Synq facebook" />
        </MuLink>
        <MuLink
          color="secondary"
          href="https://www.instagram.com/synq.one/"
          target="_blank"
          rel="noopener"
        >
          <Instagram name="Synq facebook" />
        </MuLink>
        <MuLink
          color="secondary"
          href="https://www.facebook.com/synq.one"
          target="_blank"
          rel="noopener"
        >
          <Facebook name="Synq facebook" />
        </MuLink>
        <MuLink
          color="secondary"
          href="https://www.linkedin.com/company/synq1/"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn name="Synq facebook" />
        </MuLink>
      </div>
    </Grid>
  );
};
