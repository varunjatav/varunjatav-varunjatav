import React from 'react'
import { Footer } from '../Components/Footer'
import NavbarPort from '../Components/Navbar'
import { About } from './about'


export const Home = () => {
  return (
    <div>
      <NavbarPort/>
      <About/>
      <Footer/>
    </div>
  )
}
