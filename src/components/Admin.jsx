import { useState, useEffect } from 'react'
import DataService from '../services/dataService'
import Loading from './Loading'

import './Admin.css'

const Admin = () => {
  const [product, setProduct] = useState({})
  const [coupon, setCoupon] = useState({})
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const [allCoupons, setAllCoupons] = useState([])
  const [allProducts, setAllProducts] = useState([])

  const [loading, setLoading] = useState(false)

  //  put the data on an state var
  //use the data in return
  //and map every coupon into an li
  const retrieveCoupons = async() => {
    setLoading(true)
    const service = new DataService();
    let coupons = await service.getCoupons();

    setAllCoupons(coupons)
    setLoading(false)
  }

  const retrieveProducts = async() => {
    setLoading(true)

    const service = new DataService();
    let products = await service.getProducts()

    setAllProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    retrieveCoupons()
    retrieveProducts()
  }, [])


  const handleTextChange = (e) => {
    console.log('ev1 ',e.target.name, e.target.value);
    let copy = {...product}
    copy[e.target.name] = e.target.value;
    setProduct(copy)
  }

  const showError = (text) => {
    setErrorMessage(text);
    setErrorVisible(true)
  }


  const handleSaveProduct = async () => {
    // Validations
    if(!product.title || product.title.length < 5) {
      showError("Error, title must be at least 5 chars")
      return
    }

    if(!product.image) {
      showError("Error, Image can not be empty")
      return
    }

    if(!product.category) {
      showError("Error, category can not be empty")
      return
    }


    let savedProduct = {...product}
    savedProduct.price = parseFloat(product.price)

    if(!product.price || product.price < 1) {
      showError("Error, the value must be greather than 1")
      return
    }

    // -------
    // if(!parseFloat(product.price) || parseFloat(product.price) < 1) {
    //   alert("Error, the value must be greather than 1")
    //   return
    // }

    setErrorVisible(false);
    // send product to Server
    let service = new DataService();
    let res = await service.saveProduct(savedProduct);
    console.log(res);

    let copy = [...allProducts]
    copy.push(savedProduct);
    setAllProducts(copy)

    console.log('savedProduct',savedProduct);
  }
// ------------------------------------------
  const handleCouponChange = (e) => {
    setLoading(true)
    console.log('evt2 ',e.target.name, e.target.value);

    let copyCoupon = {...coupon}
    copyCoupon[e.target.name] = e.target.value;
    setCoupon(copyCoupon)
  }

  const handleSaveCoupon = async () => {
    setLoading(true)
    let savedCoupon = {...coupon}

    savedCoupon.discount = parseFloat(savedCoupon.discount)

    if(!savedCoupon.discount || savedCoupon.discount > 35) {
      alert("Error, discount can not be lower than 1 or greather than 35%")
    }

    if(savedCoupon.code.length < 5) {
      alert("Coupon code error");
      return
    }

    setErrorVisible(false);

    //send the coupon to the Server
    let service = new DataService();
    console.log('coupon...',coupon);
    let res = await service.saveCoupon(savedCoupon);
    console.log(res);

    // add the savedCoupon to al lcoupons state var
    let copy = [...allCoupons]
    // copy.push(savedCoupon);
    copy.push(res);
    setAllCoupons(copy)

    setLoading(false)
  }

// -------------------------------------------
  return (
    <div className='admin-page'>

      {errorVisible ? <div className="alert alert-danger">{errorMessage}</div> : null}

      <div className="section-container">
        <section className='sec-products'>
          <h2 className='col-one'>Manage Products</h2>

          <div className='form' action="">
            <div className='my-control'>
              <label htmlFor="title">Title:</label>
              <input onChange={handleTextChange} name="title" type="text" id='title'/>
            </div>

            <div className='my-control'>
              <label htmlFor="image">Image:</label>
              <input onChange={handleTextChange} name="image" type="text" id="image" />
            </div>

            <div className='my-control'>
              <label htmlFor="category">Category:</label>
              <input onChange={handleTextChange} name="category" type="text" />
            </div>

            <div className='my-control'>
              <label htmlFor="price">Price:</label>
              <input onChange={handleTextChange} name="price" type="number" id='price'/>
            </div>

            <div className='my-control'>
              <button className='btn-admin' onClick={handleSaveProduct}>Register Product</button>
            </div>
          </div>

          {/* <hr /> */}

          {loading ? <Loading/> :

          <div className="coupon-list">
            <ul>
                {allProducts.map(product => (
                  <li key={product._id} >{product.title} - ${product.price}</li>
                ))}
            </ul>
          </div>
          }
        </section>
        {/* -------------------------- */}
        <section className='sec-coupons'>
          <h2 className='col-two'>Manage Coupons Codes</h2>

            <div className='form'>
              <div className="my-control">
                <label htmlFor="code">Code: </label>
                <input onChange={handleCouponChange} name="code" type="text" />
              </div>

              <div className="my-control">
                <label htmlFor="code">Discount: </label>
                <input onChange={handleCouponChange} name="discount" type="text" />
              </div>

              <div className='my-control'>
                <button className='btn-admin' onClick={handleSaveCoupon}>Register Coupon</button>
              </div>
            </div>

            {/* <hr /> */}

            {loading ? <Loading/> :

              <div className="coupon-list">
                <ul>
                    {allCoupons.map(coupon => (
                      <li key={coupon._id} >{coupon.code} - {coupon.discount}</li>
                    ))}
                </ul>
              </div>
            }
        </section>

      </div>

    </div>
  )
}

export default Admin