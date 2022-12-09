import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      margin: "0 auto",
      zIndex: 4,
    },
    headerTextBig: {
      fontWeight: 800,
      fontSize: "50px",
      marginBottom: 20,
      textAlign: "right",
      [theme.breakpoints.down("sm")]: {
        fontSize: 35,
        marginBottom: 10,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 30,
      },
    },
    headerText: {
      fontWeight: 800,
      fontSize: "38px",
      // marginBottom: 20,
      marginTop: 60,
      textAlign: "right",
      [theme.breakpoints.down("sm")]: {
        fontSize: 32,
        // marginBottom: 10,
        marginTop: 50,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 30,
      },
    },
    text: {
      marginBottom: 20,
      textAlign: "right",
      [theme.breakpoints.down("sm")]: {
        marginBottom: 10,
        paddingLeft: 20,
      },
      [theme.breakpoints.down("md")]: {
        paddingleft: 10,
      },
    },
    container: {
      position: "absolute",
      top: "30%",
      right: "10%",
      justifyContent: "flex-end",
      [theme.breakpoints.down("md")]: {
        right: "10%",
        top: "25%",
      },
      [theme.breakpoints.down("sm")]: {
        right: "5%",
        top: "20%",
      },
      [theme.breakpoints.down("xs")]: {
        position: "relative",
        top: 0,
        right: 0,
        paddingTop: 50,
        paddingBottom: 50,
        paddingRight: 25,
      },
    },
    heroWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {},
    },
    button: {
      textTransform: "none",
      textDecoration: "none",
      fontWeight: 800,
    },
    heroImgae: {
      maxWidth: "100%",
      // minHeight: 1000,
      [theme.breakpoints.down("md")]: {
        maxHeight: 900,
      },
      [theme.breakpoints.down("sm")]: {
        maxHeight: 750,
      },
      [theme.breakpoints.down("xs")]: {
        maxHeight: "58vh",
      },
    },
    navLink: { textDecoration: "none" },
  })
);
