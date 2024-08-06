import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddProduct() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing products to validate unique ID
    axios.get("http://localhost:8000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    // Check if the ID already exists
    if (products.some(product => product.id === id)) {
      setError('Product with this ID already exists.');
      return;
    }
    
    const newProduct = {
      id,
      title,
      description,
      price: Number(price), // Ensure price is a number
    };

    axios.post("http://localhost:8000/products", newProduct)
      .then((response) => {
        console.log(response.data);
        navigate('/products');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <form onSubmit={formSubmit}> {/* Prevent form refresh */}
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID</label>
          <input
            type="text"
            className="form-control"
            id="id"
            placeholder='ID'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))} // Ensure price is a number
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </>
  );
}
