import { useState } from 'react'
import  Intro from './components/Intro'
import  Quiz from './components/Quiz'
import  Question from './components/Question'
import './App.css'

export default function App() {
  // [showQ, setShowQ] = useState(false)

  return (
    <main className='App'>
      <Intro />
    </main>
  )
}
