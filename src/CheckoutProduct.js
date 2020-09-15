import React from "react";
import FlipMove from "react-flip-move";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
const CheckoutProduct = ({ id, title, image, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <FlipMove staggerDelayBy={150} appearAnimation="accordionVertical">
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    </FlipMove>
  );
};

export default CheckoutProduct;
