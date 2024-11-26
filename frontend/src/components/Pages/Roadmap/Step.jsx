import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Step({ indx,dir }) {
    useEffect(() => {
        Aos.init({ duration: 800 });
    }, [])
    return (
        <div data-aos={dir} >
            <div className='h-10 w-10 rounded-full bg-pastel-green text-dark-teal flex justify-center items-center'>{indx}</div>
        </div>
    )
}
