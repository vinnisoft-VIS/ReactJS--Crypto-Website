import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    heroImgae: {
        maxWidth: "100%",
        [theme.breakpoints.down("sm")]: {
            minHeight: "70vh"
        }
    },
    content: {
        alignItems: "center",
        fontWeight: 700
    },
    container: {
        backgroundColor: "#0b0b0b",
        padding: "70px 15px 200px 15px",
        color: "white",

    },

    info: {
        fontWeight: 500,
        textAlign: "center",
        marginTop: 50
        // textTransform: "uppercase"
    },
    comingSoon: {
        fontWeight: 800,
        marginTop: theme.spacing(7),
        textAlign: "center",
    },

}))

export default useStyles;