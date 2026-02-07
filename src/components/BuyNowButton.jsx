import React from 'react';

const BuyNowButton = ({ checkoutUrl, className, children, ...props }) => {
    // Explicitly define the base classes to ensure they are always present
    const baseClasses = "btn btn-primary";
    const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

    if (checkoutUrl) {
        return (
            <a
                href={checkoutUrl}
                className={combinedClasses}
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
            {...props}
        >
            {children || 'Buy Now'}
        </button>
    );
};

export default BuyNowButton;
