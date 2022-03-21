import React from 'react';
import Product from '../Product/Product';

const Products = () => {
    const products = [
        {id:1, name:'Desktop', price: 70000},
        {id:2, name:'Laptop', price: 35000},
        {id:3, name:'Phone', price: 15000},
        {id:4, name:'UPS', price: 3000},
        {id:5, name:'Speaker', price: 700},
    ]
    return (
        <div>
            <h1>⌨️ Electronic Products 💻</h1>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Products;