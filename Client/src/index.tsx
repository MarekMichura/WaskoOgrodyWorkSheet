import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import './css.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>path/ <Outlet /></div>}>
          <Route path='div' element={<div>div</div>} />
          <Route path='dom' element={<div>dom</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

