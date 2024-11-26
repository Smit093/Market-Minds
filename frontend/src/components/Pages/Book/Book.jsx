import React, { useContext, useEffect, useState } from 'react';

import Aos from 'aos'
import 'aos/dist/aos.css'

import LoginContext from '../../../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';

import FromContext from '../../../contexts/FromContext';

export default function Book() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { loggedin } = useContext(LoginContext);
  const { setFrom } = useContext(FromContext);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}books`);

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
      setFrom('books')
      navigate('/login');
    }
  }, [loggedin, navigate]);
  if (loggedin) {

    return (

      <div className="container  min-h-screen p-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((book, index) => (
            <div data-aos="fade-left"
              className="bg-dark-teal rounded-lg shadow-lg overflow-hidden p-4 transition-transform transform hover:scale-105 hover:shadow-xl"
              key={index}
            >
              <div className="mb-4">
                <img
                  className="w-full h-64 object-cover"
                  src={book.cover || '/default-cover.jpg'}
                  alt={`Cover of ${book.title}`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-pastel-green">
                {book.title}
              </h3>
              <p className="text-pastel-green">
                {book.reviews}
              </p>
              <p className="font-bold text-peach">
                <i>Ratings: {book.ratings}</i>
              </p>
              <p className="text-peach">
                {book.available}
              </p>
              <a
                className="text-pastel-green hover:underline"
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Free PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
