import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>

      <div className='home-page-container'>
        <img className='home-page-image' src="/images/home-page-coffee.jpg" alt="americano" />
      </div>

      <div className='text-container'>
        <h1 className='home-title'>Welcome to "The developer Coffee"</h1>
        <h2>The best place to Code</h2>
      </div>
    </div>

  )
}

export default Home
// Welcome to my store