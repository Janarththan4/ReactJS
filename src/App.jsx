import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import data from './data'
// console.log(data)

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}

        // item={item}
      // prop  map   key
      // |      |     |
      // v      v     v
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // status={item.openSpots}
      />  
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        {cards}
      </div>
    </div>
  )
}

export default App
