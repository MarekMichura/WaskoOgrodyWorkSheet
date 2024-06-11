import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Login/index';
import SetRole from './Login/setRole';
import User from './User';
import Admin from './Admin';
import styled from 'styled-components';

import './css.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='Role' element={<SetRole />} />
        <Route path='User' element={<User />} />
        <Route path='Admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

