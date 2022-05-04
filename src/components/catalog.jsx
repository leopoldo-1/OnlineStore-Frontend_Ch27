import Product from "./product"
import { useState, useEffect } from 'react'
import "./catalog.css"
import DataService from '../services/dataService'
import {button} from 'bootstrap'

const Catalog = () => {
  const [products, setProducts] = useState([])

  const loadCatalog = () => {
    const service = new DataService();
    let prods = service.getCatalog();
    setProducts(prods)
    console.log('prods.. ',products);
  }

  useEffect( () => {
    // do something when the components its displayed
    loadCatalog();
  }, []);

  return (
    <div className="catalog">
      <h5>We have {products.length} ready!</h5>

      {products.map((prod) => (
        <Product key={prod._id} info={prod}></Product>
      ))}

    </div>
  )
}

export default Catalog