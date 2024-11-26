import React from 'react';
import Marquee from 'react-fast-marquee';
import '../../../css/Scroll.css'; // Ensure this CSS file includes dark theme styles

function Scroll() {
  return (
    <div className="container scroll-container">
      <div className="title text-center mb-4">
        <h1 className="text-2xl bg-dark-teal text-pastel-green font-bold font-kaisei mt-2 rounded-lg">FAQs</h1>
      </div>

      <div className="w-full overflow-hidden">
        <Marquee direction="right" speed={35}>
          <div className="bg-grey-900 faq-wrapper flex-shrink-0 mx-4">
            <div  className="faq-item bg-pastel-green text-dark-teal">
              <h2 className="faq-question  font-kaisei">What is the difference between Stock and Share?</h2>
              <p className="faq-answer">
                A stock and a share are essentially one and the same. They both represent a part of the capital of a joint stock company. In India it was always called shares whereas in the US they have been referred to as stocks. They essentially mean the same thing.
              </p>
            </div>
            <div  className="faq-item bg-pastel-green text-dark-teal">
              <h2 className="faq-question  font-kaisei">What Instruments Are Traded In The Stock Markets?</h2>
              <p className="faq-answer">
                The stock market trades equity shares of various listed companies. In addition, the markets also trade other instruments like index futures, index options, stock futures, stock options, VIX futures etc. Both equity and derivative products are traded in stock markets.
              </p>
            </div>
            <div  className="faq-item bg-pastel-green text-dark-teal">
              <h2 className="faq-question font-kaisei">Where Do I Find Stock Related Information?</h2>
              <p className="faq-answer">
                There are various sources for finding stock related information like the newspaper, websites, company annual reports etc. Brokerage houses like Tradebulls also provide a plethora of rich stock market content and analytics on the website itself.
              </p>
            </div>
            <div  className="faq-item bg-pastel-green text-dark-teal">
              <h2 className="faq-question font-kaisei">What Are The Factors That Determine The Price Of The Stock</h2>
              <p className="faq-answer">
                Price of the stock is normally determined by growth prospects and the profitability of the company. Normally, based on the attractiveness of the stock a P/E ratio is assigned by the market. Stock prices also depend on demand and supply as well as news flows.
              </p>
            </div>
            <div  className="faq-item bg-pastel-green text-dark-teal">
              <h2 className="faq-question font-kaisei">How Would You Choose Stock For Your Portfolio?</h2>
              <p className="faq-answer">
                The stock market trades equity shares of various listed companies. In addition, the markets also trade other instruments like index futures, index options, stock futures, stock options, VIX futures etc. Both equity and derivative products are traded in stock markets.
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Scroll;
