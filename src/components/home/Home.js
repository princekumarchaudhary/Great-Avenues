import React from "react"
import Awards from "./awards/Awards.js"
import Featured from "./featured/Featured.js"
import Hero from "./hero/Hero.js"
import Location from "./location/Location.js"
import Recent from "./recent/Recent.js"
import Team from "./team/Team.js"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
    </>
  )
}

export default Home