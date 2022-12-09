import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme, { leftStyle: boolean }>((theme: Theme) => createStyles({
    title: {
        fontWeight: 800,
        fontSize: 28,
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("xs")]: {
            fontSize: 20,
            textAlign: "center"
        },
    },
    benefit: {
        paddingTop: "100px",
        paddingBottom: "100px",
        flexDirection: ({ leftStyle }) => leftStyle ? "row" : "row-reverse",

        [theme.breakpoints.down("sm")]: {
            paddingTop: "50px",
            paddingBottom: "50px",
            marginBottom: 150
        },

        [theme.breakpoints.down("xs")]: {
            flexDirection: () => "column-reverse",
            flexWrap: "nowrap",
            marginBottom: 40
        }
    },
    content: {

        justifyContent: "flex-end",
        alignItems: ({ leftStyle }) => leftStyle ? "flex-end" : "flex-start",
        textAlign: ({ leftStyle }) => leftStyle ? "end" : "start",
        [theme.breakpoints.down("xs")]: {
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: () => "center",
            marginTop: "1rem"
        }
    },
    text: {
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("xs")]: {
            textAlign: "center"
        }
    },
    img: {
        maxWidth: "100%",
        borderRadius: "15px"
    },
    navLink: {
        textDecoration: "none",
        '& > p': {
            fontWeight: 700,
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: "auto"
        }
    }, media: {
        borderRadius: 15,
        maxWidth: "100%"
    }, card: {
        position: "absolute",
        width: '45%',
        bottom: "-30%",
        right: "-7%",
        backgroundColor: "transparent",
        [theme.breakpoints.down("xs")]: {
            right: "5%"
        }
    }, cardContainer: {
        position: "relative",
        display: "block",
        [theme.breakpoints.down("xs")]: {
            paddingLeft: 20,
            paddingRight: 20,
            marginBottom: 90
        }
    }
}))

export default useStyles;