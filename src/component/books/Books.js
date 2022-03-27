import React from 'react';
import Book from '../Book/Book';


const Books = () => {
    
    const books = [
        {id: 1, name: 'Ebar Vinno kisu Hok', price: 336, img: "https://www.ruhamashop.com/wp-content/uploads/2022/02/ebar-vinno-kichu-hok.jpg"},
        {id: 2, name: 'Nobi Jiboner Golpo', price: 330, img: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/0a41da307_212664.jpg'},
        {id: 3, name: 'Reclaim Your Heart', price: 300, img: 'https://www.kablewala.com.bd/images/thumbnails/288/288/detailed/162/114_9sjf-z5.jpg'},
        {id: 4, name: 'Message', price: 275, img: 'https://static-01.daraz.com.bd/p/c0839f3c5f40dd5d11c49cdb0678a071.jpg'},
        {id: 5, name: 'I Love You', price: 220, img: 'https://static-01.daraz.com.bd/p/559e41dd24455fb2347de0a0364bc1bb.jpg'},
        {id: 6, name: 'I Love Quran', price: 380, img: 'https://static-01.daraz.com.bd/p/6dc024d899dbd104faf6493e944f0e21.jpg'},
        {id: 7, name: 'Hotas Hoben na', price: 600, img: 'https://images-na.ssl-images-amazon.com/images/I/318fK+XoxSL._SX248_BO1,204,203,200_.jpg'},
        {id: 8, name: 'Golpo Gulo Onno Rokom', price: 335, img: 'https://bdbookstore.com/wp-content/uploads/2021/03/golpogulo-onnorokom-arif-azad-%E0%A6%97%E0%A6%B2%E0%A7%8D%E0%A6%AA%E0%A6%97%E0%A7%81%E0%A6%B2%E0%A7%8B-%E0%A6%85%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%B0%E0%A6%95%E0%A6%AE-%E2%80%93-%E0%A6%86%E0%A6%B0%E0%A6%BF%E0%A6%AB-%E0%A6%86%E0%A6%9C%E0%A6%BE%E0%A6%A6.jpeg'},
        {id: 9, name: 'Bela Furabar Age', price: 262, img: 'https://bdebooks.com/wp-content/uploads/2020/10/Bela-Furabar-Age.jpg'},
        {id: 10, name: 'Paradoxical Sajid', price: 200, img: 'http://bdebooks.com/wp-content/uploads/2019/03/Paradoxical-Sajid-By-Arif-Azad.jpg'}
    ]

    const handleAddToCart = () =>{
        
    }

    return (
        
        <div className='books'>
           {
               books.map(book => <Book
               key = {book.id}
               book = {book}
               handleAddToCart = {handleAddToCart}
               ></Book>)
           }
        </div>
    );
};

export default Books;