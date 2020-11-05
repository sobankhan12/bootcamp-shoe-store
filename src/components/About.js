import React from "react";
import { Typography } from "@material-ui/core";
import soban from "../images/soban.jpg";

const About = () => {
  return (
    <>
      <div style={{ padding: "3rem" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",

            borderBottom: "2px solid black",
            paddingBottom: "10px",
          }}
        >
          About Us
        </Typography>
        <Typography style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
          Shoe Stoe brings you the number one quality over 15 top footwear
          brands of the world.You can chose from a wide variety of shoes
          designed according to the latest trends.We offer comfort as well as
          value for money and our shoes have been Sialkot's number one choice
          since 1993.Our Products range from sports to casual wear are perfect
          for fitness and sports enthusiests.We are the only reatailers in
          Pakistan who have jumbo shoes.
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img
          alt="soban"
          src={soban}
          style={{
            width: 18 + "rem",
            height: 18 + "rem",
            borderRadius: "50%",
            // margin: "0px 40%",
          }}
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h4" style={{ marginTop: "1rem" }}>
          Furqan Khan
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h4" style={{ color: "grey" }}>
          C.E.O
        </Typography>
      </div>
      <br />
      <br />
    </>
  );
};

export default About;
