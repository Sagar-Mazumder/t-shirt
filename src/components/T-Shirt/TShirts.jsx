import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './TShirts.css'
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';
export const ValueContext = createContext(0);
const TShirts = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const [value, setValue] = useState(10);
    const addToCart = (tshirt) => {
        const exist = cart.find(ts => ts._id === tshirt._id)
        if (exist) {
            toast('1 item already added');
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }

    }
    const handleRemoveFromCart = (id) => {
        const remaining = cart.find(items => items._id !== id)
        setCart(remaining);

    }
    return (
        <ValueContext.Provider value={[value, setValue]} >
            <div className='t-shirt-container'>
                <div className='t-shirt'>
                    {
                        tshirts.map(tshirt => <TShirt
                            key={tshirt._id}
                            tshirt={tshirt}
                            addToCart={addToCart}
                        ></TShirt>)
                    }
                </div>
                <div>
                    <Cart
                        cart={cart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>
                </div>
            </div>
        </ValueContext.Provider>
    );
};

export default TShirts;