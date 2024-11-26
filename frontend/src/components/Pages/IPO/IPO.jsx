import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const IPOPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, [])

  return (
    <div className="container mx-auto p-6 bg-peach rounded-lg shadow-md">
      <h1 className="text-3xl font-bold font-kaisei mb-4">Initial Public Offerings (IPOs)</h1>

      <section className="mb-6 flex">
        <div data-aos="fade-in" className="flex-1 pr-4">
          <h2 className="text-2xl font-semibold font-kaisei text-gray-700">What is an IPO?</h2>
          <p className="mt-2 font-poppins text-gray-600">
            An Initial Public Offering (IPO) allows a company to issue securities by selling its stock to the general public. This process helps companies raise capital for various purposes. New securities issued for the first time are dealt with in a primary market.
          </p>
          <p className="mt-2 font-poppins text-gray-600">
            Once listed on a stock exchange, the company becomes publicly traded, and its shares are available for open market trading. While the IPO process can be costly, it can also be straightforward, making it an appealing option for companies that may lack the resources or time to conduct extensive due diligence.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202312/ipo_fever_is_back_with_a_boom_0-sixteen_nine.jpg" // Replace with a relevant image URL
            alt="IPO Overview"
            className="mt-2 w-full rounded-lg shadow-sm"
          />
        </div>
      </section>

      <section className="mb-6 flex">
        <div className="flex-1 mr-4">
          <img
            src="https://fastercapital.com/i/Everything-You-Need-to-Know-About-an-Initial-Public-Offering-IPO--The-Pros-and-Cons-of-an-IPO.webp"  // Replace with a relevant image URL
            alt="Pros and Cons of IPOs"
            className="mt-2 w-full rounded-lg shadow-sm"
          />
        </div>
        <div data-aos="fade-in" className="flex-1 pr-4">
          <h2 className="text-2xl font-semibold font-kaisei text-gray-700">Pros & Cons of Investing in IPOs</h2>

          <h3 className="text-xl font-medium font-kaisei text-gray-600 mt-4">Pros</h3>
          <ul className="mt-2 list-disc list-inside font-poppins text-gray-600">
            <li>Access to a large pool of capital for growth.</li>
            <li>Increased visibility and credibility in the marketplace.</li>
            <li>Attracts and retains talent through stock options.</li>
            <li>Potential for significant share price appreciation.</li>
            <li>Enhanced brand recognition and market position.</li>
          </ul>

          <h3 className="text-xl font-medium font-kaisei text-gray-600 mt-4">Cons</h3>
          <ul className="mt-2 list-disc list-inside font-poppins text-gray-600">
            <li>High volatility and uncertainty in share prices.</li>
            <li>Pressure to meet market expectations post-IPO.</li>
            <li>Limited historical data for investors to assess the company.</li>
            <li>Potential conflicts of interest with underwriters.</li>
            <li>Increased regulatory scrutiny and compliance costs.</li>
          </ul>
        </div>

      </section>


      <section className="mb-6 flex">
        <div data-aos="fade-in" className="flex-1 pr-4">
          <h2 className="text-2xl font-semibold font-kaisei text-gray-700">Frequently Asked Questions (FAQs)</h2>

          <h3 className="text-lg font-semibold font-kaisei text-gray-600 mt-4">Q. Is buying an IPO a good idea?</h3>
          <p className="mt-2 font-poppins text-gray-600">
            Yes, investing in an IPO can be a good idea if you believe in the company's viability and find the price fair. However, it's crucial not to invest in every IPO, as not all businesses may succeed.
          </p>

          <h3 className="text-lg font-semibold font-kaisei text-gray-600 mt-4">Q. What are the risks associated with IPOs?</h3>
          <p className="mt-2 font-poppins text-gray-600">
            IPOs can be risky due to volatility, lack of historical data, and potential overvaluation. It's important to research the company thoroughly and understand the market conditions before investing.
          </p>

          <h3 className="text-lg font-semibold font-kaisei text-gray-600 mt-4">Q. How can I participate in an IPO?</h3>
          <p className="mt-2 font-poppins text-gray-600">
            You can participate in an IPO through a brokerage account that offers IPO access. Some brokerages may require you to meet certain criteria, such as having a minimum account balance or investment experience.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://fastercapital.com/i/IPOs-and-Graded-Vesting--Unlocking-Potential-for-Early-Investors--Benefits-for-IPO-Investors.webp" // Replace with a relevant image URL
            alt="IPO FAQs"
            className="mt-2 w-full rounded-lg shadow-sm"
          />
        </div>
      </section>


      <section data-aos="fade-in">
        <h2 className="text-2xl font-semibold font-kaisei text-gray-700">Conclusion</h2>
        <p className="mt-2 font-poppins text-gray-600">
          IPOs present both exciting opportunities and notable risks for investors. It's crucial to conduct thorough research and understand both the benefits and drawbacks before making any investment decisions. Being well-informed can help navigate the complexities of investing in newly public companies.
        </p>
      </section>
    </div>
  );
};

export default IPOPage;
