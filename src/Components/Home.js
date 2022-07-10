import React from 'react'
import Body from './Body'
import Contact from './Contact'
import Footer from './Footer'
import Poster from './Poster'
import Services1 from './Services1'
import Testomonial from './Testomonial'

const Home = () => {
  return (
    <div>
      <Body/>
      <Services1/>
      <Poster/>
      <Testomonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home