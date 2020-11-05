import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
  subBtn: {
    width: 100 + "%",
    backgroundColor: "#0088A8",
    color: "white",
  },
}));
const Contact = () => {
  const classes = useStyles();

  return (
    <div style={{ padding: "2rem" }}>
      <Grid container direction="row" justify="center">
        <Grid item>
          <h1
            className={classes.heading}
            style={{
              textAlign: "center",

              borderBottom: "2px solid black",
              paddingBottom: "10px",
            }}
          >
            Contact Us
          </h1>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Your Name" />
            <br />
            <TextField id="outlined-basic" label="Email Address" />
            <br />
            <TextField id="outlined-basic" label="Contact Number" />
            <br />
            <TextField id="outlined-basic" label="Your Address" />
            <br />
          </form>
          <br />

          <textarea
            placeholder="Message"
            rows="6"
            cols="50"
            style={{ resize: "none", fontSize: "1.1rem" }}
          ></textarea>
          <br />
          <br />
          <Button className={classes.subBtn} color="inherit">
            Contact
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
