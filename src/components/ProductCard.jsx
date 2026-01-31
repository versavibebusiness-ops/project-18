import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-card-body">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">₹{product.price}</div>
            </div>
            <div className="product-card-footer">
                <Link to={`/product/${product.id}`} className="btn btn-outline product-btn">View Details</Link>
                <Link to={`/product/${product.id}`} className="btn btn-primary product-btn">Buy Now</Link>
            </div>
        </div>
    );
};

export default ProductCard;
