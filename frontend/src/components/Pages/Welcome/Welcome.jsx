import React from 'react';
import '../../../css/Welcome.css';


import Scroll from './Scroll';
import Welcomediv from './Welcomediv';
import WhyUs from './WhyUs';
import BasicQuestions from './BasicQuestions';
import ThreeOpt from './ThreeOpt';
import Reviews from './reviews';

export default function Welcome() {
    return (
        <div>
            <Welcomediv />
            <WhyUs />
            <BasicQuestions />
            <ThreeOpt />
            <Scroll />
            <Reviews/>
        </div >
    );
}



