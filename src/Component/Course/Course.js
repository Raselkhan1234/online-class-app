import React from 'react';
import Data from '../../data/data.json';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Course.css';

const Course = () => {
    const[course,setCourse]=useState([]);
    useEffect(()=>{
      setCourse(Data);
    },[])
    const [cart,setCart]=useState([]);
    const handleAddCourse=(Data)=>{
        const newCart=[...cart,Data];
        setCart(newCart);
        
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            
                {
                course.map(product=><Product product={product} key={product.id} handleAddCourse={handleAddCourse}></Product>)
                }
        

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Course;