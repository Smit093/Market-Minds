
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

// Replace with your Twelve Data API key
const apiKey = 'ee9f71b6d5974c9b89e066e68967fca3'; 

const companies = [
  { name: "Apple Inc.", symbol: "AAPL" },
  { name: "Microsoft Corporation", symbol: "MSFT" },
  { name: "Amazon.com, Inc.", symbol: "AMZN" },
  { name: "Alphabet Inc.", symbol: "GOOGL" },
  { name: "Meta Platforms, Inc.", symbol: "META" },
  { name: "Tesla, Inc.", symbol: "TSLA" },
  { name: "NVIDIA Corporation", symbol: "NVDA" },
  { name: "Berkshire Hathaway Inc.", symbol: "BRK.B" },
  { name: "Johnson & Johnson", symbol: "JNJ" },
  { name: "Visa Inc.", symbol: "V" }
];

const StockChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentCompany, setCurrentCompany] = useState({});

  useEffect(() => {
    // Select a random company
    const randomCompany = companies[Math.floor(Math.random() * companies.length)];
    setCurrentCompany(randomCompany);
    
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.twelvedata.com/time_series?symbol=${randomCompany.symbol}&interval=1day&apikey=${apiKey}`
        );

        if (response.data.values && response.data.values.length > 0) {
          const values = response.data.values;
          const x = values.map(item => item.datetime).reverse();
          const y = values.map(item => parseFloat(item.close)).reverse();

          setData([{ x, y, type: 'scatter', mode: 'lines', marker: { color: 'rgba(75, 192, 192, 1)' } }]);
        } else {
          setError('No data available for the selected symbol.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-black text-center mb-4">{currentCompany.name} Stock Price</h2>
      <Plot
        data={data}
        layout={{
          title: `${currentCompany.name} Stock Price`,
          xaxis: { title: 'Date' },
          yaxis: { title: 'Price (USD)' },
          width: 800,
        }}
        style={{ width: '100%', height: '400px' }}
      />
    </div>
  );
};

export default StockChart;
