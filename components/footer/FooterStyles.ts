import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        padding: "50px 0",
        paddingBottom: 35,
        margin: "0 auto"
    },
    newsText: {
        marginBottom: theme.spacing(3),
        fontWeight: 800,
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.4rem"
        }
    },
    textField: {
        marginBottom: "15px",
        color: "rgba(0,0,0,0.5)",
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor: "rgba(0,0,0,0.5) !important",
    },

    subscription: {
        display: "flex",
        marginBottom: "30px"
    },
    copy: {
        margin: "0 auto",
        padding: "15px",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center"
        }
    },
    navLink: {
        fontWeight: 400,
        color: "rgba(0,0,0,0.5)",
        fontSize: 16,
        textDecoration: "none",
        marginBottom: theme.spacing(2),

    },
    linkWrapper: {
        display: "flex",
        flexDirection: "column",
    },

    submitBtn: {
        padding: "8px 40px",
        fontWeight: 700
    }
}));

export default useStyles;