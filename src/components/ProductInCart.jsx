import React from 'react'
import './ProductInCart.css'

const ProductInCart = ({product}) => {
  const getTotal = () => {
    return "$" + (product.price * product.quantity).toFixed(2)
  }

  return (
    <div className='main-product-container'>

      <div className="product-container">
        <div className="product-img">
          <img src={"/images/" + product.image} alt="" />
        </div>

        <div className='title'>
          {product.title}
        </div>

        <div className="quantity">
          Qty: {product.quantity}
        </div>

        <div className="price">
          ${product.price.toFixed(2)}
        </div>


        <div className="total">
          Total: {getTotal()}
        </div>

        <button className='prod-btn'>Delete</button>
      </div>

    </div>
  )
}

export default ProductInCart