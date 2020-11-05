import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Shoes from "./shoes";
import Slider from "infinite-react-carousel";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  parentCard: {
    backgroundColor: "#F5F5F5",
    marginTop: 50 + "px",
    paddingTop: 2 + "rem",
    paddingLeft: 2 + "rem",
  },
  imgShoe: {
    width: 90 + "%",
    height: 100 + "%",
  },
  typet: {
    color: "#6A6A6B",
    fontSize: 1.5 + "rem",
    display: "inline",
  },
  readBtn: {
    backgroundColor: "#0088A8",
    color: "white",
    borderRadius: "50px",
    padding: "2px 15px",
    marginTop: "1rem",
  },
});
const MainSec = () => {
  const classes = useStyles();

  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div style={{ backgroundColor: "#F5F5F5", marginBottom: "100px" }}>
      <Slider {...settings}>
        {Shoes.map((shoe, index) => (
          <div>
            <Grid
              className={classes.parentCard}
              container
              direction="row"
              justify="space-between"
            >
              <Grid item xs={12} md={5}>
                <Typography
                  style={{
                    borderLeft: "8px solid #0088A8",
                    borderRadius: "50px",

                    paddingLeft: "10px",
                    fontWeight: "bolder",
                    marginTop: 4 + "rem",
                    marginBottom: 1 + "rem",
                  }}
                  variant="h4"
                >
                  {shoe.model}
                </Typography>
                <Typography className={classes.typet}>{shoe.type}</Typography>
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                    marginLeft: "30px",
                  }}
                >
                  {shoe.price}
                </span>
                <Typography style={{ marginTop: 1 + "rem" }}>
                  {shoe.desc}
                </Typography>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`products/${shoe.shoeID}`}
                >
                  <Button className={classes.readBtn}>Read More</Button>
                </Link>
              </Grid>

              <Grid xs={12} md={5} item>
                <img
                  className={classes.imgShoe}
                  src={shoe.imgSrc}
                  alt={shoe.model}
                ></img>
              </Grid>
            </Grid>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSec;
