import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import cardData from './data'

import './App.css'


function App() {
  const cardElements = cardData.map(cardinfo => {
    return <Cards 
        key = {cardinfo.id}
        item = {cardinfo}
     />
  })

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <section className='card-holder'> 
        {cardElements}
      </section>
    </div>
  )
}

export default App
