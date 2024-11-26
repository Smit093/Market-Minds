import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginContext from '../../contexts/LoginContext';
import UserContext from '../../contexts/UserContext';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const navigate = useNavigate();

    let { setLoggedin } = useContext(LoginContext)
    let { setUserEmail } = useContext(UserContext)


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            await axios.post(`http://127.0.0.1:8000/api/users/`, formData);
            setSuccess('Sign up successful! Redirecting to the Home page.');
            setLoggedin(true);
            setUserEmail(formData.email);
            setFormData({ name: '', email: '', password: '', gender: '' });
            setTimeout(() => navigate('/'), 1300);
        } catch (error) {
            console.error("Error during sign up:", error);
            setError('Error during sign up. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-sm bg-pastel-green p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-dark-teal text-center">Sign Up</h2>
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
                        <label htmlFor="name" className="block text-sm font-medium text-dark-teal">Name</label>
                        <input
                            name='name'
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-teal focus:border-dark-teal sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-teal">Email Address</label>
                        <input
                            name='email'
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-teal focus:border-dark-teal sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-dark-teal">Password</label>
                        <input
                            name='password'
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-dark-teal focus:border-dark-teal sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-dark-teal">Gender</label>
                        <div className="mt-1 flex items-center space-x-4">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-dark-teal focus:ring-dark-teal border-gray-300"
                                />
                                <label htmlFor="male" className="ml-2 text-sm text-dark-teal">Male</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-dark-teal focus:ring-dark-teal border-gray-300"
                                />
                                <label htmlFor="female" className="ml-2 text-sm text-dark-teal">Female</label>
                            </div>
                        </div>
                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 bg-dark-teal text-pastel-green font-semibold rounded-lg shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-peach hover:text-dark-teal'} focus:outline-none focus:ring-2 focus:ring-dark-teal focus:ring-offset-2`}
                    >
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                    <p className="text-sm text-dark-teal text-center mt-4">
                        Already have an account?
                        <NavLink className="text-deep-teal hover:text-indigo-700" to="/login">
                            Login
                        </NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
