import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Footer2 from './Footer2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>

    

   <Footer></Footer>
   <Footer2></Footer2>
    </>
  )
}

export default App
