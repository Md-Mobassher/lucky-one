import React from 'react';
import Book from '../Book/Book';

const Books = () => {
    
    const books = [
        {id: 1, name: 'Ebar Vinno kisu Hok', price: 336, img: '../image/1.jpg'},
        {id: 2, name: 'Nobi Jiboner Golpo', price: 330, img: '../image/2.jpg'},
        {id: 3, name: 'Reclaim Your Heart', price: 300, img: '../image/3.jpg'},
        {id: 4, name: 'Message', price: 275, img: '../image/4.jpg'},
        {id: 5, name: 'I Love You', price: 220, img: '../image/5.jpg'},
        {id: 6, name: 'I Love Quran', price: 380, img: '../image/6.jpg'},
        {id: 7, name: 'Hotas Hoben na', price: 600, img: '../image/7.jpg'},
        {id: 8, name: 'Golpo Gulo Onno Rokom', price: 335, img: '../image/8.jpg'},
        {id: 9, name: 'Bela Furabar Age', price: 262, img: '../image/9.jpg'},
        {id: 10, name: 'Paradoxical Sajid', price: 200, img: '../image/10.jpg'},
    ]

    return (
        
        <div>
           {
               books.map(book => <Book
               key = {book.id}
               book = {book}
               ></Book>)
           }
        </div>
    );
};

export default Books;