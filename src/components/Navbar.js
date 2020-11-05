import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  appBar:{
    backgroundColor:"#454545",
    color:"white"
  },
  
  title: {
    flexGrow: 1,
  },


  link:{
    color:"white",
    textDecoration:"none",
    '&:hover':{
      textDecoration:"none",
      color:"red",
      backgroundColor:"yellow",
      
      border:"2px solid yellow",
      borderRadius:"10px"
    }
  },
  
}));
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Shoe Store
          </Typography>
          <Link className={classes.link} to="/">
            <Button  color="inherit">
              Home
            </Button>
          </Link>

          <Link
            className={classes.link}
            to="products"
          >
            <Button  color="inherit">
              Products
            </Button>
          </Link>
          <Link className={classes.link} to="about">
            <Button  color="inherit">
              About
            </Button>
          </Link>
          <Link className={classes.link} to="contact">
            <Button  color="inherit">
              Contact
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}