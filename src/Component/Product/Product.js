import React from 'react';
import './Product.css';
import Button from 'react-bootstrap/Button';

const Product = (props) => {
   const {name,price}=props.product;
   const handleAddCourse=props.handleAddCourse;
    return (
        <div className="product">
            <h4>Course Name:{name}</h4>
            <h5>Price: ${price}</h5>
            <Button variant="success" onClick={()=>handleAddCourse(props.product)}>Inroll Now</Button>
        </div>
    );
};

export default Product;