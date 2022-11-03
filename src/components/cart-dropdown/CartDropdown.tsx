import Button from '../button/Button';

import './CartDropdown.scss';
import {useContext} from 'react';
import {CartContext} from '../../contexts/Cart';
import CartItem from '../cart-item/CartItem';
import {useNavigate} from 'react-router-dom';

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-dropdown">
      <div className="items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <Button buttonStyle="default" onClick={goToCheckout}>
        <span>Go to checkout</span>
      </Button>
    </div>
  );
};

export default CartDropdown;