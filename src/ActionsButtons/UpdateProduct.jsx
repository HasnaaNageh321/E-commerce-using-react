import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateProductStyle.css';

export default function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    fetch(`http://localhost:8000/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error('There was a problem with the fetch operation:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(`Failed to update product. Status: ${res.status}. Response: ${text}`);
          });
        }
        return res.json();
      })
      .then(() => {
        console.log('Product updated successfully');
        navigate('/Products');
      })
      .catch((error) => {
        console.error('There was a problem with the update operation:', error);
      });
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}
