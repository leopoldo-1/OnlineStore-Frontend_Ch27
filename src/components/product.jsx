import "./product.css"
import QuantityPicker from './quantityPicker'
import { useState, useContext } from 'react'
import store from "../context/storeContext"

const Product = (props) => {

  const [val, serVal] = useState()
  let [quantity, setQuantity] = useState(1); //state variable
  const addProdToCard = useContext(store).addProdToCard;


  const handleQuantityChange = (val) => {
    console.log("The quantity changed!", val);
    setQuantity(val);
  }

  const handleAdd = () => {
    // console.log("Adding... ",props.info.title); //print prouduct-title description
    addProdToCard()
  }

  return(
    <div className="product">

      <img src={"/images/" + props.info.image} alt={props.info.image}></img>

      <div className="product-body">
        <h4>{props.info.title}</h4>

        <label htmlFor="">Total: {props.info.price * quantity.toFixed(2)}</label> <br></br>
        <label htmlFor="">Price: {props.info.price.toFixed(2)}</label>

        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>

        <button onClick={handleAdd} className="btn btn-sm col-12 border-3 border-warning"><i className="fas fa-cart-arrow-down"></i>Add to cart</button>
      </div>
    </div>
  )
}

export default Product