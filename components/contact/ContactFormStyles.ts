import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    contact: {
        backgroundColor: "white",
        color: "black",
        padding: "100px 30px",
        justifyContent: "space-between",
        borderRadius: 20,
        position: "relative",
        [theme.breakpoints.down("sm")]:
        {
            width: "80%",
            margin: "0 auto"
        },
        [theme.breakpoints.down("xs")]:
        {
            width: "100%",
            margin: "0 auto",
            padding: "50px 20px",
            flexDirection: "column"
        }

    },
    content: {
        display: "flex",
        flexDirection: "column",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        [theme.breakpoints.down("sm")]:
        {
            alignItems: "center",
        }
    },
    title: {
        fontWeight: 800,
        marginBottom: theme.spacing(3)
    },
    emailInfo: {
        marginBottom: theme.spacing(2)
    },
    textField: {
        width: "80%",
        backgroundColor: "#fcfcfc",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down("xs")]:
        {
            width: "100%",
        }
    },
    input: {
        // color: black",
        borderColor: "gray !important",
        '&:focus': {
            color: "black",
        }
    },
    containerBg: {
        position: "absolute",
        maxWidth: "100%",
        top: "-20%",
        left: 0,
        [theme.breakpoints.down("sm")]: {
            top: 0
        },
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    submitBtn: {
        padding: "10px 40px",
        fontWeight: 600,
        [theme.breakpoints.down("sm")]: {
            marginLeft: "auto",
            marginRight: "10%"
        },
        [theme.breakpoints.down("xs")]:
        {
            width: "100%",
        }
    }
}))

export default useStyles;