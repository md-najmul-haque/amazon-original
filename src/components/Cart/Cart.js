import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    console.log(cart);

    let total = 0
    let shipping = 0
    let quantity = 0

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
    }

    let tax = (total * 0.1).toFixed(2);
    let grandTotal = total + shipping + parseFloat(tax)



    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Items:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;