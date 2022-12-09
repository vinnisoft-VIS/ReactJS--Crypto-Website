import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStates = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      listStyle: "none",
      display: "flex",
      backgroundColor: "transparent",
      position: "absolute",
      top: "25%",
      left: "4%",
      zIndex: 10,
      textTransform: "uppercase",
      writingMode: "vertical-lr",

      [theme.breakpoints.down("md")]: {
        top: "13%",
      },
    },
    navLink: {
      textDecoration: "none",
      fontWeight: 700,
      fontSize: 13,
      marginBottom: theme.spacing(2),
      "&:hover": {
        textDecoration: "none",
      },
    },
  })
);

export default useStates;
