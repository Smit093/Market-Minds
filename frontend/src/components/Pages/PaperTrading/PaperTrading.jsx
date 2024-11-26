import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function PaperTrading() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    useEffect(() => {
        Aos.init({ duration: 800 });
    }, [])
    return (
        <div className="container mx-auto p-5 bg-peach">
            <h1 className="text-3xl font-bold mb-4">What is Paper Trading?</h1>
            <img
                src="https://content.stockstotrade.com/wp-content/uploads/2020/03/paper_trading_SEO.jpg"
                alt="Paper Trading Concept"
                className="mb-4 rounded shadow-lg w-7/12"
            />
            <p className="text-lg mb-4">
                Paper trading is a simulated trading experience that allows individuals to practice buying and selling assets without financial risk. It helps traders test their strategies and gain experience in a live market environment without losing real money.
            </p>

            <div data-aos="fade-in">

                <h2 className="text-2xl font-semibold mt-6 mb-2">Benefits of Paper Trading</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Learn the basics of trading.</li>
                    <li>Test strategies without financial risk.</li>
                    <li>Understand market conditions and dynamics.</li>
                    <li>Gain confidence before trading with real money.</li>
                </ul>
            </div>
            <div data-aos="fade-in">

                <h2 className="text-2xl font-semibold mt-6 mb-2">How Does It Work?</h2>
                <img
                    src="https://i.ytimg.com/vi/PrvRhnJ30Q0/maxresdefault.jpg"
                    alt="How Paper Trading Works"
                    className="mb-4 rounded shadow-lg w-7/12"
                />
                <p className="text-lg mb-4">
                    In paper trading, you simulate trades based on real market data. You keep track of your buy and sell decisions, and at the end of the trading period, you assess your performance as if you had traded with real money.
                </p>
            </div>
            <div data-aos="fade-in">

                <h2 className="text-2xl font-semibold mt-6 mb-2">Where to Paper Trade?</h2>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>TD Ameritrade:</strong> Offers a robust paper trading platform through its Thinkorswim app.</li>
                    <li><strong>TradingView:</strong> Provides a user-friendly interface for charting and simulating trades.</li>
                    <li><strong>Webull:</strong> Features a free paper trading account with real-time market data.</li>
                    <li><strong>Investopedia Simulator:</strong> Great for beginners, with tutorials and educational resources.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusion</h2>
                <p className="text-lg mb-4">
                    Paper trading is an excellent way to familiarize yourself with trading strategies and the market environment without the risk of losing money. Choose a platform that suits your needs and start practicing today!
                </p>
            </div>
        </div>
    )
}
