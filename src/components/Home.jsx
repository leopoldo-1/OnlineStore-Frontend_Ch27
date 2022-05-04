import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import { useContext } from "react"
import store from "../context/storeContext"

const Home = () => {
  const user = useContext(store).user


  return (
    <div className='home'>
      <h6>Welcome back {user.email}</h6>

      <div className='home-page-container'>
        <img className='home-page-image' src="/images/home-page-coffee.jpg" alt="americano" />
      </div>

      <div className='text-container'>
        <h1 className='home-title'>Welcome to "The developer Coffee"</h1>
        <h2>The best place to Code</h2>
      </div>

      <div>
        <Link className="btn btn-lg btn-primary" to="/catalog">Check out amazing catalog!!</Link>
      </div>

    </div>

  )
}

export default Home
// Welcome to my store