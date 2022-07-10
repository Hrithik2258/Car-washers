import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About'
import Navbar from './Components/Navbar';
import Service11 from './Components/Service11';
import Services22 from './Components/Services22';
import Services33 from './Components/Services33';
import Pricing from './Components/Pricing';
const App = () => {
  return (
    <div>
    
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/Pricing' element={<Pricing/>} />
               
                <Route path='/service11' element={<Service11/>} />
                <Route path='/service22' element={<Services22/>} />
                <Route path='/service33' element={<Services33/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App