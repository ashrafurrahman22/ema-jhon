import React from 'react';
import './ReviewItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ReviewItem = ({product, handleReviewProduct}) => {
    const {name, img, price, shipping, quantity} = product;
    console.log(product)
    return (
        <div className='review-item'>
            <div className="image">
                <img src={img} alt="" />
            </div>

            <div className="specification" title={name}>

            <div className="first-div">
            <h4>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h4>
            <span>Price: ${price}</span> <br />
            <span>Shipping Charge: ${shipping}</span> <br />
            <span>Quantity: {quantity}</span>
            </div>

            <div>
            <button onClick={ () => handleReviewProduct(product)} className="delete-btn"><FontAwesomeIcon id='fontawesome' icon={faTrash} /></button>
            </div>

            </div>
            
        </div>
    );
};

export default ReviewItem;