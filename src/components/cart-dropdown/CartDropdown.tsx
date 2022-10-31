import Button from '../button/Button';

import './CartDropdown.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="items"></div>
      <Button buttonStyle='default'>
        <span>Go to checkout</span>
      </Button>
    </div>
  );
}

export default CartDropdown;