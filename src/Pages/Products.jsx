import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsStyle.css';

function ConfirmModal({ show, message, onConfirm, onCancel }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>{message}</h4>
        <div className="modal-buttons">
          <button className="btn btn-danger" onClick={onConfirm}>Yes</button>
          <button className="btn btn-secondary" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => {
        if (!res.ok) 
          {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {

        setProducts(data);
      })
      .catch((error) => console.error('There was a problem with the fetch operation:', error));
  }, []);

  const confirmDelete = (productId) => {
    setShowModal(true);
    setProductToDelete(productId);
  };

  const deleteProduct = () => {
    fetch(`http://localhost:8000/products/${productToDelete}`, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(`Failed to delete product. Status: ${res.status}. Response: ${text}`);
          });
        }
        return res.json();
      })
      .then(() => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productToDelete));
        setShowModal(false);
        setProductToDelete(null);
        console.log('Product deleted successfully');
      })
      .catch((error) => {
        console.error('There was a problem with the delete operation:', error);
      });
  };

  const cancelDelete = () => {
    setShowModal(false);
    setProductToDelete(null);
  };

  return (
    <>
      <h1>Products</h1>
      <Link to='/Products/Add' className='btn btn-success mt-3'>Add Product</Link>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className='id'>{product.id}</td>
              <td className='title'>{product.title}</td>
              <td className='description'>{product.description}</td>
              <td className='price'>{product.price}</td>
              <td>
                <Link to={`/Products/${product.id}`} className='btn btn-info btn-sm'>View</Link>
                <Link to={`/Products/Update/${product.id}`} className='btn btn-primary btn-sm'>Update</Link>
                <button className='btn btn-danger btn-sm' onClick={() => confirmDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmModal 
        show={showModal} 
        message="Are you sure you want to delete this product?" 
        onConfirm={deleteProduct} 
        onCancel={cancelDelete} 
      />
    </>
  );
}
