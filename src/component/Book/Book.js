import React from 'react';

const Book = (props) => {
    //const {name, id, img, price} = props.book; 

    return (
        <div>
           
            <h3>Book Name : {props.book.name}</h3>
            {/* <h3>Price: ${price}</h3>
            <h4>Id: {id}</h4> */}
        </div>
    );
};

export default Book;