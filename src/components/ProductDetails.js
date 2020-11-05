import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
const shoes = {
  shoe1: {
    model: "Nike Air Max Verona",
    price: "$130",
    about:
      "Pass on the good vibes in the Nike Air Max Verona. Elegant and versatile, its mixed-material upper features a plush collar, flashy colours and unique stitching patterns. The Nike Air cushioning adds a modern twist, comfort and style to your journey.",
    benefits: [
      "A bold, lifted stance inspired by women who move culture forward.",
      "Beautifully crafted with nods to Nike Air Max design.",
      "Premium leather and textile materials in the upper elevate the aesthetic.",
      "Nike Air cushioning in the heel is combined with soft, flexible foam underfoot for a comfortable experience that lasts.",
      "Modern graphics on the side and heel offer a standout look for any wardrobe, while the painted window around the Air unit adds a feminine twist to an icon.",
    ],
    details: [
      "Partial rubber outsole for traction and durability.",
      "Pull tab.",
      "Colour Shown: Summit White/Sail/Magenta/Laser Crimson.",
      "Style: CZ6156-100.",
      "Country/Region of Origin: Indonesia.",
    ],
  },
  shoe2: {
    model: "Nike Air Max 2090",
    price: "$150",
    about:
      "Bring the past into the future with the Nike Air Max 2090, a bold look inspired by the DNA of the iconic Air Max 90. Brand-new Nike Air cushioning underfoot adds unparalleled comfort while transparent fabric on the upper is blended with timeless OG features for an edgy, modernised look.",
    benefits: [
      "More Air underfoot creates a softer, more comfortable ride while 360 degrees of ribbed, translucent rubber frames your air for a bold, futuristic look.",
      "The foam midsole and rubber outsole provide durable cushioning and traction while flex grooves let you move naturally.",
      "The new speed design lets you quickly lace up and go while the internal bootie construction and padded heel feels snug and comfortable for all-day wear.",
      "Nike Air cushioning in the heel is combined with soft, flexible foam underfoot for a comfortable experience that lasts.",
      "Rubber faux-Waffle sole with large flex grooves mixes heritage style with modern aesthetic and adds traction and durability.",
    ],
    details: [
      "Pull tab.",
      "AIR logo is recessed into heel for a lasting look.",
      "Not intended for use as Personal Protective Equipment.",
      "Colour Shown: White/Pure Platinum/Bright Crimson/Black.",
      "Style: CT7695-100.",
      "Country/Region of Origin: Vietnam.",
    ],
  },
  shoe3: {
    model: "Nike Air Max 270 React ENG",
    price: "$170",
    about:
      "Nike's first lifestyle Air Max meets the softest, smoothest and most resilient foam yet in the Nike Air Max 270 React ENG. The design draws inspiration from the Air Max pantheon, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
    benefits: [
      "A full-length Nike React foam midsole provides unrivalled comfort from heel to toe. The 270 Max Air unit adds comfort and visual interest. Padded foam on the collar adds plush comfort.",
      "The TPU welded overlays on the upper add lightweight structure and modern style. Removable lace toggle offers a quick, adjustable fit and versatile styling option.",
      "Engineered mesh on the upper enhances breathability.",

      "A synthetic no-sew toe tip overlay adds durability.",
    ],
    details: [
      "Pull tab loops on the heel and tongue.",
      "Traditional tongue with webbing loops and punched eyelets.",
      "Colour Shown: Eggplant/Magic Flamingo/Vivid Purple/White.",
      "Style: CK2595-500.",

      "Country/Region of Origin: Vietnam.",
    ],
  },
  shoe4: {
    model: "Nike Air Max Plus",
    price: "$230",
    about:
      "Give your attitude an edge in the Nike Air Max Plus, a Tuned Air experience that's been delivering comfort and street cred since '98. Featuring a futuristic, multi-textured upper, visible Max Air cushioning and Tuned Air graphics on the outsole and heel clip, it sets you up with high-tech comfort everyone can see.",
    benefits: [
      "The synthetic leather and fabric on the upper add comfort, breathability and durability.",
      "Originally designed for performance running, the Max Air units provide lightweight cushioning.",
      "The gradient colours add heritage style to the bad boy look of this powerhouse Air Max.",

      "The prominent TPU arch draws inspiration from a whale's tail and adds structure, while the iconic TPU fingers nod to palm trees and ocean waves.",
    ],
    details: [
      "Foam midsole.",
      "Rubber outsole.",
      "Not intended for use as Personal Protective Equipment (PPE).",
      "Style: CZ7552-002.",

      "Country/Region of Origin: Indonesia.",
    ],
  },
  shoe5: {
    model: "Nike Air Max Plus 3",
    price: "$250",
    about:
      "Featuring the same Tuned Air technology as its predecessors, the Nike Air Max Plus 3 updates the look with TPU fused to the upper while paying homage to the iconic colour fade of the OG.",
    benefits: [
      "The Air-Sole units in the heel and forefoot provide lightweight cushioning.",
      "The leather and mesh upper combine breathability and durability with heritage look.",
      "The rubber sole adds traction and durability.",

      "The TPU fingers and colour fade throwback to the OG.",
    ],
    details: [
      "TPU heel clip.",
      "Rubber outsole.",
      "Not intended for use as Personal Protective Equipment (PPE).",
      "Style: CK6715-101.",

      "Country/Region of Origin: Vietnam.",
    ],
  },
};

const ProductDetails = () => {
  const { productID } = useParams();
  const curShoe = shoes[productID];

  return (
    <div style={{ padding: "3rem" }}>
      <Typography
        variant="h3"
        style={{ borderLeft: "8px solid #0088A8", paddingLeft: "1rem" }}
      >
        {curShoe.model}
      </Typography>
      <br />
      <Typography variant="h6">Price : {curShoe.price}</Typography>
      <Typography>{curShoe.about}</Typography>
      <br />
      <Typography variant="h6">Benefits:</Typography>
      {curShoe.benefits.map((benefit, index) => (
        <li>{benefit}</li>
      ))}
      <br />
      <Typography variant="h6">Details:</Typography>
      {curShoe.details.map((detail, index) => (
        <li>{detail}</li>
      ))}
    </div>
  );
};

export default ProductDetails;
