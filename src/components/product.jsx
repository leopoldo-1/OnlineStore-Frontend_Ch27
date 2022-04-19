import "./product.css"
import QuantityPicker from './quantityPicker'
import {useState} from 'react'

const Product = (props) => {
  const [val, serVal] = useState()
  let [quantity, setQuantity] = useState(1); //state variable


  const handleQuantityChange = (val) => {
    console.log("The quantity changed!", val);
    setQuantity(val);
  }

  return(
    <div className="product">

      <img src={"/images/" + props.info.image} alt=""></img>

      <div className="product-body">
        <h4>{props.info.title}</h4>

        <label htmlFor="">Total: {props.info.price * quantity.toFixed(2)}</label> <br></br>
        <label htmlFor="">Price: {props.info.price.toFixed(2)}</label>

        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>

        <button  className="btn btn-sm col-12 border-3 border-warning"><i className="fas fa-cart-arrow-down"></i>Add to cart</button>
      </div>
    </div>
  )
}

export default Product