import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerLinks: {
            fontSize: "14px",
            margin: 0,
            paddingLeft: "0",
            listStyle: "none",
            paddingTop: "0",
            paddingBottom: "0",
            color: "inherit",
            display: "flex",
            justifyContent: "space-around",
            position: "relative",
            [theme.breakpoints.down("xs")]: {
                flexDirection: "column"
            },
        },
        drawerBg: {
            maxWidth: "60%",
            position: "absolute",
            top: 0,
            left: 0
        },
        listItem: {
            // float: "right",
            color: "inherit",
            position: "relative",
            display: "block",
            width: "auto",
            margin: "0",
            padding: "0",
            [theme.breakpoints.down("xs")]: {
                width: "100%",
                "&:after": {
                    width: "100%",
                    content: '""',
                    display: "block",
                    height: "1px",
                    marginLeft: 20,
                    backgroundColor: "#e5e5e5",
                },
                "&:last-of-type:after": {
                    height: 0
                },
                "&:first-of-type": {
                    marginTop: 70
                }

            },
        },
        navLink: {
            color: "inherit",
            position: "relative",
            padding: "0.9375rem",
            fontWeight: 600,
            fontSize: "16px",
            borderRadius: "3px",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex",
            "&:hover,&:focus": {
                color: "inherit",
                background: "rgba(200, 200, 200, 0.2)",
            },
            [theme.breakpoints.down("xs")]: {
                width: "100%",
                justifyContent: "flex-end"
            }
        }
    }));

export default useStyles;