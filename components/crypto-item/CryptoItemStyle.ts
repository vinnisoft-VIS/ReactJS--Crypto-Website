import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { findByLabelText } from "@testing-library/dom";

const useStylse = makeStyles((theme: Theme) => createStyles({
    card: {
        padding: 20,
        alignItems: "center",
        textAlign: "center",
        paddingBottom: 60,
        maxWidth: 450,
        [theme.breakpoints.down("xs")]: {
            margin: "0 auto"
        }
    },
    title: {
        fontWeight: 800,
        marginBottom: theme.spacing(4)
    },
    logoWrapper: {
        position: "relative",
        padding: "10px 15px",
        borderRadius: "50%",
        border: "2px solid white",
        marginBottom: theme.spacing(4),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {

    },
    logo: {
        fontSize: 13,
        color: 'black',
        position: "absolute",
        right: 2
    }
}))

export default useStylse;