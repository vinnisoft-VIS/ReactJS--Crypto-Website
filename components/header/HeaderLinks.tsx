import { Grid, Hidden, List, ListItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./HeaderLinksStyles";
import drawerbg from "../../assets/images/logo-drawer-bg.png";
import { FooterInfo } from "../footer-info/FooterInfo";

type HeaderLinksType = {
  drawerToggle?: React.Dispatch<React.SetStateAction<boolean>>;
};
const HeaderLinks: React.FC<HeaderLinksType> = ({
  drawerToggle,
}: HeaderLinksType) => {
  const classes = useStyles();
  const closeDrawer = () => {
    if (drawerToggle) drawerToggle(false);
  };
  return (
    <Grid container direction="column" style={{ height: "inherit" }}>
      <Grid item>
        <List className={classes.headerLinks}>
          <Hidden smUp>
            <img
              src={drawerbg}
              alt="background-image"
              className={classes.drawerBg}
            />
          </Hidden>
          <ListItem className={classes.listItem}>
            <Link to="/" className={classes.navLink} onClick={closeDrawer}>
              Overview
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link
              to="/crypto"
              className={classes.navLink}
              onClick={closeDrawer}
            >
              Synqoin
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link
              to="/get-in-touch"
              className={classes.navLink}
              onClick={closeDrawer}
            >
              Get In Touch
            </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid item style={{ marginTop: "auto" }}>
        <Hidden smUp>
          <FooterInfo headerInfo={true} />
        </Hidden>
      </Grid>
    </Grid>
  );
};
export default HeaderLinks;
