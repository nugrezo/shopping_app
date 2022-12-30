import { Fragment } from "react";
import AvailableProducts from "./AvailabeProducts";
import ProductListSummary from "./ProductListSummary";

const ProductList = (props) => {
  return (
    <Fragment>
      <ProductListSummary />
      <AvailableProducts />
    </Fragment>
  );
};

export default ProductList;
