// import React from 'react'
// import "./hero.scss"
// import { motion } from 'framer-motion'
// import { Outlet, Link } from 'react-router-dom'
// import { Contact } from "../contact/Contact"
// import { Portfolio } from '../portfolio/Portfolio'

// const textVariants = {
//   initial: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition:{
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },

//   scrollButton:{
//     opacity: 0,
//     y: 10,
//     transition:{
//       duration: 2,
//       repeatType: "mirror",
//       repeat: Infinity,
//     }
//   }
// }


// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: "-220%",
//     transition:{
//       repeat: Infinity,
//       duration: 20,
//     },
//   },
// }

// export const Hero = () => {
  
//   return (
//     <div className='hero'>
//       <div className="wrapper">

//         <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
//         <motion.h2 variants={textVariants}>HARSHIT KHATSURIYA</motion.h2>
//         <motion.h1 variants={textVariants}>FullStack Developer</motion.h1>
//         <motion.div variants={textVariants} className="buttons">
//           <Link to="/contact"></Link>
//           <motion.button variants={textVariants}>See the Latest Work</motion.button>
//           <motion.button variants={textVariants}>Contact Me</motion.button>
//         </motion.div>
//         <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
//         </motion.div>
//       </div>

//       <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
//       Software Engineer MERN Stack Developer Cloud Enthusiast
//       </motion.div>

//       <div className="imageContainer">
//         <img src="/face.png" alt="" />
//       </div>
//     </div>
//   )
// }

// ------------------------------- CHATGPT ---------------------------------

import React from 'react';
import "./hero.scss";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton:{
    opacity: 0,
    y: 10,
    transition:{
      duration: 2,
      repeatType: "mirror",
      repeat: Infinity,
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition:{
      repeat: Infinity,
      duration: 20,
    },
  },
}

export const Hero = () => {
  
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>HARSHIT KHATSURIYA</motion.h2>
          <motion.h1 variants={textVariants}>FullStack Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {/* Use Link to navigate to /contact */}
            {/* <Link to="#Contact">
              <motion.button variants={textVariants}>See the Latest Work</motion.button>
            </Link>
            <Link to="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </Link> */}

            <motion.a href='#Portfolio'>See the Latest Work</motion.a>
            <motion.a href='#Contact'>Contact Me</motion.a>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Software Engineer MERN Stack Developer Cloud Enthusiast
      </motion.div>

      <div className="imageContainer">
        <img src="/face.png" alt="" />
      </div>

      {/* Placeholder for the contact section */}

    </div>
  )
}

export default Hero;
