
import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const { name, img, price, shipping } = props.product
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default ReviewItem;