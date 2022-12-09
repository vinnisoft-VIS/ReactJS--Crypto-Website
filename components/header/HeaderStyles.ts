
import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appResponsive: {
            margin: "20px 10px",
        },
        appBar: {
            display: "flex",
            border: "0",
            borderRadius: "3px",
            padding: "0.625rem 0",
            marginBottom: "20px",
            color: "#555",
            width: "100%",
            backgroundColor: "#fff",
            boxShadow:
                "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
            transition: "all 150ms ease 0s",
            alignItems: "center",
            flexFlow: "row nowrap",
            justifyContent: "flex-start",
            position: "fixed",
            zIndex: 1100,

        },
        container: {
            minHeight: "50px",
            flex: "1",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            flexWrap: "nowrap",
        },
        dark: {
            border: "0",
            padding: "0.625rem 0",
            marginBottom: "20px",
            backgroundColor: "#000000ba  !important",
            color: "#FFFFFF",
            boxShadow:
                "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
        },
        transparent: {
            backgroundColor: "transparent !important",
            boxShadow: "none",
            // paddingTop: "25px",
            color: "#FFFFFF",
        },
        drawerPaper: {
            maxWidth: "60%",
            border: "none",
            bottom: "0",
            transitionProperty: "top, bottom, width",
            transitionDuration: ".2s, .2s, .35s",
            transitionTimingFunction: "linear, linear, ease",
            position: "fixed",
            display: "block",
            top: "0",
            height: "100vh",
            right: "0",
            left: "auto",
            visibility: "visible",
            overflowY: "visible",
            borderTop: "none",
            paddingRight: 35,
            paddingLeft: 20,
            backgroundColor: "white",
            color: "#000"
        },
        navLink: {
            color: "inherit",
            position: "relative",
            padding: "0.9375rem",
            fontWeight: 400,
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "3px",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex",
            "&:hover,&:focus": {
                color: "inherit",
                background: "rgba(200, 200, 200, 0.2)",
            },
        },
        headerLinksWrapper: {
            flex: 1,
            [theme.breakpoints.down("sm")]: {
                flex: "2 1"
            },
            [theme.breakpoints.down("xs")]: {
                flex: 0
            },
        },
        title: {
            flex: 1
        },
        logo: {
            width:"143px",
            maxWidth: "100%",
            [theme.breakpoints.down("xs")]: {
                width: 118
            }
        }
    })
);

export default useStyles;