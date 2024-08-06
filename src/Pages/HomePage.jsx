import React from 'react';
import './HomeStyle.css';

export default function HomePage() {
  return (
   <>
    <div className="homepage-container">
      <h3>What is E-commerce?</h3>
      <p>
        E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. This digital marketplace allows businesses and consumers to transact without the limitations of geographical boundaries, making it possible to purchase almost anything online.
      </p>
      <h3>Advantages of E-commerce</h3>
      <ul className="advantages">
        <li>Convenience: Shoppers can browse and purchase products 24/7 from the comfort of their homes.</li>
        <li>Wider Selection: Access to a broad range of products and services not available locally.</li>
        <li>Price Comparisons: Consumers can easily compare prices across different sellers to find the best deals.</li>
        <li>Global Reach: Businesses can reach a global audience without the need for a physical presence in multiple locations.</li>
        <li>Lower Costs: Reduced overhead costs for businesses as they do not need physical storefronts.</li>
      </ul>
      <h3>Disadvantages of E-commerce</h3>
      <ul className="disadvantages">
        <li>Security Concerns: Risk of data breaches and fraud can deter customers.</li>
        <li>Lack of Personal Touch: Online shopping lacks the personal interaction found in traditional retail stores.</li>
        <li>Shipping Issues: Delays, costs, and complications with shipping can affect customer satisfaction.</li>
        <li>Dependence on Technology: Both businesses and consumers need reliable internet access and familiarity with technology.</li>
      </ul>
    </div>
   </>
  );
}
