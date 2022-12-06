import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "./index.css"
import data from "./data.jsx"
import Head from './Head'
import Card from './Card'

function App() {

  const cards = data.map(function (item){
    return (
      <Card
      key={item.id}
          {...item}
    />
    )
    
    
  })

  


  
  return (
    
    <div className="App">
      <Head/>
      {cards}
    </div>
  )
}

export default App
