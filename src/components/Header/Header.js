import { Fragment } from "react";

//imported image from the source folder in order to use inside the jsx
import groceryShoppingImage from "../../assets/shopping.jpg";

//used css modules to style header component.
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Grocery Shopping </h1>
        <button>Cart</button>
      </header>
      {/*I can not use . notation again so I call my css like below. */}
      <div className={classes["main-image"]}>
        <img src={groceryShoppingImage} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
