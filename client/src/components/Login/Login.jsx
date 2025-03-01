import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'; // استيراد dispatch
import { setUser } from '../../store/userSlice'; // استيراد setUser

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // تعريف dispatch
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { email: loginForm.email, password: loginForm.password };

        try {
            const response = await axios.post("http://localhost:5000/auth/login", body, {
                withCredentials: true,
            });
            const data = response.data;
            console.log(data);  // هنا ستتمكن من رؤية الـ userId في الـ console

            if (response.status === 200) {
                // تخزين الـ userId في الـ Redux بدلاً من الـ id
                dispatch(setUser({ id: data.userId, email: data.email })); // استخدام userId هنا
                navigate('/');
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900">Log in</h1>
                    <p className="mt-2 text-sm text-gray-600">Enter your credentials to access your account</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                onChange={handleChange}
                                value={loginForm.email}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Email address"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                onChange={handleChange}
                                value={loginForm.password}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
