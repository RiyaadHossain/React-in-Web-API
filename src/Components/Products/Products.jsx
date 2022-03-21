import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    // ---------------- One Way ----------------
/*     const products = [
        {id:1, name:'Desktop', price: 70000},
        {id:2, name:'Laptop', price: 35000},
        {id:3, name:'Phone', price: 15000},
        {id:4, name:'UPS', price: 3000},
        {id:5, name:'Speaker', price: 700},
    ] */

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
        </div>
    );
};

export default Products;