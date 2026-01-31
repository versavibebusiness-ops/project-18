import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-subtle">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>Versavibe</h3>
                    <p>Practical, beginner-friendly business skill courses.</p>
                </div>
                <div className="footer-links">
                    <h4>Navigation</h4>
                    <Link to="/">Home</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Versavibe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
