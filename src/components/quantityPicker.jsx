import React from 'react'
import './quantity-picker.css'

const QuantityPicker = (props) => {
  let [quantity, setQuantity] = React.useState(1); //state variable

  const handleIncrease = () => {
    let nextQuantity = quantity + 1

    if(nextQuantity < 21) {
      setQuantity(nextQuantity)
    }
    props.onChange(nextQuantity)
  }

  const handleDecrease = () => {
    let nextQuantity = quantity - 1

    if(nextQuantity > 0 ) {
      setQuantity(nextQuantity);
      props.onChange(nextQuantity)
    }
  }

  return (
    <div>

      <div className="quantity-picker">
        <button onClick={handleDecrease}>-</button>
        <div> {quantity} </div>
        <button  onClick = {handleIncrease}>+</button>
      </div>
    </div>
  )
}

export default QuantityPicker;