import React from 'react'
import {Link} from 'react-router-dom'
import Contact from './Contact';
import carwash from '../assets/2.png'
const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <img src={carwash} alt="car"  style={{
  height:"200px ",width:"200px "
}}/>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>
        <Link to='/about' className="mr-5 hover:text-gray-900">About</Link>
        <Link to='/pricing' className="mr-5 hover:text-gray-900">Price</Link>
      
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
     
       
      </button>
    </div>
  </header>

    </div>

  )
}

export default Navbar