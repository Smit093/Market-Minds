import React, { useEffect } from 'react'
import stockImg from '../../../assets/imgs/stocks.png';
import tradingImg from '../../../assets/imgs/trading.png';
import tradingVsinvesting from '../../../assets/imgs/tradingVsinvesting.png';

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function BasicQuestions() {
    useEffect(() => {
        Aos.init({ duration: 800 });
    }, [])
    return (
        <div className="my-8 p-4 -mt-2 bg-cover bg-center">
            <div className="container mx-auto px-4 mt-6">
                <div className="text-white p-4  rounded-lg shadow-md flex flex-col md:flex-row gap-4">
                    <div data-aos="fade-in" className="flex-1 bg-pastel-green rounded-lg border-3 border-pastel-green text-dark-teal">
                        <section className='ml-2'>
                            <h2 className="text-2xl font-kaisei font-bold mb-2 ">What Are Stocks?</h2>
                            <p className="mb-4">
                                A stock, also known as equity, is a security that represents the ownership of a fraction of the issuing corporation. Units of stock are called shares, which entitle the owner to a proportion of the corporation’s assets and profits equal to how much stock they own.
                            </p>

                            <h3 className="text-xl font-kaisei font-semibold mb-2">Key Takeaways</h3>
                            <ul className="list-disc pl-5 mb-4">
                                <li>A stock is a form of security that indicates the holder has proportionate ownership in the issuing corporation and is sold predominantly on stock exchanges.</li>
                                <li>Corporations issue stock to raise funds to operate their businesses.</li>
                                <li>There are two main types of stock: common and preferred.</li>
                                <li>Historically, stocks have outperformed most other investments over the long run.</li>
                            </ul>
                        </section>
                    </div>
                    <div data-aos="fade-in" className="flex-1">
                        <img src={stockImg} alt="stocks image" className="w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl" />
                    </div>
                </div>
            </div>
            <div data-aos="fade-in" className="container mx-auto px-4 mt-6">
                <div className="text-white p-4  rounded-lg shadow-md flex flex-col md:flex-row gap-4">
                    <div data-aos="fade-in" className="flex-1">
                        <img src={tradingImg} alt="trading image" className="w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl" />
                    </div>
                    <div data-aos="fade-in" className="flex-1 bg-pastel-green rounded-lg border-3 border-pastel-green text-dark-teal">
                        <section className='ml-2'>
                            <h2 className="text-2xl font-bold font-kaisei  mb-4">What is trading?</h2>
                            <ul className="list-disc pl-5">
                                <li className="mb-4">
                                    Trading involves the buying and selling of financial instruments like stocks, bonds, commodities, currencies, and derivatives to make a profit. It can be conducted on various markets, including stock exchanges and over-the-counter markets. Unlike long-term investing, trading focuses on capitalizing on short-term market fluctuations, requiring a thorough understanding of market dynamics, technical analysis, and risk management.
                                </li>
                                <li>
                                    Trading, in simple terms, is the act of buying and selling financial instruments (like shares, forex, and indices) without directly owning them, in the hopes of making a profit from changes in their price movements.
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            <div data-aos="fade-in" className="container mx-auto px-4 mt-6">
                <div className=" p-4  rounded-lg shadow-md flex flex-col md:flex-row gap-4">
                    <div data-aos="fade-in" className="flex-1 bg-pastel-green rounded-lg border-3 border-pastel-green text-dark-teal">
                        <section className='ml-2'>
                            <h2 className="text-2xl font-bold text font-kaisei mb-2">Difference between Trading and Investing</h2>
                            <ul className="list-disc pl-5 mb-4">
                                <li className="mb-4">
                                    Stock Trading and Investing are two different ways in which one can make a profit in the financial markets. An investor is one who holds the position or the security for a longer period and is a long-term player, while the trader is one who is affected by the movement of the securities in the market.
                                </li>
                                <li className="mb-4">
                                    Investing and trading both involve buying financial assets, such as stocks, ETFs, and bonds, with the goal of growing your money.
                                </li>
                                <li>
                                    The difference is in the timeline. Stock trading is about buying and selling shares for short-term profit, such as within a week or a day. Investing refers to buying and selling stocks for long-term gains, such as within months or years.
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div data-aos="fade-in" className="flex-1">
                        <img src={tradingVsinvesting} alt="trading vs investing" className="w-full rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
