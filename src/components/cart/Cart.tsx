import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './Cart.scss';
import {useContext} from 'react';
import {CartContext} from '../../contexts/Cart';

const Cart = () => {
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="cart" onClick={toggleCart}>
      <ShoppingIcon className="icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default Cart;