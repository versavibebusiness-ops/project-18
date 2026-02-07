import React from 'react';

const BuyNowButton = ({ checkoutUrl, className, children, ...props }) => {
    console.log('BuyNowButton rendered with checkoutUrl:', checkoutUrl);

    // Ensure we have a clean string and absolute base classes
    const baseClasses = "btn btn-primary";
    const combinedClasses = `${baseClasses} ${className || ''}`.trim();

    if (checkoutUrl && typeof checkoutUrl === 'string') {
        return (
            <a
                href={checkoutUrl}
                className={combinedClasses}
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
                onClick={() => console.log('BuyNowButton clicked, navigating to:', checkoutUrl)}
                {...props}
            >
                {children || 'Buy Now'}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={combinedClasses}
            disabled
            style={{ opacity: 0.5, cursor: 'not-allowed' }}
            {...props}
        >
            {children || 'Link Missing'}
        </button>
    );
};

export default BuyNowButton;
