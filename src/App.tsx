import React from 'react';
import Home from './routes/home/Home';
import {Route, Routes} from 'react-router-dom';
import Login from './routes/authentication/Authentication';
import Navigation from './routes/navigation/Navigation';
import Shop from './routes/shop/Shop';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home />}/>
      <Route path="auth" element={<Login />}/>
      <Route path="shop" element={<Shop />}></Route>
    </Route>
  </Routes>
);

export default App;
