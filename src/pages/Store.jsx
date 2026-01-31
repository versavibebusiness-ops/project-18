import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import './Store.css';

const Store = () => {
    return (
        <div className="store-page">
            <Helmet>
                <title>Course Library - Versavibe</title>
                <meta name="description" content="Browse our library of practical business toolkits, email scripts, and outreach templates designed to help you succeed." />
                <link rel="canonical" href="https://versavibe.com/store" />
            </Helmet>

            <div className="store-header bg-subtle section">
                <div className="container text-center">
                    <h1>Course Library</h1>
                    <p>Practical tools to help you succeed.</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid-3">
                    {products.map((product, index) => (
                        <div key={product.id} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Store;
