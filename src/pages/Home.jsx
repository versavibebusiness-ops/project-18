import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Versavibe - Practical Business Skills & Toolkits</title>
                <meta name="description" content="Master practical business skills with Versavibe. Download templates, scripts, and guides to grow your business today. No fluff, just results." />
                <link rel="canonical" href="https://versavibe.com/" />
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content fade-in">
                        <h1>Practical business skills for the real world.</h1>
                        <p className="hero-subhead">No fluff, no hype. Just the tools and templates you need to grow your business today.</p>
                        <Link to="/store" className="btn btn-primary btn-lg">Browse Courses</Link>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section bg-subtle">
                <div className="container">
                    <div className="section-header text-center mb-lg">
                        <h2>Featured Courses</h2>
                        <p>Start learning with our most popular practical toolkits.</p>
                    </div>
                    <div className="grid-3">
                        {products.map((product, index) => (
                            <div key={product.id} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section: Why Versavibe */}
            <section className="section">
                <div className="container">
                    <div className="trust-grid">
                        <div className="trust-item">
                            <h3>Why Versavibe?</h3>
                            <p>We believe business education shouldn't be complicated. We strip away the theory and give you action plans.</p>
                        </div>
                        <div className="trust-item">
                            <h3>Who is this for?</h3>
                            <p>Beginners, freelancers, and operational leaders who need specific outcomes, not general advice.</p>
                        </div>
                        <div className="trust-item">
                            <h3>How it works</h3>
                            <p>Download the toolkit, read the guide, take the quiz to test your knowledge, and implement.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section text-center">
                <div className="container">
                    <h2>Ready to level up?</h2>
                    <p className="mb-lg">Join thousands of others mastering their craft with Versavibe.</p>
                    <Link to="/store" className="btn btn-accent btn-lg">View All Courses</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
