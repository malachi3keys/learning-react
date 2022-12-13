import { useState } from 'react'
import Instructions from './components/Instructions'
import Dice from './components/Dice'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='App'>
      <Instructions />
      <Dice />
    </main>
  )
}
