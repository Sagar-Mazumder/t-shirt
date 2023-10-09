import React, { useContext } from 'react';
import { ValueContext } from '../T-Shirt/TShirts';
const Cart = ({ cart, handleRemoveFromCart }) => {
    const [value, setValue] = useContext(ValueContext);

    return (
        <div>
            <h4>this is value:{value}</h4>
            <h4>This is cart:{cart.length}</h4>
            {
                cart.map(tshirt =>
                    <p
                        key={tshirt._id}
                    >{tshirt.name}
                        <button
                            onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;