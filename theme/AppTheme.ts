import { createTheme, Theme } from "@material-ui/core";

// define dark theme colors
export const darkTheme: Theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#fff",
        },
        secondary: {
            main: "#000",

        },
        text: {
            primary: "#fff",
            secondary: "rgba(0, 0, 0, 0.5)",
            disabled: "rgba(255, 255, 255, 0.5)",
        },

        action: {
            active: "#fff",
            hover: "rgba(255, 255, 255, 0.8)",
        },
        divider: "rgba(0, 0, 0, 0.2)",
    },
    typography: {
        fontFamily: "'Nunito',Roboto, Helvetica, Arial, sans-serif",
        button: {
            textTransform: "none"
        }
    },
    overrides: {
        MuiOutlinedInput: {
            root: {
                color: "rgba(0, 0, 0, 0.8)",
                borderColor: "rgba(0, 0, 0, 0.8)"
            },

        }
    }

});