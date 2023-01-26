import './App.css'
import Navbar from './components/Navbar'
import TravelLocation from './components/TravelLocation'
import data from './data.js'

function App() {
  const cards = data.map(item => {
    return (
      <TravelLocation
        {...item}
      />  
    )
  })

  return (
    <div>
      <Navbar />
      <div className="card">
        {cards}
      </div>
    </div>
  )
}

export default App
