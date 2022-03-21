import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { add, multiply } from '../Utilities/sum';

const Products = () => {
    // ---------------- One Way ----------------
    const allProducts = [
        {id:1, name:'Desktop', price: 70000},
        {id:2, name:'Laptop', price: 35000},
        {id:3, name:'Phone', price: 15000},
        {id:4, name:'UPS', price: 3000},
        {id:5, name:'Speaker', price: 700},
    ]

    // ---------------- Another Way ----------------
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1>⌨️ Electronic Products 💻</h1>
            {
                products.map(product => <Product product={product}></Product>)
            }
            <h3><strong>Add Result:</strong> { add(+allProducts[0].price , allProducts[1].price)}</h3>
            <h3><strong>Multiply Result:</strong> { multiply(+allProducts[3].price , allProducts[4].price)}</h3>
        </div>
    );
};

export default Products;