import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Rectangle({ dir,heading,discrp }) {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, [])
  return (
    <div data-aos={dir} className="h-28 w-60 bg-white">
      <h1  className="bg-dark-teal text-pastel-green p-2">{heading}</h1>
      <p  className="bg-pastel-green text-dark-teal p-2">{discrp}</p>
    </div>

  )
}
