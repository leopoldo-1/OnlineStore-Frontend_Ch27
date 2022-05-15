import Product from "./product"
import { useState, useEffect } from 'react'
import "./catalog.css"
import DataService from '../services/dataService'
import {button} from 'bootstrap'
import Loading from './Loading'

const Catalog = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)


  const loadCatalog = async() => {
    setLoading(true)

    const service = new DataService();
    let prods = await service.getCatalog();
    setProducts(prods)
    console.log('prods.. ',products);

    setLoading(false)

  }

  useEffect( () => {
    // do something when the components its displayed
    loadCatalog();
  }, []);

  return (
    <div className="catalog">
      {loading ? <Loading/> : ''}

      <h5>We have {products.length} ready!</h5>

      {products.map((prod) => (
        <Product key={prod._id} info={prod}></Product>
      ))}

    </div>
  )
}

export default Catalog