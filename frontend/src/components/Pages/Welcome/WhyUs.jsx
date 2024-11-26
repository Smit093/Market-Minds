import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'


import {
    motion,
    useAnimation,
    useInView,
} from "framer-motion"
import { useRef } from "react"



const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
}

const svgIconVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(252, 211, 77, 0)",
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(252, 211, 77, 1)",
    },
}

export default function WhyUs() {

    const containerRef = useRef(null)

    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    useEffect(() => {
        Aos.init({ duration: 800 });
    }, [])
    return (
        <div className="-mt-3 container text-center text-white h-80 bg-cover bg-center" style={{ color: '#ede8f5' }}>
            <h1 className="text-3xl font-kaisei  font-bold mb-6 text-pastel-green" >
                Why Us? <br />
            </h1>

            <div className="container mx-auto px-4 mt-6 " >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-36">
                    <div
                        data-aos="fade-right"
                        className="flex flex-col justify-start items-center p-4 rounded-lg shadow-md bg-beige text-pastel-green"
                    >
                        <h2 className="text-xl font-semibold text-center">1. One Platform, Many Solutions!</h2>
                        <p className="text-center text-dark-teal">Our website is your all-in-one resource for share market education. you’ll find everything you need to learn all in one convenient location.

                        </p>
                    </div>
                    <div
                        data-aos="fade-in"
                        className="flex flex-col justify-end items-center p-4 rounded-lg shadow-md bg-beige text-pastel-green"
                    >
                        <h2 className="text-xl font-semibold text-center">2. Ease of Access</h2>
                        <p className="text-center text-dark-teal">Enjoy hassle-free learning with our platform, accessible anytime and anywhere.</p>
                    </div>
                    <div
                        data-aos="fade-left"
                        className="flex flex-col justify-start items-center p-4 rounded-lg shadow-md bg-beige text-pastel-green"
                    >
                        <h2 className="text-xl font-semibold text-center">3. User-Friendly Interface</h2>
                        <p className="text-center text-dark-teal">Navigate our site effortlessly with an intuitive design that prioritizes your learning experience.</p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-in" className="flex justify-center mb-6 ">
                <a href="#target-section" className="flex items-center px-6 py-3  font-semibold rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 bg-pastel-green text-dark-teal">
                    Start Learning
                    <motion.svg
                        variants={gridSquareVariants}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-8 stroke-amber-500 stroke-[0.5] ml-2"
                    >
                        <motion.path
                            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                            variants={svgIconVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: {
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    delay: 1,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 1,
                                },
                                fill: {
                                    duration: 1.5,
                                    ease: "easeIn",
                                    delay: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 1,
                                },
                            }}
                        />
                    </motion.svg>
                </a>
            </div>


        </div>
    )
}
