import {Link, Outlet} from "react-router-dom";
import React, {useContext} from "react";
import {ReactComponent as Logo} from "../../assets/logo.svg";

import './Navigation.scss';
import {UserContext} from "../../contexts/User";
import {signOutUser} from "../../utils/firebase.utils";
import Cart from "../../components/cart/Cart";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import {CartContext} from "../../contexts/Cart";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <>
      <header>
        <nav>
          <Link className="brand" to="/">
            <Logo className="logo"/>
          </Link>
          <div className="links">
            <Link className="link" to="/shop">Shop</Link>
            {currentUser
              ? <span className="link" onClick={signOutUser}>Sign Out</span>
              : <Link className="link" to="/auth">Sign In</Link>
            }
            <span className="link">
              <Cart/>
            </span>
          </div>
          {isCartOpen && <CartDropdown/>}
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default Navigation;