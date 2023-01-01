import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./ProductListItem.module.css";
import ProductListItemForm from "./ProductListItemForm";

const ProductListItem = (props) => {
  const cartCtx = useContext(CartContext);
  /*typing below is a helper function which will allow me to design price
    whenever I call end render inside my component. Below format will help me 
    to render two decimel of the price.
    */
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.product}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div className={classes.img}>
          <img src={props.img} alt="" />
        </div>
      </div>
      <div>
        {/*here I wanna enter simple form which allows user to
          enter the amount of products that user wants to add to cart 
          and the button. This is done in another component and I called below.  
          */}
        <ProductListItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductListItem;
