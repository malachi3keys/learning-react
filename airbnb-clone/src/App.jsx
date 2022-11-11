import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import katie from './assets/katie-zaferes.png'

import './App.css'


function App() {
  return (
    <div className='app' >
      <Navbar />
      <Hero />
      <Cards 
        img = {katie}
        rating = '5.0'
        reviewCount = {6}
        country = 'US'
        title = 'Life Lessons with Katie Zaferes'
        price = {136}
      />
    </div>
  )
}

export default App
