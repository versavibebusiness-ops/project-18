import React from 'react';

const BuyNowButton = ({ checkoutUrl, className, children, ...props }) => {
    const defaultClasses = "btn btn-primary";
    const combinedClasses = className ? `${defaultClasses} ${className}` : defaultClasses;

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
