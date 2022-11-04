import React from 'react';
import Home from './routes/home/Home';
import {Route, Routes} from 'react-router-dom';
import Login from './routes/authentication/Authentication';
import Navigation from './routes/navigation/Navigation';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home />}/>
      <Route path="auth" element={<Login />}/>
      <Route path="shop/*" element={<Shop />}/>
      <Route path="checkout" element={<Checkout />} />
    </Route>
  </Routes>
);

export default App;
