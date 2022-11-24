import React from 'react';
import Nav from "./components/Nav"
import Card from './components/Card';
import data from "./components/data"
import './App.css';

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Nav />
      <section className='card-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
