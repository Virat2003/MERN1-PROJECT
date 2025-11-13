import React from 'react'
import  Navbar  from "../components/Navbar"
import Categories from '../components/Categories'
import Slide from '../components/Slide'
import Listings from '../components/Listings'

const HomePage = () => {
  return (
    <>
    <Navbar />
    <Slide />
    <Categories />
    <Listings />
    </>
  )
}

export default HomePage