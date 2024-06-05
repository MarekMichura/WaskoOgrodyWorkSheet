import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import './css.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Tmp(props: any) {
  console.log(props);
  return <div>siema<Outlet /></div>
}

root.render(
  <React.StrictMode>

  </React.StrictMode>
);

