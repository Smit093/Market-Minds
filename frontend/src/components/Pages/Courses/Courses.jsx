import React, { useContext, useEffect, useState } from 'react';


import Aos from 'aos'
import 'aos/dist/aos.css'

import LoginContext from '../../../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';

import FromContext from '../../../contexts/FromContext';

export default function Courses() {
  const navigate = useNavigate();
  const { loggedin } = useContext(LoginContext);
  const { setFrom } = useContext(FromContext);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, [])


  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}courses`);

        if (!response.ok) {
          throw new Error('Network response was not okay!');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log('Error fetching the data: ', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!loggedin) {
      setFrom('courses')
      navigate('/login');
    }
  }, [loggedin, navigate]);
  if (loggedin) {

    return (
      <div className="container min-h-screen p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              data-aos="fade-left"
              className="bg-dark-teal rounded-lg shadow-lg overflow-hidden p-4 transition-transform transform hover:scale-105 hover:shadow-xl"
              key={index}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2 text-pastel-green">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-2">
                <i>by {item.creator}</i>
              </p>
              <p className="text-gray-300 dark:text-gray-300 mb-2">
                Ratings: <span className="font-bold text-peach">{item.ratings}</span>
              </p>
              <p className="text-lg font-bold text-peach mb-4">
                ₹{item.price}
              </p>
              <a
                className="text-pastel-green 0 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href={item.purchaseLink}
              >
                Purchase Course
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }

}