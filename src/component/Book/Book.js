import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Book.css'



const Book = (props) => {
    const {name, img, id, price} = props.book; 
    const handleAddToCart = () =>{
        console.log("added",id)
    }

    return (
        <div className='book'>
            <img src={img} alt="" />
            <h3>Book Name: {name}</h3>
            <h3>Price: ${price}</h3>
            <h4>Id: {id}</h4>
            <button className='btn' onClick={() => handleAddToCart()}>
                Add to Cart &nbsp;
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                
            </button>
        </div>
    );
};

export default Book;