import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import { Sidebar } from '../sidebar/Sidebar'

export const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar  */}
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}}  animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Harshit Khatsuriya</motion.span>
        <div className="social">
          <a href="https://drive.google.com/file/d/1pZGmeQeS5oyY0bzHCov_ljg2R9rdIkFS/view?usp=sharing" target='_blank'><img src="/resume2.png" alt="" target='_blank'/></a> 
          <a href="https://www.linkedin.com/in/harshit-khatsuriya-13a607274/" target='_blank'><img src="/linkedIn.png"  alt="LinkedIn" /></a> {/* Linked In  */}
          <a href="https://github.com/1308harshit"><img src="/github.png" alt="Github" target='_blank'/></a> {/* Github  */}
          {/* <a href="#"><img src="/instagram.png" alt="" target='_blank'/></a>  Email  */}
        
        </div>
      </div>
    </div>
  )
}
