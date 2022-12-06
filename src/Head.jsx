import React from 'react'
import "./header.css"
import logo from "./images/logo.png"

function Head() {
  return (
    <div className='headerwrapper'>
    <img src={logo} alt="Logo" />
    <h5>my travel journal</h5>
  </div>
  )
}

export default Head

