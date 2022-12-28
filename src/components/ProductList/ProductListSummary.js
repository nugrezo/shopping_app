import classes from "./ProductListSummary.module.css";

const ProductListSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Your Favorite Grocery with Fresh Products</h2>
      <p>
        Choose your products from our store of available products and end enjoy
        free shipping.
      </p>
      <p>All our products are organic and fresh.</p>
    </section>
  );
};

export default ProductListSummary;
