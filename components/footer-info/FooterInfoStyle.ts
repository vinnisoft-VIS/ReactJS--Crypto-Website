import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, { headerInfo: boolean }>((theme: Theme) => createStyles({
    brand: {
        maxWidth: "100%",
        marginBottom: 20

    }, orgDetail: {
        marginBottom: "30px",
        alignItems: ({ headerInfo }) => !headerInfo ? "flex-start" : "flex-end",
    },
    icons: {
        width: "100%",
        color: "#000",
        display: "flex",
        justifyContent: ({ headerInfo }) => !headerInfo ? "flex-start" : "flex-end",
        '& > a': {
            marginRight: theme.spacing(3)
        },
        '& > a:last-of-type': {
            marginRight: "unset"
        }
    },
    text: {
        width: "100%",
        fontWeight: 400,
        fontSize: "14px",
        marginBottom: 20,
        textAlign: ({ headerInfo }) => !headerInfo ? "start" : "end",
    },
}));

export default useStyles;