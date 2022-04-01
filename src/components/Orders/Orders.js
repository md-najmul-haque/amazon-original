import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    return (
        <div>
            <h2>this is from orders: {products.length}</h2>
            <h2>cart has: {cart.length}</h2>
        </div>
    );
};

export default Orders; <h2>this is from shop</h2>