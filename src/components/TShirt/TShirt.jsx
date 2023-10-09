import React from 'react';
import './TShirt.css'
const TShirt = ({ tshirt, addToCart }) => {
    const { name, picture, _id, price } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price:${price}</p>
            <button onClick={() => addToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;