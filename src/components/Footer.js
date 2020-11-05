import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Footer = () => {
  

  return (
    
    <Grid
      style={{
        backgroundColor: "#24252A",
        color: "white",
        padding: "30px",
      }}
      container
    >
      <Grid xs={6} item>
        <Typography variant="h5" style={{ fontWeight: "bolder" }}>
          Shoe Store
        </Typography>
        <Typography>
          Pakistan's top online shoe store.Known for quality.
        </Typography>
        
        <PhoneIcon/>
        <span style={{ fontSize: "1.5rem", paddingLeft: ".5rem" }}>
          +923097639237
        </span>
        <br></br>

        <MailIcon/>
        <span style={{ fontSize: "1.5rem", paddingLeft: ".5rem" }}>
          sobankhan252@gmail.com
        </span>
        <br></br>
        <br></br>

        <a href="https://www.facebook.com/mateen.blaster.5">

        <FacebookIcon style={{color:"white"}}/>
        </a>

        <a href="https://twitter.com/sobankh38643876"  >
        <TwitterIcon style={{color:"white"}}/>
        </a>
      
        
        <a href="https://www.linkedin.com/in/muhammad-soban-601570183/">
        <LinkedInIcon style={{color:"white"}}/>
        </a>
        
      </Grid>
      <Grid xs={6} item>
        <Typography variant="h5">Quick Links</Typography>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <Typography>Home</Typography>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="products">
          <Typography>Products</Typography>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="about">
          <Typography>About</Typography>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="contact">
          <Typography>Contact</Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
