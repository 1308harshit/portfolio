import React, { useRef } from 'react'
import "./services.scss"
import { animate, motion, useInView } from 'framer-motion'

const variants = {
    initial: {
        x : -500,
        y: 100,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition:{
            duration: 1, 
            staggerChildren: 0.1,
        }
    }

}

export const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref, {margin:"-100px"});
  return (
    <motion.div className='services' variants={variants} initial="initial" ref={ref} animate={"animate"}>

        <motion.div className="textContainer" variants={variants}>
            <motion.p>Let's connect and build <br /> 
            something new</motion.p>
            <hr />
        </motion.div>

        <motion.div className="titleContainer" variants={variants}  >
            <div className="title">
                {/* <img src="/people.webp" alt="" /> */}
                <h1>
                    <motion.b whileHover={{color: "orange"}}>Skill</motion.b>
                    <motion.b whileHover={{color: "orange"}}> Section</motion.b>
                </h1>
            </div>
            
            <div className="title">
                <h1>
                    {/* <motion.b whileHover={{color: "orange"}}>For </motion.b>
                    <motion.b whileHover={{color: "orange"}}>Your </motion.b>
                    Business. */}
                </h1>
                {/* <button>What we Do?</button> */}
            </div>
        </motion.div>

        <motion.div className="listContainer" variants={variants} >
            <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Languages</h2>
                {/* <p>dneofn</p> */}
                {/* -------------------------------- */}
                <ul>
                    <li> Python</li>
                    <li> Java</li>
                    <li> C++</li>
                    <li> JavaScript</li>
                </ul>
                {/* -------------------------------- */}
                {/* <button>Go</button> */}
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Databases</h2>
                {/* <p>dneofn</p> */}
                {/* -------------------------------- */}
                <ul>
                    <li> MongoDB</li>
                    <li> PostgreSQL</li>
                    <li> MySQL </li>
                </ul>
                {/* -------------------------------- */}
                {/* <button>Go</button> */}
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Frontend Frameworks</h2>
                {/* <p>dneofn</p> */}
                {/* -------------------------------- */}
                <ul>
                    <li> React </li>
                    <li> Bootstrap </li>
                    <li> Tailwind CSS</li>
                    
                </ul>
                {/* -------------------------------- */}
                {/* <button>Go</button> */}
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Backend Frameworks</h2>
                {/* <p>dneofn</p> */}
                {/* -------------------------------- */}
                <ul>
                    <li> Node.js </li>
                    <li> Express.js </li>
                    <li> Django </li>
                    
                </ul>
                {/* -------------------------------- */}
                {/* <button>Go</button> */}
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Technologies</h2>
                {/* <p>dneofn</p> */}
                {/* -------------------------------- */}
                <ul>
                    <li> Git </li>
                    <li> GitHub </li>        
                </ul>
                {/* -------------------------------- */}
                {/* <button>Go</button> */}
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2> OS</h2>
                {/* <p>dneofn</p> */}
                {/* -------------------------------- */}
                <ul>
                    <li> Linux </li>
                    <li> Windows </li>        
                </ul>
                {/* -------------------------------- */}
                {/* <button>Go</button> */}
            </motion.div>

            {/* <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>dneofn</p>
                <button>Go</button>
            </motion.div> */}
        </motion.div>
    </motion.div>
  )
}
