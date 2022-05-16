
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from "./data"
// import katie from './images/katie-zaferes.png';

function App() {

  const cards = data.map(item => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })
  return (
    <div className="App">
      <NavBar />
      <Hero />
      {cards}

    </div>
  );
}

export default App;
