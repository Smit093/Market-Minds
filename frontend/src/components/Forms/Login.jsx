import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginContext from '../../contexts/LoginContext';
import FromContext from '../../contexts/FromContext';
import UserContext from '../../contexts/UserContext';
const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [data, setData] = useState([]);

    let { setLoggedin } = useContext(LoginContext)
    let { from } = useContext(FromContext)
    let { setUserEmail } = useContext(UserContext)
    let { userEmail } = useContext(UserContext)


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}users`);
                if (!response.ok) {
                    throw new Error("Network response was not okay!");
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log("Error fetching the data:", error);
                setError("Error fetching the data.");
            }
        }
        fetchData();
    }, []);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const isValidUser = data.some(user => user.email === formData.email && user.password === formData.password);
            if (isValidUser && from !== '') {
                console.log("Account verified successfully !!!");
                setLoggedin(true);
                setUserEmail(formData.email);
                console.log(userEmail)
                setFormData({ email: '', password: '' });
                setSuccess(`Login successful! Redirecting to ${from} page.`);
                setTimeout(() => navigate(`/${from}`), 1300);
            }
            else if (isValidUser) {
                console.log("Account verified successfully !!!");
                setLoggedin(true);
                setUserEmail(formData.email);
                console.log(userEmail)
                setFormData({ email: '', password: '' });
                setSuccess("Login successful! Redirecting to home page.");
                setTimeout(() => navigate('/'), 1300);
            } else {
                console.log("Account verification failed !");
                setError("Invalid email or password. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            setError("Error submitting the form.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen ">
                <div className="w-full max-w-sm bg-pastel-green p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-dark-teal text-center">Login</h2>
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
                            <label htmlFor="email" className="block text-sm font-medium text-dark-teal">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-dark-teal">Password</label>
                            <input
                                name="password"
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 px-4 bg-dark-teal text-pastel-green font-semibold rounded-lg shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-peach hover:text-dark-teal'} focus:outline-none focus:ring-2 focus:ring-dark-teal focus:ring-offset-2`}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                        <p className="text-sm text-dark-teal text-center mt-4">
                            Don't have an account?
                            <NavLink className="text-deep-teal hover:text-indigo-700" to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
