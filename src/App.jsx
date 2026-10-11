import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './Header/header.jsx'
import Flower from './Flowers/Flower.jsx'
import './App.css'

function App() {
  const flowers = [{ name: 'שושנה', kod: 1 }, { name: 'ורד', kod: 2 }];

  return (
    <div>
      <Header />
      <Flower flowerName="ברכה" petalColor="#52edd8" centerColor="#cddb2e" />
      <Flower flowerName="יעקב" centerColor="#8180b4" />
      <Flower flowerName="רחל" />
      {flowers.map(f => <Flower  flowerName = {f.name} petalColor="#52edd8" centerColor="#cddb2e"></Flower>)}
      
      </div>
      )
}
      export default App;
