import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
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
      </div>
    </div>
  )
}

export default App