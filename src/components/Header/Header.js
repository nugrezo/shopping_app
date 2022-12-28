import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderSignInButon from "./HeaderSignInButton";
import HeaderCreateAccountButton from "./HeaderCreateAccountButton";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <ul></ul>
        <h1>Simple Book Order App</h1>
        <HeaderSignInButon />
        <HeaderCreateAccountButton />
        <HeaderCartButton />
      </header>
    </Fragment>
  );
};

export default Header;
