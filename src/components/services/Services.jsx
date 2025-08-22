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
                <h2>Programming Languages</h2>
                <ul>
                    <li> Python</li>
                    <li> Java</li>
                    <li> C++</li>
                    <li> JavaScript</li>
                    <li> TypeScript</li>
                    <li> SQL</li>
                </ul>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Cloud Platforms</h2>
                <ul>
                    <li> AWS</li>
                    <li> Azure</li>
                    <li> Google Cloud</li>
                    <li> Hetzner</li>
                </ul>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>DevOps & Infrastructure</h2>
                <ul>
                    <li> Docker</li>
                    <li> Kubernetes</li>
                    <li> Terraform</li>
                    <li> Jenkins</li>
                    <li> GitLab CI</li>
                    <li> Ansible</li>
                </ul>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Frontend Development</h2>
                <ul>
                    <li> React</li>
                    <li> HTML5/CSS3</li>
                    <li> Bootstrap</li>
                    <li> Tailwind CSS</li>
                    <li> Flutter</li>
                </ul>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Backend & Databases</h2>
                <ul>
                    <li> Node.js</li>
                    <li> Django</li>
                    <li> Express.js</li>
                    <li> FastAPI</li>
                    <li> MongoDB</li>
                    <li> PostgreSQL</li>
                    <li> MySQL</li>
                </ul>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                <h2>Monitoring & Tools</h2>
                <ul>
                    <li> Prometheus</li>
                    <li> Grafana</li>
                    <li> SignOz</li>
                    <li> Git/GitHub</li>
                    <li> VS Code</li>
                </ul>
            </motion.div>

        </motion.div>
    </motion.div>
  )
}
