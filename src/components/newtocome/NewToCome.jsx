import "./newtocome.scss"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const variants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

export const NewToCome = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" })

    return (
        <motion.div className="newtocome" ref={ref} variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h2 variants={variants}>Achievements & Certifications</motion.h2>
                <motion.p variants={variants}>
                    Competitive programmer with proven track record and industry certifications
                </motion.p>
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Competitive</motion.b>
                        <motion.b whileHover={{ color: "orange" }}> Programming</motion.b>
                    </h1>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Codeforces</h2>
                    <p>Rating: 1024</p>
                    <p>Solved: 200+ Problems</p>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>LeetCode</h2>
                    <p>Rating: 1492</p>
                    <p>Solved: 300+ Problems</p>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>HackerRank</h2>
                    <p>5★ in Python</p>
                    <p>5★ in C++</p>
                    <p>5★ in DSA</p>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>GeeksforGeeks</h2>
                    <p>Problem Solving</p>
                    <p>Data Structures</p>
                    <p>Algorithms</p>
                </motion.div>
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Organizations</motion.b>
                        <motion.b whileHover={{ color: "orange" }}> & Experience</motion.b>
                    </h1>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Google Cloud Arcade</h2>
                    <p>Cloud Infrastructure</p>
                    <p>DevOps Practices</p>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>PearlThoughts</h2>
                    <p>Full-Stack Development</p>
                    <p>Cloud Solutions</p>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>HelloMainland</h2>
                    <p>System Design</p>
                    <p>Microservices</p>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Schedula</h2>
                    <p>DevOps Engineering</p>
                    <p>CI/CD Automation</p>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Wildest Future</h2>
                    <p>AI/ML Integration</p>
                    <p>Cloud Architecture</p>
                </motion.div>
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>GitHub</motion.b>
                        <motion.b whileHover={{ color: "orange" }}> Statistics</motion.b>
                    </h1>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Total Pull Requests</h2>
                    <p>95</p>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Public Repositories</h2>
                    <p>32</p>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Private Repositories</h2>
                    <p>3</p>
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Total Commits</h2>
                    <p>387</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
