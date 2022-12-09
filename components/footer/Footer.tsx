import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import useStyles from "./FooterStyles";
import { FooterInfo } from "../footer-info/FooterInfo";
import axios from "axios";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Footer(): JSX.Element {
  const classes: ClassNameMap = useStyles();
  const [email, setEmail] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState<any>({});
  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const submitSubs = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const REACT_APP_MAIL = "https://mail.Synq.io";

    delete axios.defaults.headers.common["Access-Control-Allow-Origin"];
    axios(`${REACT_APP_MAIL}/api/subscribe/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email: email },
    })
      .then(() => {
        setValidation({});
        setEmail("");
        setLoading(false);
        setOpen(true);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response && err.response.status == 400) {
          setValidation(err.response.data);
        } else {
          alert("Internal server error : 500 \n\r Please contact admin");
        }
      });
  };
  return (
    <div>
      <Grid
        container
        xs={11}
        justifyContent="space-between"
        className={classes.container}
      >
        <FooterInfo />
        <Grid
          item
          xs={12}
          sm={3}
          className={classes.subscription}
          alignItems="flex-start"
          direction="column"
        >
          <Typography variant="body1" className={classes.newsText}>
            Newsletter
          </Typography>
          <form noValidate autoComplete="off" onSubmit={(e) => submitSubs(e)}>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              style={{ marginBottom: 100 }}
            >
              <Alert onClose={handleClose} severity="success">
                You have subscribed successfully!{" "}
              </Alert>
            </Snackbar>
            <div>
              <TextField
                size="small"
                fullWidth
                required
                label="Email Address"
                variant="outlined"
                value={email}
                color="secondary"
                classes={{
                  root: classes.textField,
                }}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                error={validation?.email != null ? true : false}
                helperText={
                  validation?.email != null ? validation.email.join("\n") : null
                }
              />
            </div>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.submitBtn}
            >
              Submit
              {loading && (
                <CircularProgress style={{ marginLeft: 10 }} size={20} />
              )}
            </Button>
          </form>
        </Grid>
        <Grid item sm={4}>
          <Grid container justifyContent="space-around">
            <Grid item xs={12} sm={5}>
              <Typography variant="body1" className={classes.newsText}>
                Pages
              </Typography>
              <div className={classes.linkWrapper}>
                <Link to="/" className={classes.navLink}>
                  Overview
                </Link>
                <Link to="/crypto" className={classes.navLink}>
                Synqoin
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant="body1" className={classes.newsText}>
                For Businesses
              </Typography>
              <div className={classes.linkWrapper}>
                <Link to="/get-in-touch" className={classes.navLink}>
                  Get In Touch
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider />
      <Grid item xs={11} className={classes.copy}>
        <Typography variant="body1">© 2022 Synq, Inc.</Typography>
      </Grid>
    </div>
  );
}
