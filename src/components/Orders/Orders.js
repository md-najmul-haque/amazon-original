import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/Db';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const navigate = useNavigate();

    const removeProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest);
        removeFromDb(product.id);

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
                <Cart cart={cart}>
                    <Link to='/orders'><button>Clear cart</button></Link>
                    <Link to='/inventory'><button>Proceed to checkout</button></Link>
                    <button onClick={() => navigate('/inventory')}>Proceed to checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders; 