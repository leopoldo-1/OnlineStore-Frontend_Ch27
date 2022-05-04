import React from 'react'

// describes the data that will be available on the store
// will not contain any data
let store = React.createContext({
  cart: [],
  user: {},

  addProdToCard: () => {
    console.log('adding prod 1');
  },

  removeProdFromCard: () => {
    console.log('Removing prod 1');
  },
});

export default store;