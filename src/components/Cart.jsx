import { useContext } from "react"
import store from "../context/storeContext"
import './Cart.css'

const Cart = () => {
  const cart = useContext(store).cart

  return (
    <div className="cart-container">
      <h1>Number of elements: <span>{cart.length}</span></h1>
    </div>
  )
}

export default Cart