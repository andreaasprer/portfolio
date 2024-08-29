import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import * as THREE from 'three';
// for threejs character
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";



const App = () => {
  const color = new THREE.Color("rgb(11,11,11)").convertSRGBToLinear();
  
  color.style = color.getStyle();
  console.log(color.getHex());
  
  const [isScrolling, setIsScrolling] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="App">
      <NavBar />
      <div className='Hero'>
        <div className="left">
          <p className={`scrollDown ${isScrolling ? 'hidden' : ''}`}>SCROLLDOWN</p>
          <span className={`scrollDownIndicator ${isScrolling ? 'hidden' : ''}`}></span>
        </div>
        <div className="main">
          <Intro />
        </div>
        <div className="ThreeJS">
          <Canvas shadows camera={{ position: [0, .5, 2.5], fov: 50 }} style={{ background: "#1c1c1c"}}>
            <Experience />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default App