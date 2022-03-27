import Books from '../books/Books';
import './Shop.css';

const Shop = () => {


    return (
        <div className='shop'>
            <div className="product-container">
                <Books></Books>
                
            </div>

            <div className="cart-container">
                <h3>cart</h3>
            </div>
        </div>
    );
};

export default Shop;