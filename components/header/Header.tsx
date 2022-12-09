import {
  AppBar,
  Container,
  Drawer,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";
import logo from "../../logo.png";
import useStyles from "./HeaderStyles";
import { ClassNameMap } from "@material-ui/styles";

export default function Header(): JSX.Element {
  const { pathname } = useLocation();
  const classes: ClassNameMap = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const appBar = useRef(null);
  const color = "transparent";
  const changeColorOnScroll = {
    height: 400,
    upColor: "transparent",
    downColor: "dark",
  };

  React.useEffect(() => {
    window.addEventListener("scroll", headerColorChange);
    return function cleanup() {
      window.removeEventListener("scroll", headerColorChange);
    };
  }, [pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (document.body.getElementsByTagName("header")[0] != undefined)
      if (windowsScrollTop > changeColorOnScroll.height) {
        document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes[changeColorOnScroll.upColor]);
        document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes[changeColorOnScroll.downColor]);
      } else {
        document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes[changeColorOnScroll.upColor]);
        document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes[changeColorOnScroll.downColor]);
      }
  };
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
  });
  return (
    <AppBar ref={appBar} className={appBarClasses}>
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.title}>
          <Link to="/" className={classes.navLink}>
            <img src={logo} alt="Synq" className={classes.logo} />
          </Link>
        </div>
        <div className={classes.headerLinksWrapper}>
          <Hidden xsDown implementation="css">
            <HeaderLinks />
          </Hidden>
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </div>
      </Container>
      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <HeaderLinks drawerToggle={setMobileOpen} />
        </Drawer>
      </Hidden>
    </AppBar>
  );
}
