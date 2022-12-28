import { Fragment } from "react";
import AvailableProducts from "./AvailabeProducts";
import ProductListSummary from "./ProductListSummary";

const GroceryProducts = (props) => {
  return (
    <Fragment>
      <ProductListSummary />
      <AvailableProducts />
    </Fragment>
  );
};

export default GroceryProducts;
