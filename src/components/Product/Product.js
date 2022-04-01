import React from 'react';
import { removeFromDb } from '../../utilities/Db';
import './Product.css'

const Product = (props) => {
    const { addToCart, product } = props
    const { name, img, seller, ratings, price, id } = product

    const removeFromCart = id => {

        removeFromDb(id);
    }

    return (
        <div className='product-container'>
            <img src={img} alt=''></img>

            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>

                <p className='seller'>Manufacturer:{seller}</p>
                <p className='rating'>Rating: {ratings}</p>
            </div>
            <button onClick={() => addToCart(product)} className='cart-button'>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>


        </div>
    );
};

export default Product;