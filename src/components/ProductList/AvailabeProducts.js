import React from "react";
import claseses from "./AvailableProducts.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "American Cheese",
    description:
      "It is mild with a creamy and salty flavor" +
      " has a medium- firm consistency, and has a low melting point.",
    price: 5.99,
  },
  {
    id: "p2",
    name: "5 lbs Ground Beef",
    description:
      "chopped fresh and/or frozen beef from primal cuts and trimmings",
    price: 29.99,
  },
  {
    id: "p3",
    name: " 8 lbs Tomato",
    description:
      "Certified organic tomatoes are synthetic pesticide and fertilizer free",
    price: 9.99,
  },
  {
    id: "p3",
    name: "Sneakers",
    description:
      "It is mild with a creamy and salty flavor" +
      " has a medium- firm consistency, and has a low melting point.",
    price: 5.99,
  },
  {
    id: "p4",
    name: "American Cheese",
    description:
      "It is mild with a creamy and salty flavor" +
      " has a medium- firm consistency, and has a low melting point.",
    price: 5.99,
  },
  {
    id: "p5",
    name: "5 lbs Rice",
    description:
      "edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced.",
    price: 5.99,
  },
];

const AvailableProducts = (props) => {
  const productList = DUMMY_PRODUCTS.map((product, i) => {
    return <li key={i}>{product.name}</li>;
  });
  return (
    <section className={claseses.products}>
      <ul>{productList}</ul>
    </section>
  );
};

export default AvailableProducts;
