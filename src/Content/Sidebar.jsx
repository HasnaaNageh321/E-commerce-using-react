import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported from react-router-dom

export default function Sidebar() {
  return (
    <>
      <ul className='listunstyled'>
        <li><Link to='/Products'>Get all products</Link></li>
      </ul>
    </>
  );
}