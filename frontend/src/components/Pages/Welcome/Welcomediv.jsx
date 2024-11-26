import React from 'react';
import arrow from '../../../assets/imgs/arrow.png';
import NiftySensex from './NiftySensex'
export default function Welcomediv() {
    return (
        <div
            className='flex mb-3 items-center justify-center h-screen bg-cover bg-center'
        >
            <div className="text-center mr-40 relative" >

                <h1 className='  text-6xl font-kaisei relative text-pastel-green'>
                    Welcome to <br /> Market Minds
                </h1>
                <img src={arrow} height={50} width='full' className='-mt-6 -mb-10' alt="" />
                <h3 className='text-2xl font-baskervville relative text-pastel-green mt-3' >Start your learning journy today <br /> with the ease of Market Minds
                </h3>
            </div>
            <div>
                <NiftySensex/>
            </div>
        </div>
    );
}
