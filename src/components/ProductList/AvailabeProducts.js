import React from "react";
import claseses from "./AvailableProducts.module.css";
import Card from "../../UI/Card";
import ProductListItem from "./ProductListItem/ProductListItem";
import teaPhoto from "../../assets/blacktea.jpeg";
import groundBeefPhoto from "../../assets/groundbeef.jpeg";
import ricePhoto from "../../assets/rice.png";
import tomatoPhoto from "../../assets/tomato.png";
import welnut from "../../assets/welnut.jpeg";
import americanCheesePhoto from "../../assets/americanCheese.jpg";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "American Cheese",
    description: "It is mild with a creamy and salty flavor",
    price: 5.99,
    img: americanCheesePhoto,
  },
  {
    id: "p2",
    name: "5 lbs Ground Beef",
    description:
      "chopped fresh and/or frozen beef from primal cuts and trimmings",
    price: 29.99,
    img: groundBeefPhoto,
  },
  {
    id: "p3",
    name: " 8 lbs Tomato",
    description:
      "Certified organic tomatoes are synthetic pesticide and fertilizer free",
    price: 9.99,
    img: tomatoPhoto,
  },
  {
    id: "p3",
    name: "Black Tea",
    description:
      "plant that is highly oxidized, resulting in a dark reddish-gold hue",
    price: 6.99,
    img: teaPhoto,
  },
  {
    id: "p4",
    name: "2 lbs Wellnut",
    description:
      "formed by two valves, divided in two" +
      " or four sections that contain the kernels or endocarps",
    price: 11.99,
    img: welnut,
  },
  {
    id: "p5",
    name: "5 lbs Rice",
    description:
      "edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced.",
    price: 5.99,
    img: ricePhoto,
  },
];

const AvailableProducts = (props) => {
  /*I am using the productItemList component inside the map method so
    the new array will contain all the productListItems and will be return to 
    render
    */
  const productList = DUMMY_PRODUCTS.map((product, i) => {
    return (
      <ProductListItem
        key={i}
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        img={product.img}
      />
    );
  });
  return (
    <section className={claseses.products}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
