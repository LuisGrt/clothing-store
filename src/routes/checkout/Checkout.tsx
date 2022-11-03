import {useContext} from 'react';
import {CartContext} from '../../contexts/Cart';

import './Checkout.scss';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const Checkout = () => {
  const {cartItems, total} = useContext(CartContext);

  return (
    <section className="checkout">
      <div className="header">
        <div className="block">
          <span>Product</span>
        </div>
        <div className="block">
          <span>Description</span>
        </div>
        <div className="block">
          <span>Quantity</span>
        </div>
        <div className="block">
          <span>Price</span>
        </div>
        <div className="block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => <CheckoutItem key={item.id} {...item} />)}
      <span className="total">Total: €{total}</span>
    </section>
  );
};

export default Checkout;