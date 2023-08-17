import React from 'react'
import "./Lefthome.css"
import earth from "./assets/earth planet.png"
import sun from "./assets/sun planet.png"
import jupiter from "./assets/jupiter plnet.png"
import {motion} from "framer-motion"


const Lefthome = () => {
  return (
    <div>
      <div className="home">
<div className="container">
    <motion.div className="leftbox"
    drag
    dragConstraints={{
      right: 5,
      left:5,
top:5,
bottom:5,
    }}>
   <img src= {earth} alt="" />
   <div className="text-div">
<h1>EARTH</h1>
<h1>EARTH</h1>
</div>
    </motion.div>
    <motion.div className="midbox"
    drag
    dragConstraints={{
      right: 5,
      left:5,
      top:5,
      bottom:5,
    }}>
<img src ={sun} alt="" />
<div className="text-div">
<h1>SUN</h1>
<h1>SUN</h1>
</div>
    </motion.div>
    <motion.div className="lastbox"
    drag
    dragConstraints={{
      right: 5,
      left:5,
       top:5,
       bottom:5,
    }}>
<img src={jupiter} alt="" />
<div className="text-div">
<h1>JUPITER</h1>
<h1>JUPITER</h1>
</div>
    </motion.div>
    </div>
    <div className="info">
      <p>A precious blue orb cradling diverse life amidst the cosmos.</p>
      <p> A blazing fusion furnace that sustains our solar system's vitality.</p>
      <p> A colossal gas giant crowned by mesmerizing storms and an entourage of moons.</p>
    </div>
    </div>
    </div>
  )
}

export default Lefthome