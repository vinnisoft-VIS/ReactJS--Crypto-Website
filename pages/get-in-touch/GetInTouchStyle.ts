import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    heroImgae: {
        maxWidth: "100%",
        backgroundColor: "#0b0b0b",
        [theme.breakpoints.down("sm")]: {
            minHeight: "70vh"
        }
    },
    formContainer: {
        backgroundColor: "#0b0b0b",
        display: "flex",
        flexDirection: "column",
        paddingTop: 100,
        paddingBottom: 150,

    },
    title1: {
        textAlign: "center",
        fontWeight: 700,
        color: "white",
        textTransform: "uppercase",
        marginBottom: theme.spacing(3),
    },
    title2: {
        textAlign: "center",
        fontWeight: 600,
        color: "white",
        marginBottom: theme.spacing(5)
    }
}))

export default useStyles;