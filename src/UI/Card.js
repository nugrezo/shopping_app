import classes from "./Card.module.css";

const Card = (props) => {
  return (
    /*below I wanna have very simple markup and will just return a div
    which then wraps props.children so whatever is passed between
    openin and closing tag of the card component is in the end used inside
    the card component */
    <div className={classes.card}>{props.children}</div>
  );
};

export default Card;
