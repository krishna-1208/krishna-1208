import React from 'react'
import './Product.css';
export default function Product({ id, title, price, rating, image }) {
  return (
    <div className='product'>
      <div className="product__info">
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            // _ in map means each and every item in the array.
            Array(rating).fill().map((_, i) => (
              <p key={i}>⭐</p>  // ⭐⭐⭐⭐⭐
            ))
          }
        </div>
      </div>

      <img src={image} alt="product" />

      <button>Add to Cart</button>
    </div>
  )
}
