import React, { useContext, useEffect } from 'react';
import Step from './Step';
import Rectangle from './Rectangle';
import LoginContext from '../../../contexts/LoginContext';
import FromContext from '../../../contexts/FromContext';
import { useNavigate } from 'react-router-dom';

export default function Roadmap() {
    const navigate = useNavigate();
    const { loggedin } = useContext(LoginContext);
    const { setFrom } = useContext(FromContext);
    useEffect(() => {
        if (!loggedin) {
            setFrom('roadmap')
            navigate('/login');
        }
    }, [loggedin, navigate]); // Only re-run the effect if `loggedin` or `navigate` changes

    // If loggedin is true, render the roadmap
    if (loggedin) {
        return (
            <div className='container'>
                <div className="bg-cover bg-center h-screen flex justify-center items-center">
                    <div className="absolute top-20 left-[47%] transform -translate-x-1/2 mt-4">
                        <Step indx={1} dir={'fade-left'} />
                    </div>
                    <div className="absolute top-[19%] left-[40%] transform -translate-x-1/2 mt-4">
                        <Rectangle heading={'Understand the Basics'} dir={'fade-right'} discrp={'Learn Key Terms: Familiarize yourself with essential concepts such as stocks, bonds, ETFs, mutual funds, dividends, and market indices.'} />
                    </div>
                    <svg className="h-full w-auto" width="100">
                        <line x1="50" y1="0" x2="50" y2="100%" style={{ stroke: 'white', strokeWidth: 8 }} />
                    </svg>
                    <div className="absolute bottom-[59%] left-[53%] transform -translate-x-1/2 mt-4">
                        <Step indx={2} dir={'fade-right'} />
                    </div>
                    <div className="absolute bottom-[41%] right-[24%] transform -translate-x-1/2 mt-4">
                        <Rectangle heading={'Read Foundational Books'} discrp={'Reading books about the stock market can significantly enhance your understanding and approach to investing and trading.'} dir={'fade-left'} />
                    </div>
                    <div className="absolute bottom-[34%] left-[47%] transform -translate-x-1/2 mt-4">
                        <Step indx={3} dir={'fade-left'} />
                    </div>
                    <div className="absolute bottom-[16%] left-[40%] transform -translate-x-1/2 mt-4">
                        <Rectangle heading={'Learn Fundamental Analysis'} discrp={'Understand Financial Statements: Learn how to read income statements, balance sheets, and cash flow statements.'} dir={'fade-right'} />
                    </div>
                    <div className="absolute bottom-[9%] left-[53%] transform -translate-x-1/2 mt-4">
                        <Step indx={4} dir={'fade-right'} />
                    </div>
                    <div className="absolute top-[91%] right-[24%] transform -translate-x-1/2 mt-4">
                        <Rectangle heading={'Learn Technical Analysis'} discrp={'Study Charts and Patterns: Learn about different chart types, candlestick patterns, and technical indicators (e.g., moving averages, RSI).'} dir={'fade-left'} />
                    </div>
                </div>
                <div className="bg-cover bg-center h-screen flex justify-center items-center">
                    <div className="absolute bottom-[-17%] left-[47%] transform -translate-x-1/2 mt-4">
                        <Step indx={5} dir={'fade-left'} />
                    </div>
                    <div className="absolute bottom-[-35%] left-[40%] transform -translate-x-1/2 mt-4">
                        <Rectangle heading={'Develop a Trading Plan'} discrp={'Define Your Goals: Determine your investment goals, risk tolerance, and time horizon.  Create a Strategy: Develop a plan that includes entry and exit points, risk management, and position sizing.'} dir={'fade-right'} />
                    </div>
                    <svg className="h-full w-auto" width="100">
                        <line x1="50" y1="0" x2="50" y2="100%" style={{ stroke: 'white', strokeWidth: 8 }} />
                    </svg>
                    <div className="absolute bottom-[-40%] left-[53%] transform -translate-x-1/2 mt-4">
                        <Step indx={6} dir={'fade-right'} />
                    </div>
                    <div className="absolute bottom-[-58%]  right-[24%] transform -translate-x-1/2 mt-4">
                        <Rectangle heading={'Paper Trade'} discrp={'Simulate Trading: Use demo accounts or paper trading platforms to practice your strategies without real financial risk.'} dir={'fade-left'} />
                    </div>
                    <div className="absolute bottom-[-64%] left-[47%] transform -translate-x-1/2 mt-4">
                        <Step indx={7} dir={'fade-left'} />
                    </div>
                    <div className="absolute bottom-[-82%] left-[40%] transform -translate-x-1/2 mt-4">
                        <Rectangle heading={'Start with Real Investments'} discrp={'Open a Brokerage Account: Choose a reputable broker and start with a small investment to get comfortable with real trading.'} dir={'fade-right'} />
                    </div>
                    <div className="absolute bottom-[-85%] left-[53%] transform -translate-x-1/2 mt-4">
                        <Step indx={8} dir={'fade-right'} />
                    </div>
                    <div className="absolute bottom-[-103%]  right-[24%] transform -translate-x-1/2 mt-4">
                        <Rectangle heading={'Continuous Learning and Adaptation'} discrp={'Stay Updated: Follow market news, economic reports, and global events that can impact markets.'} dir={'fade-left'} />
                    </div>
                </div>
                <div className="bg-cover bg-center h-8 flex justify-center items-center">
                    <svg className="h-full w-auto" width="100">
                        <line x1="50" y1="0" x2="50" y2="100%" style={{ stroke: 'white', strokeWidth: 8 }} />
                    </svg>
                </div>
            </div>
        );
    }

    // Return null or a loading indicator while navigation is happening
    return null;
}
