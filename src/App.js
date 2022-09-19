import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import datas from './components/datas'

function App() {
  const cards = datas.map(item => {
    return (
        <Card  key={item.id}
               item={item}
    />)
  })

  return (
    <div>
     <Navbar/>
     <Hero/>

    <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
