import { useState } from 'react'
import Child from "./Child";
import './parent.css';

const Parent = () => {
  const name = "Leo Miranda"
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div className='container'>
      <div className='title'>Parent Component</div>
      <Child name={name} increaseCounter={increaseCounter}/>
      <span>Counter: {counter}</span>
    </div>
  );
};

export default Parent;