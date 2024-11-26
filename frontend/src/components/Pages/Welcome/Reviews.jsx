import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Ratings from './Ratings';
import Typography from '@mui/material/Typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Reviews() {
    const [data, setData] = useState([])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true, // Center the current slide
        centerPadding: '20px', // Add padding around centered slide
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}reviews`);

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

    console.log(data)

    return (
        <div className="w-full bg-dark-teal py-8 rounded-lg"> {/* Add vertical padding */}
            <div className="container p-4">
            <h2 className="text-center text-2xl font-bold font-kaisei text-pastel-green">:-What Our Users Say-:</h2>
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.id} className="px-4"> {/* Add horizontal padding */}
                            <div className="bg-pastel-green h-80 w-96 rounded-lg p-4 flex flex-col mx-auto"> {/* Center horizontally and add margin */}
                                <div className="flex h-full space-x-4">
                                    {/* First Column */}
                                    <div className="flex-1 p-4">
                                        {item.gender == 'male' ?
                                            <img
                                                src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                                                alt="Image"
                                                className="w-full h-auto rounded-lg"
                                            />
                                            : (<img
                                                src="https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg"
                                                alt="Image"
                                                className="w-full h-auto rounded-lg"
                                            />)}
                                        <h2 className="text-lg font-bold text-center mt-2 font-kaisei">{item.name}</h2>
                                    </div>

                                    {/* Second Column */}
                                    <div className="flex-1 p-4">
                                        <Typography component="legend">Review</Typography>
                                        <p>{item.review}</p>
                                        <Ratings value={item.ratings} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Reviews;
