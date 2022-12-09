import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./LoginStyles";
import logo from "../../assets/images/favicon-main.png";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";

export default function Login(): JSX.Element {
  // jss styling
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column" className={classes.login}>
      <Container maxWidth="xs" className={classes.container}>
        {/* login title  */}
        <Typography variant="body1" align="center" className={classes.title}>
          Synq Business
        </Typography>
        {/* admin login form  */}
        <form autoComplete="false">
          <Grid container direction="column" className={classes.loginForm}>
            <img
              src={logo}
              alt="Synqoin"
              width="40"
              className={classes.logo}
              height="50"
            />
            <TextField
              fullWidth
              color="secondary"
              variant="outlined"
              label="Email Address"
              className={classes.textField}
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              size={matches ? "small" : "medium"}
            />
            <TextField
              fullWidth
              variant="outlined"
              color="secondary"
              label="Password"
              className={classes.textField}
              type="password"
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              size={matches ? "small" : "medium"}
            />
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              className={classes.submitBtn}
            >
              Login
            </Button>
            <Typography variant="body2" className={classes.disabled}>
              {" "}
              <span>Aren&apos;t you a member yet?</span>{" "}
              <Link to="/get-in-touch" className={classes.navLink}>
                Register
              </Link>
            </Typography>
          </Grid>
        </form>
      </Container>
    </Grid>
  );
}
