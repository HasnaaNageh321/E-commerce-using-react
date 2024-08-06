import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ImagePageStyle.css';

export default function ImagePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('There was a problem with the fetch operation:', error));
  }, []);

  return (
    <>
      <h1>Product Images</h1>
      {/* <Link to={'/Products/Add'} className='btn btn-success mt-3'>Add Product</Link> */}
      <div className="product-images-container mt-5">
        {products.map((product) => (
          <div key={product.id} className='product-image'>
            <img src={product.image} alt={product.title} className='img-fluid' />
            <p>price :{product.price} $</p>
          </div>
        ))}
      </div>
    </>
  );
}
