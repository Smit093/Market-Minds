import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
const MutualFundsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, [])


  return (
    <div className="container mx-auto p-6 bg-peach rounded-lg shadow-md">
      <h1 className="text-3xl font-bold font-kaisei mb-4">Mutual Funds</h1>

      <section className="mb-6 flex">
        <div className="flex-1">
          <img
            src="https://www.smallcase.com/wp-content/uploads/2023/05/SEO_Mutual-Funds-1.png"
            alt="Mutual Funds Overview"
            className="mt-2 w-full rounded-lg shadow-sm"
          />
        </div>

        <div data-aos="fade-in" className="flex-1 pl-4">
          <h2 className="text-2xl font-semibold font-kaisei text-gray-700">What is a Mutual Fund?</h2>
          <p className="mt-2 font-poppins text-gray-600">
            A mutual fund is a pooled investment vehicle that gathers money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities.
            This allows investors to access a broader range of investments than they might be able to manage individually.
          </p>
        </div>
      </section>


      <section className="mb-6 flex">
        <div data-aos="fade-in" className="flex-1 pr-4">
          <h2 className="text-2xl font-semibold font-kaisei text-gray-700">How to Invest in Mutual Funds</h2>
          <ol className="mt-2 list-decimal list-inside font-poppins text-gray-600">
            <li>
              <strong>Research Mutual Funds:</strong> Start by researching different mutual funds available in the market. Look at their performance, fees, and investment strategies.
            </li>
            <li>
              <strong>Choose an Investment Method:</strong> You can invest in mutual funds directly through the fund’s website or through a broker or financial advisor.
            </li>
            <li>
              <strong>Complete the Application:</strong> Fill out the required application forms, providing your personal and financial information.
            </li>
            <li>
              <strong>Fund Your Account:</strong> Transfer funds to your mutual fund account to complete your investment.
            </li>
            <li>
              <strong>Monitor Your Investment:</strong> Keep track of your mutual fund performance and make adjustments to your portfolio as needed.
            </li>
          </ol>
        </div>

        <div className="flex-1">
          <img
            src='https://www.wintwealth.com/blog/wp-content/uploads/2022/11/Mutual-funds-investment.jpg'
            alt="Investment Process"
            className="mt-2 w-full rounded-lg shadow-sm"
          />
        </div>
      </section>


      <section className="mb-6">
        <h2 className="text-2xl font-semibold font-kaisei text-gray-700">Types of Mutual Fund Schemes</h2>
        {/* Your existing content remains unchanged */}
      </section>

      <section className="mb-6 flex">
        <div className="flex-1 mr-4">
          <img
            src='https://5.imimg.com/data5/SELLER/Default/2022/9/HN/WK/EA/8562081/mutual-fund-consultant.png'
            alt="Benefits of Mutual Funds"
            className="mx-auto mt-2 w-full rounded-lg shadow-sm"
          />
        </div>
        <div data-aos="fade-in" className="flex-1 pr-4">
          <h2 className="text-2xl font-semibold font-kaisei text-gray-700">Benefits of Investing in Mutual Funds</h2>
          <ul className="mt-2 list-disc list-inside font-poppins text-gray-600">
            <li>Diversification of investments.</li>
            <li>Professional management of the portfolio.</li>
            <li>Liquidity, as shares can be bought and sold easily.</li>
            <li>Accessibility with lower minimum investment requirements.</li>
            <li>Regulated and transparent investment option.</li>
          </ul>
          <br /><br />
          <section data-aos="fade-in">
            <h2 className="text-2xl font-semibold font-kaisei text-gray-700">Conclusion</h2>
            <p className="mt-2 font-poppins text-gray-600">
              Mutual funds can be an excellent investment choice for both novice and experienced investors. By pooling resources, they offer a range of investment opportunities while minimizing risk through diversification. Always remember to do your research and consider your financial goals before investing.
            </p>
          </section>
        </div>

      </section>

    </div>
  );
};

export default MutualFundsPage;
