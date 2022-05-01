import { useState } from 'react'
import './Admin.css'

const Admin = () => {
  const [product, setProduct] = useState({})
  const [coupon, setCoupon] = useState({})

  const handleTextChange = (e) => {
    console.log('ev1 ',e.target.name, e.target.value);
    let copy = {...product}
    copy[e.target.name] = e.target.value;
    setProduct(copy)
  }

  const handleSaveProduct = () => {
    // Validations
    if(product.title.length < 5) {
      alert("Error, title must be at least 5 chars")
      return
    }

    if(!product.image) {
      alert("Error, Image can not be empty")
      return
    }

    if(!product.category) {
      alert("Error, category can not be empy")
      return
    }


    let savedProduct = {...product}
    savedProduct.price = parseFloat(product.price)

    if(!product.price || product.price < 1) {
      alert("Error, the value must be greather than 1")
      return
    }

    // -------
    // if(!parseFloat(product.price) || parseFloat(product.price) < 1) {
    //   alert("Error, the value must be greather than 1")
    //   return
    // }

    console.log("Saved price");

    // title > 5 characters
    // image exist (can not be empty)
    // category exist (can not be empty)
    // price > 1


    console.log('product...',product);
    // send product to Server
  }
// ------------------------------------------
  const handleCouponChange = (e) => {
    console.log('evt2 ',e.target.name, e.target.value);

    let copyCoupon = {...coupon}
    copyCoupon[e.target.name] = e.target.value;
    setCoupon(copyCoupon)
  }

  const handleSaveCoupon = () => {
    let savedCoupon = {...coupon}

    savedCoupon.discount = parseFloat(savedCoupon.discount)

    if(!savedCoupon.discount || savedCoupon.discount > 35) {
      alert("Error, discount can not be lower than 1 or greather than 35%")
    }

    if(savedCoupon.code.length < 5) {
      alert("Coupon code error");
      return
    }

    console.log("Saved coupon");

    //send the coupon to the Server
  }

// -------------------------------------------
  return (
    <div className='admin-page'>

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
              <button onClick={handleSaveProduct}>Register Product</button>
            </div>
          </div>
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
                <button onClick={handleSaveCoupon}>Register Coupon</button>
              </div>
            </div>

        </section>
      </div>

    </div>
  )
}

export default Admin