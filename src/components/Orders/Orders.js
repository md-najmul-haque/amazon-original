import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const removeProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest);

    }

    return (
        <div className='order-container'>
            <div className="review-item-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        removeProduct={removeProduct}
                    ></ReviewItem>)
                }

            </div>

            <div className="cart-container cart-border">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders; 