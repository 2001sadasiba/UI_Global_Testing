import React from 'react';

interface BoxProps {
    children: React.ReactNode;
    width?: string | number;
    height?: string | number;
    maxWidth?: string | number;
    minWidth?: string | number;
    backgroundColor?: string;
    color?: string;
    padding?: string | number;
    margin?: string | number;
    borderRadius?: string | number;
    className?: string;
}

const Box: React.FC<BoxProps> = ({
    children,
    width = 'auto',
    height = 'auto',
    maxWidth,
    minWidth,
    backgroundColor,
    color,
    padding = '1rem',
    margin = '0',
    borderRadius = '0.375rem',
    className = ''
}) => {
    const boxStyle: React.CSSProperties = {
        width,
        height,
        maxWidth,
        minWidth,
        backgroundColor,
        color,
        padding,
        margin,
        borderRadius,
        boxSizing: 'border-box'
    };

    return (
        <div
            className={`box ${className}`}
            style={boxStyle}
        >
            {children}
        </div>
    );
};

export default Box;