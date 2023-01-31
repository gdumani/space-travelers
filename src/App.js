import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}
