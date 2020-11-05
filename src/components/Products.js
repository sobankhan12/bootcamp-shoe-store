import React from "react";
import shoe1 from "../images/nike1.png";
import shoe2 from "../images/nike2.jpg";
import shoe3 from "../images/nike3.jpg";
import shoe4 from "../images/nike4.png";
import shoe5 from "../images/nike5.png";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const useStyles = makeStyles({
  parentCard: {
    backgroundColor: "#F5F5F5",
    marginBottom: 50 + "px",
    padding: 2 + "rem",
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

    padding: "2px 15px",
    marginTop: "1rem",
  },
  main: {
    boxShadow: "0px 0px 15px -3px rgba(0,0,0,0.75)",
    margin: "0px 70px",
  },
  heading: {
    display: "inline-block",
  },
});
const products = [
  {
    shoeID: "shoe1",
    model: "Nike Air Verona",
    type: "Women's Shoe",
    price: "$130",
    imgSrc: shoe1,
    desc:
      "Pass on the good vibes in the Nike Air Max Verona. Elegant and versatile, its mixed-material upper features a plush collar, flashy colors and unique stitching patterns. The Nike Air cushioning adds a modern twist, comfort and style to your journey.",
  },

  {
    shoeID: "shoe2",

    model: "Nike Air Max 2090",
    type: "Men's Shoe",
    price: "$150",
    imgSrc: shoe2,
    desc:
      "Bring the past into the future with the Nike Air Max 2090, a bold look inspired by the DNA of the iconic Air Max 90. Brand-new Nike Air cushioning underfoot adds unparalleled comfort while transparent mesh and vibrantly colored textile on select colorways blend with timeless OG features for an edgy, modernized look. ",
  },
  {
    shoeID: "shoe3",

    model: "Nike Air Max 270 React ENG ",
    type: "Women's Shoe",
    price: "$170",
    imgSrc: shoe3,
    desc:
      "Nike's first lifestyle Air Max meets the softest, smoothest and most resilient foam yet in the Nike Air Max 270 React ENG. The design draws inspiration from the Air Max pantheon, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
  },
  {
    shoeID: "shoe4",

    model: "Nike Air Max Plus",
    type: "Men's Shoe",
    price: "$230",
    imgSrc: shoe4,
    desc:
      "Give your attitude an edge in the Nike Air Max Plus, a Tuned Air experience that's been delivering comfort and street cred since '98. Featuring a futuristic, multi-textured upper, visible Max Air cushioning and Tuned Air graphics on the outsole and heel clip, it sets you up with high-tech comfort everyone can see.",
  },
  {
    shoeID: "shoe5",
    model: "Nike Air Max Plus 3",
    type: "Men's Shoe",
    price: "$250",
    imgSrc: shoe5,
    desc:
      "Featuring the same Tuned Air technology as its predecessors, the Nike Air Max Plus 3 updates the look with TPU fused to the upper while paying homage to the iconic colour fade of the OG.",
  },
];
const Products = () => {
  const classes = useStyles();
  return (
    <div>
      <h1
        className={classes.heading}
        style={{
          textAlign: "center",
          margin: "55px ",
          marginLeft: "45%",
          borderBottom: "2px solid black",
          paddingBottom: "10px",
        }}
      >
        Our Products
      </h1>
      {products.map((shoe, index) => (
        <div className={classes.main} data-aos="fade-up">
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

                  paddingLeft: "10px",
                  fontWeight: "bolder",
                  marginTop: 1 + "rem",
                  marginBottom: 1 + "rem",
                }}
                variant="h4"
              >
                {shoe.model}
              </Typography>
              <Typography className={classes.typet}>{shoe.type}</Typography>
              <span
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bolder",
                  marginLeft: "30px",
                }}
              >
                {shoe.price}
              </span>
              <Typography variant="body1" style={{ marginTop: 1 + "rem" }}>
                {shoe.desc}
              </Typography>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={shoe.shoeID}
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
    </div>
  );
};

export default Products;
