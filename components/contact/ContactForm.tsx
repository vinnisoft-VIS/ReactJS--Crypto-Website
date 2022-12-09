import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Hidden,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import React, { useState } from "react";
import useStyles from "./ContactFormStyles";
import background from "../../assets/images/logo-transparent.png";
import axios from "axios";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const ContactForm: React.FC = () => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [validation, setValidation] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const submitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const REACT_APP_MAIL = "https://mail.Synq.one";

    delete axios.defaults.headers.common["Access-Control-Allow-Origin"];
    axios
      .post(`${REACT_APP_MAIL}/api/mail/`, { email, website, message })
      .then(() => {
        setValidation({});
        setEmail("");
        setWebsite("");
        setMessage("");
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
    <Container maxWidth="lg">
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        style={{ marginTop: 200 }}
      >
        <Alert onClose={handleClose} severity="success">
          We will get back to you asap!
        </Alert>
      </Snackbar>
      <Grid container className={classes.contact}>
        <img
          src={background}
          alt="background"
          className={classes.containerBg}
        />
        <Hidden smDown>
          <Grid item xs={12} md={5} className={classes.content}>
            <Typography variant="h4" className={classes.title}>
              {" "}
              Upgrade your business with the technology of the future!
            </Typography>
            <Typography variant="body1" className={classes.emailInfo}>
              Email: team@synq.one
            </Typography>
          </Grid>
        </Hidden>

        <Grid item sm={12} md={6}>
          <form
            className={classes.form}
            onSubmit={(e) => submitMessage(e)}
            autoComplete="false"
            noValidate
          >
            <TextField
              label="Email"
              variant="outlined"
              placeholder="Your email ..."
              className={classes.textField}
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              fullWidth
              required
              color="secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={validation?.email != null ? true : false}
              helperText={
                validation?.email != null ? validation.email.join("\n") : null
              }
            />
            <TextField
              label="Business Website"
              variant="outlined"
              className={classes.textField}
              inputProps={{ className: classes.input }}
              fullWidth
              placeholder="www.example.com"
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              color="secondary"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              error={validation?.website != null ? true : false}
              helperText={
                validation?.website != null
                  ? validation.website.join("\n")
                  : null
              }
            />
            <TextField
              multiline
              label="Message"
              variant="outlined"
              className={classes.textField}
              inputProps={{ className: classes.input }}
              fullWidth
              required
              color="secondary"
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              placeholder="Your message ..."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={validation?.message != null ? true : false}
              helperText={
                validation?.message != null
                  ? validation.message.join("\n")
                  : null
              }
            />
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              className={classes.submitBtn}
            >
              Send{" "}
              {loading && (
                <CircularProgress style={{ marginLeft: 10 }} size={20} />
              )}
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
