import React from 'react';
import Home from './routes/home/Home.component';
import {Route, Routes} from 'react-router-dom';
import Login from './routes/login/Login.component';
import Navigation from './routes/navigation/Navigation.component';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home />}/>
      <Route path="login" element={<Login />}/>
    </Route>
  </Routes>
);

export default App;
