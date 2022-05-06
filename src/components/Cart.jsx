import { useState, useContext } from "react"
import store from "../context/storeContext"
import ProductInCart from './ProductInCart'
import './Cart.css'

const Cart = () => {

  const cart = useContext(store).cart;

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i]
      total += prod.quantity * prod.price
    }
    return "$ " + total.toFixed(2)
  }

  return (
    <div className="container">
      <h1>You have: <span>{cart.length} products</span></h1>

      <div className="cart-product-container">

        <div className="products">
            {cart.map((prod) => (
            <ProductInCart key={prod._id} product={prod}/>
            ))}
        </div>

        <div className="total-info">
          <div>💰Total: {getTotal()}</div>
          <button>Proceed to payment</button>
        </div>
      </div>
    </div>
  );
};

export default Cart