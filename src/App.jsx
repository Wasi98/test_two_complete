
import { useState } from 'react'
import  {Navbar}  from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {

  const [activePage, setActivePage] = useState('Home'); //default component 

  return (
    <>
      <Navbar updateActivePage={setActivePage}/>

      {
        activePage === "Home" && (
          <Home/>
        )
      }
      {
        activePage === "About" && (
          <About/>
        )
      }
      {
        activePage === "Contact" && (
          <Contact/>
        )
      }
  
    </>
  )
}

export default App
