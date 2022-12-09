import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        login: {
            backgroundColor: "#0b0b0b",
            minHeight: "90vh",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            [theme.breakpoints.down("xs")]: {
                paddingBottom: 100
            }

        },
        container: {
            [theme.breakpoints.down("xs")]: {
                padding: theme.spacing(3)
            }
        },
        loginForm: {
            backgroundColor: "white",
            padding: "50px 30px",
            width: "100%",
            borderRadius: 20,
            justifyContent: "space-between",
            [theme.breakpoints.down("xs")]: {
                borderRadius: theme.spacing(3)
            }
        },
        title: {
            marginBottom: 30,
            fontWeight: 600,
            fontSize: "1.2rem",
            [theme.breakpoints.down("sm")]: {
                marginTop: 150
            }
        }, logo: {
            textAlign: 'center',
            maxWidth: "100%",
            margin: "0 auto",
            marginBottom: theme.spacing(3)
        },
        textField: {
            // backgroundColor: "rgba(162, 162, 162, 0.11)"
            borderColor: "rgba(162, 162, 162, 0.2)",
            marginBottom: theme.spacing(3),
            "&:hover": {
                borderColor: "rgba(162, 162, 162, 0.4) !important",
            }
        },
        input: {
            borderColor: "rgba(162, 162, 162, 0.4)",
            "&:hover": {
                borderColor: "rgba(162, 162, 162, 0.4) !important",
            }
        },
        submitBtn: {
            marginBottom: theme.spacing(3)
        }
        , disabled: {
            textAlign: "center",
            color: "rgba(0,0,0,0.5)",
            justifyContent: "space-around",
            display: "inline-flex"
        }
        , navLink: {

            color: "#000",
            fontWeight: 700,
            textDecoration: "none"
        }
    }))