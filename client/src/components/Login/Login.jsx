import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState("");

    const handleChange = (e) => {
        setLoginForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        // Clear error when user types
        if (formError) setFormError("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFormError("");
        const body = { email: loginForm.email, password: loginForm.password };

        try {
            const response = await axios.post("http://localhost:5000/auth/login", body, {
                withCredentials: true,
            });
            const data = response.data;
            console.log(data);

            if (response.status === 200) {
                dispatch(setUser({ id: data.userId, email: data.email }));
                
                // Add small delay to show success animation
                setTimeout(() => {
                    navigate('/');
                }, 300);
            }
        } catch (error) {
            console.error("Error during login:", error);
            setFormError("خطأ في البريد الإلكتروني أو كلمة المرور");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div dir="rtl" className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl transform transition-all duration-300 hover:shadow-2xl">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                        تسجيل الدخول
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">أدخل بيانات الاعتماد للوصول إلى حسابك</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div className="relative transform transition-all duration-300 hover:scale-105 focus-within:scale-105">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                البريد الإلكتروني
                            </label>
                            <div className="relative mt-1">
                                <input
                                    onChange={handleChange}
                                    value={loginForm.email}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-right"
                                    placeholder="البريد الإلكتروني"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="relative transform transition-all duration-300 hover:scale-105 focus-within:scale-105">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                كلمة المرور
                            </label>
                            <div className="relative mt-1">
                                <input
                                    onChange={handleChange}
                                    value={loginForm.password}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-right"
                                    placeholder="كلمة المرور"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {formError && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center animate-pulse">
                            {formError}
                        </div>
                    )}

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all duration-300 hover:scale-105 ${loading ? 'opacity-70' : ''}`}
                        >
                            {loading ? (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : null}
                            تسجيل الدخول
                        </button>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        ليس لديك حساب؟{" "}
                        <Link to="/register" className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-colors duration-300">
                            إنشاء حساب
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}