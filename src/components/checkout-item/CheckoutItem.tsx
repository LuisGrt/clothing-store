import {CartItemModel} from '../../models/CartItem';

import './CheckoutItem.scss';
import {useContext} from 'react';
import {CartContext} from '../../contexts/Cart';

const CheckoutItem = (item: CartItemModel) => {
  const {imageUrl, name, quantity, price} = item;
  const {clearItem, addItemToCart, removeItemFromCart} = useContext(CartContext);

  const clearItemHandler = () => clearItem(item);
  const addItem = () => addItemToCart(item);
  const removeItem = () => removeItemFromCart(item);

  return (
    <div className="checkout-item">
      <div className="checkout-img">
        <img src={imageUrl} alt={name}/>
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={removeItem}>&#10094;</span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItem}>&#10095;</span>
      </div>
      <span className="price">€{price}</span>
      <div className="remove" onClick={clearItemHandler}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;