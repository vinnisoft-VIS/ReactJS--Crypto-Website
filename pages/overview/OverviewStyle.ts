import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heroContainer: {
            position: "relative",
            overflow: "hidden",
            margin: "0",
            padding: "0",
            border: "0",
            backgroundColor: "#101010",
        },

        benifitContainer: {
            backgroundColor: "#101010",
            paddingTop: "5rem",
            position: "relative",
            paddingBottom: 125,
            borderBottomLeftRadius: 250,
            [theme.breakpoints.down("md")]: {
                paddingBottom: 100,
                borderBottomLeftRadius: 200,
            },
            [theme.breakpoints.down("sm")]: {
                paddingBottom: 75,
                borderBottomLeftRadius: 150,
            }
        }, userBenefit: {
            backgroundColor: "#101010",
            paddingTop: "5rem",
            position: "relative",
            paddingBottom: 125,
            borderTopRightRadius: 250,
            [theme.breakpoints.down("md")]: {
                paddingBottom: 100,
                borderTopRightRadius: 200,
            },
            [theme.breakpoints.down("sm")]: {
                paddingBottom: 75,
                borderTopRightRadius: 150,
            }
        },
        download: {
            backgroundColor: "#101010",
            padding: "150px 10px",
            position: "relative",
            [theme.breakpoints.down("sm")]: {
                padding: "50px 10px",
                paddingBottom: "150px"
            },
            [theme.breakpoints.down("xs")]: {
                paddingLeft: 0,
                paddingRight: 0,
                paddingBottom: 0
            }
        },
        logoBg: {
            position: "absolute",
            width: 550,
            top: "10%",
            right: "2%",
            [theme.breakpoints.down("md")]: {
                top: "10%",
                width: 350
            },
            [theme.breakpoints.down("sm")]: {
                top: "15%",
                width: 240
            }
        },
        feature: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3)
        }
    }));

export default useStyles;