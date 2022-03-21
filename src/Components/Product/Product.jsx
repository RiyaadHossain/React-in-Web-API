import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { id, name, price } = product
    const pStyle = {fontSize: '22px'}
    return (
        <div className='card'>
            <p style={{fontSize:'25px'}}><strong>ID:</strong> {id }</p>
            <p style={pStyle}><strong>Name:</strong> {name }</p>
            <p style={{ fontSize: '22px'}}><strong>Price:</strong> {price }$</p>
        </div>
    );
};

export default Product;