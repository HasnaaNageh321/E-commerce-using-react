import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './ContentStyle.css';
import Sidebar from './Sidebar';
import HomePage from '../Pages/HomePage';
import Products from '../Pages/Products';
import AddProduct from '../ActionsButtons/AddProduct';
import ContactUs from '../Pages/ContactUs';
import ImagePage from '../Pages/ImagePage';
import ViewProducts from '../ActionsButtons/ViewProducts'; // Correctly imported
import UpdateProduct from '../ActionsButtons/UpdateProduct';

export default function Content() {
  return (
    <div className='row'>
      <h2 className='h2'>Products</h2>
      <div className='col-2 sidebar'>
        <Sidebar />
      </div>
      <div className='col-10'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Products" element={<Products />} />
          <Route path="Products/Add" element={<AddProduct />} />
          <Route path="Products/:productId" element={<ViewProducts />} /> 
          <Route path="Products/Update/:id" element={<UpdateProduct />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="gallery" element={<ImagePage />} />
        </Routes>
      </div>
    </div>
  );
}
