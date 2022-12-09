import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
        paddingTop: 50,
        paddingBottom: 50,
        display: "flex",
        flexDirection: "column",
        marginRight: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            marginRight: theme.spacing(2),
        },
        [theme.breakpoints.down("sm")]: {
            marginRight: theme.spacing(2),
        }
    },
    title: {
        fontWeight: 700,
        marginBottom: theme.spacing(2),
    },
    icon: {
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("xs")]: {
            margin: "0 auto",
            marginBottom: theme.spacing(3),
        }
    }
}))