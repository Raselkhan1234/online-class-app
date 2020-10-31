import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
   
    
    let price=0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        price=price+element.price;
        

    }
   
    return (
        <div className="cart">
            <h3>Select Course</h3>
            <p id="course">Total Course:{cart.length}</p>
            <p id="amount">Total Amount: ${price}</p>
        </div>
    );
};

export default Cart;