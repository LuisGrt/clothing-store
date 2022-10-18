import {Link, Outlet} from "react-router-dom";
import React from "react";
import {ReactComponent as Logo} from "../../assets/logo.svg";

import './Navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <Link className="brand" to="/">
            <Logo className="logo" />
          </Link>
          <div className="links">
            <Link className="link" to="/auth">
              Sign In
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navigation;