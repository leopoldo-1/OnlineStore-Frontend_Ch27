import React from 'react'
import './about.css'

const About = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")

  const handleShowName = () => {
    console.log('handle name');
    setName('leopoldo')
    setEmail('leopoldo.miranda18@tectijuana.edu.mx')
  }

  return (
    <div className='about mb-4'>
      <h4 className='title'>About me</h4>
      <hr />
      <h5>{name}</h5>
      <h5>{email}</h5>

      <button
        onClick={handleShowName}
        className="btn-see-name"
      >
        Set name
      </button>
    </div>
  )
}

export default About

// show also the email