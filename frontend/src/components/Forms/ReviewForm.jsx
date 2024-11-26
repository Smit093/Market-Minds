import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import LoginContext from '../../contexts/LoginContext';
import FromContext from '../../contexts/FromContext';

const ReviewForm = () => {
    const [review, setReview] = useState('')
    const [ratings, setRatings] = useState(1)
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const { userEmail } = useContext(UserContext);
    const { loggedin } = useContext(LoginContext);
    const { setFrom } = useContext(FromContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        const formData = { name: name, review: review, ratings: ratings, gender: gender }
        console.log(formData)
        try {
            await axios.post(`http://127.0.0.1:8000/api/reviews/`, formData);
            setSuccess('Review submitted successfully! Redirecting to home page');
            setReview('')
            setTimeout(() => navigate('/'), 1300)
        } catch (error) {
            console.error("Error submitting review:", error);
            setError('Error submitting review. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        data.map((user) => {
            if (user.email === userEmail) {
                setName(user.name);
                setGender(user.gender);
            }
        })
    }, [handleSubmit])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}users`);

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
            setFrom('reviews')
            navigate('/login');
        }
    }, [loggedin, navigate]);

    if (loggedin) {


        return (
            <div className="flex justify-center items-center min-h-screen ">
                <div className="w-full max-w-md bg-pastel-green p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-dark-teal text-center">Submit Your Review</h2>
                    {success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                            <strong className="font-bold">Success!</strong>
                            <span className="block sm:inline">{success}</span>
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                            <strong className="font-bold">Error!</strong>
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="review" className="block text-sm font-medium text-dark-teal">Review</label>
                            <textarea
                                name='review'
                                id="review"
                                value={review}
                                onChange={(e) => { setReview(e.target.value) }}
                                required
                                rows="4"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-teal focus:border-dark-teal sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="rating" className="block text-sm font-medium text-dark-teal">Rating</label>
                            <input
                                type="number"
                                name="rating"
                                id="rating"
                                value={ratings}
                                onChange={(e) => { setRatings(e.target.value) }}
                                min="1"
                                max="5"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-teal focus:border-dark-teal sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 px-4 bg-dark-teal text-pastel-green font-semibold rounded-lg shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-peach hover:text-dark-teal'} focus:outline-none focus:ring-2 focus:ring-dark-teal focus:ring-offset-2`}
                        >
                            {loading ? 'Submitting...' : 'Submit Review'}
                        </button>
                    </form>
                </div>
            </div>
        );
    };

}
export default ReviewForm;
