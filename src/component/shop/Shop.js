import Books from '../books/Books';
import './Shop.css';

const Shop = () => {


    return (
        <div className='shop'>
            <div className="product-container">
                <Books></Books>
                
            </div>

            <div className="cart-container">
                <h2>Cart</h2>
               <div>
                    <h3>Name:</h3>
                    <h3>Price:</h3>
               </div>

            </div>
        </div>
    );
};

export default Shop;