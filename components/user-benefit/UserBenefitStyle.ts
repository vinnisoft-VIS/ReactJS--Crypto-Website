import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            title: {
                position: "relative",
                textTransform: "uppercase",
                textAlign: "center",
                paddingTop: 100,
                paddingBottom: 100,
                color: "#fff",
                '& > h4:first-child': {
                    fontWeight: 600,
                    zIndex: 1,
                    [theme.breakpoints.down("sm")]: {
                        fontSize: 24,
                    }
                },
                '& > h4:last-child': {
                    display:"none",
                    color: "##4f4f4f",
                    opacity: 0.1,
                    fontWeight: "bold",
                    fontSize: 45,
                    zIndex: -2,
                    marginTop: '-43px',
                    [theme.breakpoints.down("sm")]: {
                        fontSize: 37,
                        marginTop: '-35px',
                    }, [theme.breakpoints.down("xs")]: {
                        fontSize: 32,
                        marginTop: '-30px',
                    }
                }
            }
        })
)