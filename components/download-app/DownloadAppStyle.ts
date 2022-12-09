import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";


const useStylse = makeStyles((theme: Theme) => createStyles({
    download: {
        [theme.breakpoints.down("xs")]: {
            padding: 0
        }
    },
    downloadContainer: {
        backgroundColor: 'white',
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 20,
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            borderRadius: 0,
            alignItems: "flex-end",
            paddingBottom: theme.spacing(5)
        }
    },
    imageWrapper: {
        position: "relative",
        padding: "100px 35px",
        [theme.breakpoints.down("sm")]: {
            padding: "30px 10px",

        },
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        }
    },
    appStoreImg: {
          objectFit: "cover",
        [theme.breakpoints.down("sm")]: {
            width: 120,
            height: 40
        }
    },
    contentTitle: {
        fontWeight: 700,
        fontSize: 30,
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            fontSize: 20,
            marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",

        }
    }, text: {
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.75rem",
            marginBottom: theme.spacing(2),
        }
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        textAlign: "end",
        padding: "150px 40px",
        alignItems: "flex-end",
        [theme.breakpoints.down("sm")]: {
            padding: "30px 20px",
        }

    },
   splashImg: {
        left: "21%",
        bottom: "-1%",
        position: "absolute",
        maxWidth: "100%",
        transform: "scale(1.7)",
        [theme.breakpoints.down("xs")]: {
            left: "45px",
                bottom: "unset",
                position: "relative",
                maxWidth: "64vw",    
                marginLeft: 0,
        }
    },

    title1: {
        fontSize: 40,
        fontWeight: 600,
        [theme.breakpoints.down("sm")]: {
            fontSize: 25,
        }
    },
    title2: {
        fontSize: 50,
        fontWeight: 700,
        [theme.breakpoints.down("sm")]: {
            fontSize: 30,
        }
    },
    titleWrapper: {
        textAlign: "center",
        paddingBottom: 250,
        color: "white",
        textTransform: "uppercase",
        [theme.breakpoints.down("sm")]: {
            paddingBottom: 150,
        }
    },
    containerBg: {
        position: "absolute",
        maxWidth: "100%",
        top: "-20%",
        left: 0,
        [theme.breakpoints.down("sm")]: {
            top: 0,
        },
        [theme.breakpoints.down("sm")]: {
            transform: "rotateZ(90deg)",
            top: "20%",
            left: "28%",
        }
    },
    brand: {
        marginBottom: theme.spacing(3),
        maxWidth: "100%",
        width: 200,
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(2),
            width: 100,
        }
    }
}))

export default useStylse;