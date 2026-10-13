import { useState } from 'react'
import './App.css'
import Card from './card.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Wilkommen</h1>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
