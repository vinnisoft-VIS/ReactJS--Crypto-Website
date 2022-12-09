import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timer: {
      display: "flex",
      fontSize: "4em",
      fontWeight: 200,
      color: "#ffffff",
      textShadowColor: "#48C8FF",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 20,
      marginBottom: 15,
      [theme.breakpoints.down("md")]: {
        fontSize: "3em",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "2em",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5em",
      },
    },
    timeblock: {
      display: "inline-block",
      minWidth: "90px",
      [theme.breakpoints.down("xs")]: {
        minWidth: "60px",
      },
    },
    timetext: {
      color: "#ffffff",
      display: "block",
      fontSize: ".35em",
      fontWeight: 400,
    },
    container: {
      textAlign: "center",
    },
  })
);
