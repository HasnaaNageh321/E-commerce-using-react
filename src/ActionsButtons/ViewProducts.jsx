// src/ActionsButtons/ViewProduct.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ViewProductStyle.css'; 


export default function ViewProduct() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/products/${productId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((productData) => setProduct(productData))
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching product:', error);
      });
  }, [productId]);

  return (
    <div className="product-container">
      <h1>View Details of Product #{productId}</h1>
      {error ? (
        <p className="error-message">Error: {error}</p> // Add error styling
      ) : product ? (
        <>
          <h1 className="product-id">Product ID: {product.id}</h1>
          <h2 className="product-title">Title: {product.title}</h2>
          <h3 className="product-description">Description: {product.description}</h3>
          <h4 className="product-category">Category: {product.category}</h4>
          <img className="product-image" src={product.image} alt={product.title} />
          <p className="product-price">Price: ${product.price}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

