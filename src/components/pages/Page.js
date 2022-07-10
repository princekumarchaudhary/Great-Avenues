import React from "react"
import Header from "../common/header/Header.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../home/Home.js"
import Footer from "../common/footer/Footer.js"
import About from "../about/About.js"
import Blog from "../blog/Blog.js"
import Services from "../services/Services.js"
import Contact from "../contact/Contact.js"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
