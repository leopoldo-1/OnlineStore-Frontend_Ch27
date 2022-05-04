import store from "./storeContext"
import { useState } from "react"

const GlobalStoreProvider = (props) => {
  let [cart, setCart] = useState([]);
  let [mockUser, setmockUser] = useState({ id: 42, email: "bart@simpson.com"});

  let addProdToCard = (prod) => {
    console.log('Adding prod 2');

    //add prod to cart
    let copy = [...cart]
    copy.push(prod)
    setCart(copy)
  };

  let removeProdFromCard = () => {
    console.log("Removing prod 2");
  };

  return (
    <store.Provider
    value={{
      cart: cart,
      user: mockUser,
      addProdToCard: addProdToCard,
      removeProdFromCard: removeProdFromCard,
    }}>
      {props.children}
    </store.Provider>
  )
};

export default GlobalStoreProvider;