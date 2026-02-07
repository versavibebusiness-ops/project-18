import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data';
import './ProductPage.css';

const ProductPage = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    useEffect(() => {
        if (product) {
            window.scrollTo(0, 0);
        }
    }, [product]);

    if (!product) {
        return (
            <div className="container section text-center">
                <h2>Product not found</h2>
                <Link to="/store" className="btn btn-primary">Back to Store</Link>
            </div>
        );
    }

    return (
        <div className="product-page">
            <Helmet>
                <title>{`${product.title} - Versavibe`}</title>
                <meta name="description" content={product.description} />
                <link rel="canonical" href={`https://versavibe.com/product/${product.id}`} />
            </Helmet>

            {/* Product Hero */}
            <section className="product-hero bg-subtle">
                <div className="container">
                    <Link to="/store" className="back-link">← Back to Store</Link>
                    <div className="product-hero-content">
                        <div className="product-hero-text">
                            <h1 className="product-hero-title">{product.title}</h1>
                            <p className="product-hero-description">{product.description}</p>
                            <div className="product-meta">
                                <span className="product-price-lg">₹{product.price}</span>
                                <span className="product-badge">Instant Access</span>
                            </div>
                            <a href={product.checkoutUrl} className="btn btn-primary btn-lg">Buy Now</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container product-details-grid">
                    {/* Left Column: Details */}
                    <div className="product-main">
                        <div className="detail-block">
                            <h3>The Problem</h3>
                            <p>{product.details.problem}</p>
                        </div>
                        <div className="detail-block">
                            <h3>How this helps</h3>
                            <p>{product.details.solution}</p>
                        </div>
                        <div className="detail-block">
                            <h3>Real Outcomes</h3>
                            <p>{product.details.outcome}</p>
                        </div>
                        <div className="detail-block">
                            <h3>Who is this for?</h3>
                            <p>{product.details.forWho}</p>
                        </div>
                    </div>

                    {/* Right Column: Features Sticky */}
                    <div className="product-sidebar">
                        <div className="features-card">
                            <h3>What's Included</h3>
                            <ul className="features-list">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="feature-item">
                                        <span className="check-icon">✓</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="sidebar-cta">
                                <a href={product.checkoutUrl} className="btn btn-primary btn-full">Buy Now - ₹{product.price}</a>
                                <p className="guarantee-text">Secure payment. 30-day access guarantees.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductPage;
