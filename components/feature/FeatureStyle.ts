import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: Theme) => createStyles({
    feauters: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        [theme.breakpoints.down("xs")]: {
            display: "block",
            padding: "50px 15px"
        }

    }, titleWrapper: {
        padding: 50,
        justifyContent: "space-evenly",
        [theme.breakpoints.down("sm")]: {
            padding: 10,
        },
        [theme.breakpoints.down("xs")]: {
            alignItems: "center",
            justifyContent: "space-between",
        },
        '& > h4': {
            fontWeight: 700,
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.6rem"
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: "1.2rem",
                marginBottom: "1rem"
            }
        },
        '& > h5': {
            fontWeight: 400,
            textSadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: "rgba(0, 0, 0, 0.5)",
            [theme.breakpoints.down("xs")]: {
                maxWidth: "80%"
            },
        },
    },
    featureContainer: {
        justifyContent: "space-evenly",
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            textAlign: "center"
        }
    },
    dots: {
        justifyContent: "center",
        backgroundColor: "transparent",
        '& .MuiMobileStepper-dot': {
            backgroundColor: "rgba(0,0,0,0.3)"
        },
        '& .MuiMobileStepper-dotActive': {
            backgroundColor: "black"
        }
    }
}))
