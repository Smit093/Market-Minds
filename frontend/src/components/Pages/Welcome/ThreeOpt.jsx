import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import videoicon from '../../../assets/imgs/videoicon.png';
import booksimg from '../../../assets/imgs/booksimg.jpg';
import coursesimg from '../../../assets/imgs/coursesimg.jpeg';
import mandf from '../../../assets/imgs/M&F.jpeg';
import fando from '../../../assets/imgs/f&o.jpeg';
import ipo from '../../../assets/imgs/ipo.jpeg';

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function ThreeOpt() {
    useEffect(() => {
        Aos.init({ duration: 800 });
    }, [])
    return (
        <div className='-mt-8'>
            <div id="target-section" className="bg-cover bg-center container   mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-beige text-dark-teal p-4 rounded-lg shadow-md flex flex-col gap-4">
                        <div data-aos="fade-left" className="flex-shrink-0 self-center">
                            <NavLink to='/videos'>
                                <img
                                    src={videoicon}
                                    alt="video icon"
                                    className="mt-3 w-full rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                                    style={{ width: '250px', height: '250px' }}
                                />
                            </NavLink>
                        </div>
                        <div data-aos="fade-right" className="mt-3">
                            <p>Learn visually! Explore our engaging videos that break down stock market concepts and trading strategies—perfect for all levels!</p>
                        </div>
                    </div>

                    <div className="grid grid-rows-2 gap-4">
                        <div className=" bg-beige text-dark-teal p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
                            <div data-aos="fade-left" className="flex-shrink-0">
                                <NavLink to='/books'>
                                    <img
                                        src={booksimg}
                                        alt="books icon"
                                        className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                                        style={{ width: '230px', height: '150px' }}
                                    />
                                </NavLink>
                            </div>
                            <div data-aos="fade-right" className="flex-1">
                                <p>Turn the page to success! Dive into our must-read books on trading and investing to deepen your understanding and confidence</p>
                            </div>
                        </div>

                        <div className=" bg-beige text-dark-teal p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
                            <div data-aos="fade-left" className="flex-shrink-0">
                                <NavLink to="courses">
                                    <img
                                        src={coursesimg}
                                        alt="courses icon"
                                        className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                                        style={{ width: '230px', height: '150px' }}
                                    />
                                </NavLink>
                            </div>
                            <div data-aos="fade-right" className="flex-1">
                                <p>Level up your skills! Enroll in our comprehensive courses and gain the knowledge you need to navigate the stock market like a pro!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="bg-cover bg-center container mx-auto px-4 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid grid-rows-2 gap-4">
                            <div className=" bg-beige text-dark-teal p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
                                <div data-aos="fade-left" className="flex-shrink-0">
                                    <NavLink to='/trading'>
                                        <img
                                            src={fando}
                                            alt="books icon"
                                            className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                                            style={{ width: '230px', height: '150px' }}
                                        />
                                    </NavLink>
                                </div>
                                <div data-aos="fade-right" className="flex-1">
                                    <p>Trade with confidence! Master the art of trading with our expert tips and strategies to navigate the markets like a pro.</p>
                                </div>
                            </div>

                            <div className=" bg-beige text-dark-teal p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
                                <div data-aos="fade-left" className="flex-shrink-0">
                                    <NavLink to="/ipo">
                                        <img
                                            src={ipo}
                                            alt="courses icon"
                                            className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                                            style={{ width: '230px', height: '150px' }}
                                        />
                                    </NavLink>
                                </div>
                                <div data-aos="fade-right" className="flex-1">
                                    <p>Get in on the ground floor! Learn everything you need to know about IPOs and seize opportunities in the stock market as they arise.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-beige text-dark-teal p-4 rounded-lg shadow-md flex flex-col gap-4">
                            <div data-aos="fade-left" className="flex-shrink-0 self-center">
                                <NavLink to='/mutual-funds'>
                                    <img
                                        src={mandf}
                                        alt="video icon"
                                        className="mt-3 w-full rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                                        style={{ width: '250px', height: '250px' }}
                                    />
                                </NavLink>
                            </div>
                            <div data-aos="fade-right" className="mt-3">
                                <p>Invest smartly! Discover the power of mutual funds and how they can diversify your portfolio for long-term growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
