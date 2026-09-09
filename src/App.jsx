import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './Header/header.jsx'
import Flower from './Flowers/Flower.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
 <Header/>
 <Flower flowerName="ברכה" petalColor="#52edd8" centerColor="#cddb2e"/>
 <Flower flowerName="יעקב"  centerColor="#8180b4"/>
 <Flower flowerName="רחל" />
  </div>
  )
}

export default App
