import {CartItemModel} from '../../models/CartItem';

import './CartItem.scss';

const CartItem = (item: CartItemModel) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name}/>
      <div className="details">
        <span className="name">{item.name}</span>
        <span className="price">{item.quantity} x €{item.price}</span>
      </div>
    </div>
  );
};

export default CartItem;