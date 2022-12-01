import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [mode, setMode] = useState(false);

  function toggle() {
    setMode(prevMode => !prevMode);
  }

  return (
    <div className='app'>
      <Navbar 
        lightMode={mode}
        toggleLightMode={toggle}
      />
      <Main 
        lightMode={mode}
      />
    </div>
  )
}

export default App
