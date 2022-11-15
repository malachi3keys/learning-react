import Navbar from './components/Navbar'
import Entry from './components/Entry'
import entryData from './data'
import './App.css'

function App() {

  const entries = entryData.map((entry) => {
    return (
      <Entry 
        key={entry.googleMapsUrl}
        {...entry}
      />
    )
  })


  return (
    <div className="app">
      <Navbar />
      <section className='entry-list'>
        {entries}
      </section>
    </div>
  )
}

export default App
