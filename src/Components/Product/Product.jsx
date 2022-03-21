import React from 'react';
import { addToDB } from '../../Database/Database';
import './Product.css'

const Product = ({ product }) => {
    const { id, name, price } = product
    const pStyle = { fontSize: '22px' }
    const addToCart = (id) => {
        addToDB(name)
    }
    return (
        <div className='card'>
            <p style={{fontSize:'25px'}}><strong>ID:</strong> {id }</p>
            <p style={pStyle}><strong>Name:</strong> {name }</p>
            <p style={{ fontSize: '22px' }}><strong>Price:</strong> {price}$</p>
            <button className='btn' onClick={() => addToCart(id)}>Cart +</button>
        </div>
    );
};

export default Product;