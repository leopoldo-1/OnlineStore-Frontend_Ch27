import './child.css'

const Child = ({ name, increaseCounter }) => {

  return (
    <div>
      <p>Hello <b>{name}</b> from Child component</p>
      <button onClick={increaseCounter}>Increase counter</button>
    </div>
  );
};

export default Child;