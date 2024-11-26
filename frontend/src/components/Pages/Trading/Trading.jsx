import React, { useEffect } from 'react';
import tradingP_C from '../../../assets/imgs/tradingPros_cons.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { NavLink } from 'react-router-dom'
const TradingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, [])

  return (
    <div className="container mx-auto p-6 bg-lightblue rounded-lg shadow-md bg-peach">
      <h1 className="text-3xl font-bold font-kaisei mb-4">Trading Basics</h1>

      <section className="mb-6 flex">
        <div data-aos="fade-in" className="flex-1 pr-4">
          <h2 className="text-2xl font-semibold font-kaisei text-gray-700">What is Trading?</h2>
          <p className="mt-2 font-poppins text-gray-600">
            Trading refers to the buying and selling of financial instruments, such as stocks, bonds, commodities, and currencies. Traders aim to profit from price fluctuations in these instruments by making informed decisions based on market analysis.
          </p>
          <p className="mt-2 font-poppins text-gray-600">
            Trading can be conducted through various platforms and can involve different strategies, from day trading to long-term investing. Understanding the market dynamics is essential for successful trading.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://learn.moneysukh.com/wp-content/uploads/2022/06/Trading-account.png"
            alt="Trading Overview"
            className="mt-[-4rem] w-full rounded-lg shadow-sm" // Adjusted margin
          />
        </div>
      </section>


      <section className="mb-6 flex">
        <div className="flex-1 mr-4">
          <img
            src={tradingP_C} // Replace with a relevant image URL
            alt="Pros and Cons of Trading"
            className="mt-2 w-full rounded-lg shadow-sm"
          />
        </div>
        <div data-aos="fade-in" className="flex-1 pr-4">
          <h2 className="text-2xl font-semibold font-kaisei text-gray-700">Pros & Cons of Trading</h2>

          <h3 className="text-xl font-medium font-kaisei text-gray-600 mt-4">Pros</h3>
          <ul className="mt-2 list-disc list-inside font-poppins text-gray-600">
            <li>Potential for high returns on investment.</li>
            <li>Flexibility in trading styles (day trading, swing trading, etc.).</li>
            <li>Access to a wide range of markets and instruments.</li>
            <li>Ability to react quickly to market changes.</li>
            <li>Opportunities for diversification in investment portfolios.</li>
            <li>Ability to trade from anywhere with internet access.</li>
            <li>Educational resources and communities available for support.</li>
            <li>Possibility of passive income through automated trading systems.</li>
            <li>Market hours allow for trading at your convenience.</li>
          </ul>

          <h3 className="text-xl font-medium font-kaisei text-gray-600 mt-4">Cons</h3>
          <ul className="mt-2 list-disc list-inside font-poppins text-gray-600">
            <li>High risk and potential for significant losses.</li>
            <li>Requires extensive knowledge and market analysis.</li>
            <li>Emotional stress and pressure to make quick decisions.</li>
            <li>Transaction fees can add up, impacting profitability.</li>
            <li>Market volatility can lead to unpredictable results.</li>
            <li>Time-consuming to monitor and analyze markets effectively.</li>
            <li>Potential for overtrading and burnout.</li>
            <li>Risk of falling victim to scams or unregulated brokers.</li>
            <li>Dependency on technology; outages can impact trading.</li>
          </ul>
        </div>
      </section>


      <section className="mb-6 flex">
        <div data-aos="fade-in" className="flex-1 pr-4">
          <h2 className="text-2xl font-semibold font-kaisei text-gray-700">Frequently Asked Questions (FAQs)</h2>

          <h3 className="text-lg font-semibold font-kaisei text-gray-600 mt-4">Q. Is trading suitable for everyone?</h3>
          <p className="mt-2 font-poppins text-gray-600">
            Trading may not be suitable for everyone due to its high-risk nature. It requires a solid understanding of the markets, risk management strategies, and emotional control.
          </p>

          <h3 className="text-lg font-semibold font-kaisei text-gray-600 mt-4">Q. How much capital do I need to start trading?</h3>
          <p className="mt-2 font-poppins text-gray-600">
            The amount of capital needed to start trading can vary widely. Some brokers allow you to start with a small amount, while others may require a higher minimum investment.
          </p>

          <h3 className="text-lg font-semibold font-kaisei text-gray-600 mt-4">Q. What strategies can I use in trading?</h3>
          <p className="mt-2 font-poppins text-gray-600">
            Common trading strategies include day trading, swing trading, scalping, and long-term investing. Each strategy has its own risk and reward profile, and it’s essential to choose one that aligns with your financial goals and risk tolerance.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxq0zA4PxoIH_g-U0Up98LkIp8fmSaR9ggWg&s" // Replace with a relevant image URL
            alt="Trading FAQs"
            className="mt-2 w-full rounded-lg shadow-sm"
          />
        </div>
      </section>

      <div className="mb-24"></div>

      <section className="mb-6 flex mt-8">
        <div className="flex-1 mr-6">
          <img
            src="https://tradersunion.com/uploads/articles/158/preview.png"
            alt="Paper Trading Overview"
            className="mt-[-4rem] w-full rounded-lg shadow-sm"
          />
        </div>
        <div data-aos="fade-in" className="flex-1 pr-4">
          <h2 className="text-2xl font-semibold font-kaisei text-gray-700">What is Paper Trading?</h2>
          <p className="mt-2 font-poppins text-gray-600">
            Paper trading is a simulation of trading in financial markets without risking real money. It allows traders to practice their strategies and gain experience in a risk-free environment. By using virtual capital, individuals can test their decision-making skills and familiarize themselves with market movements.
          </p>
          <p className="mt-2 font-poppins text-gray-600">
            Many platforms offer paper trading features, which are especially beneficial for beginners looking to build confidence before committing real funds. This practice can help in refining trading strategies and understanding the emotional aspects of trading without financial pressure.
          </p>
          <p className="mt-2 font-poppins text-gray-600">
            <NavLink to="/paper-trading" className="text-blue-600 hover:underline">
              Learn more about paper trading.
            </NavLink>
          </p>
        </div>
      </section>



      <section data-aos="fade-in">
        <h2 className="text-2xl font-semibold font-kaisei text-gray-700">Conclusion</h2>
        <p className="mt-2 font-poppins text-gray-600">
          Trading offers exciting opportunities but comes with its own set of risks. It's crucial to educate yourself and develop a solid trading plan to navigate the markets successfully. Always remember to trade responsibly and within your financial means.
        </p>
      </section>
    </div>
  );
};

export default TradingPage;
