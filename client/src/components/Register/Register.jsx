import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: ""
    });

    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState("");
    const [fieldFocus, setFieldFocus] = useState({
        name: false,
        email: false,
        password: false,
        phone: false,
        address: false
    });

    const handleChange = (e) => {
        setRegisterForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        if (formError) setFormError("");
    }

    const handleFocus = (field) => {
        setFieldFocus(prev => ({ ...prev, [field]: true }));
    }

    const handleBlur = (field) => {
        setFieldFocus(prev => ({ ...prev, [field]: false }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFormError("");

        const body = {
            name: registerForm.name,
            email: registerForm.email,
            password: registerForm.password,
            phone: registerForm.phone,
            address: registerForm.address
        };

        try {
            const response = await axios.post("http://localhost:5000/auth/register", body, {
                withCredentials: true,
            });

            const data = response.data.message;
            console.log(data);

                if (response.status === 201) {
                    dispatch(setUser({ id: data.userId, email: data.email }));
                    navigate('/');
                }

        } catch (error) {
            if (error.response && error.response.status === 409) {
                setFormError(error.response.data.message || "البريد الإلكتروني مسجل بالفعل");
            } else {
                setFormError("حدث خطأ أثناء التسجيل، يرجى المحاولة مرة أخرى");
                console.error("Error during registration:", error);
            }
            setLoading(false);
        }
    }

    return (
        <>
            <div dir="rtl" className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
                <div
                    className={`w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-700 ease-out transform 'opacity-100 translate-y-0 scale-100' `}
                >
                    {/* Left Side - Image/Design */}
                    <div className="md:w-2/5 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 flex flex-col justify-between relative overflow-hidden hidden md:block">
                        <div className="absolute top-0 left-0 w-full h-full">
                            {/* Enhanced abstract pattern overlay with animations */}
                            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-400 mix-blend-multiply animate-pulse opacity-20" style={{ animationDuration: '8s' }}></div>
                            <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-indigo-400 mix-blend-multiply animate-pulse opacity-20" style={{ animationDuration: '10s' }}></div>
                            <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-pink-400 mix-blend-multiply animate-pulse opacity-20" style={{ animationDuration: '6s' }}></div>

                            {/* Additional animated elements */}
                            <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-blue-300 mix-blend-multiply animate-pulse opacity-20" style={{ animationDuration: '12s' }}></div>
                            <div className="absolute bottom-1/3 left-1/5 w-20 h-20 rounded-full bg-indigo-300 mix-blend-multiply animate-pulse opacity-20" style={{ animationDuration: '9s' }}></div>
                        </div>

                        <div className="relative z-10 transition-all duration-700 transform translate-y-0" style={{ transitionDelay: '300ms' }}>
                            <h2 className="text-3xl font-bold text-white mb-6">أهلاً بك!</h2>
                            <p className="text-indigo-100 text-lg mb-8">انضم إلينا اليوم وابدأ رحلتك معنا</p>
                        </div>

                        <div className="relative z-10 transition-all duration-700 transform translate-y-0" style={{ transitionDelay: '500ms' }}>
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                                <p className="text-white text-sm">
                                    "انشئ حسابك الآن للوصول إلى جميع الخدمات المتميزة التي نقدمها لك"
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-3/5 p-8">
                        <div className="text-center mb-8 transition-all duration-500 transform translate-y-0" style={{ transitionDelay: '200ms' }}>
                            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">إنشاء حساب جديد</h1>
                            <p className="text-sm text-gray-600">أدخل بياناتك لإنشاء حساب</p>
                        </div>

                        {formError && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center mb-4 animate-pulse">
                                {formError}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className={`group transition-all duration-300 transform ${fieldFocus.name ? 'scale-102' : 'scale-100'}`}>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        الاسم الكامل
                                    </label>
                                    <div className="relative">
                                        <span className={`absolute inset-y-0 right-0 flex items-center pr-3 transition-colors duration-300 ${fieldFocus.name ? 'text-indigo-500' : 'text-gray-400'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <input
                                            onChange={handleChange}
                                            value={registerForm.name}
                                            onFocus={() => handleFocus('name')}
                                            onBlur={() => handleBlur('name')}
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            className={`block w-full pr-10 pl-3 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right transition-all duration-300 ${fieldFocus.name ? 'border-indigo-500 bg-indigo-50/30' : 'border-gray-300'}`}
                                            placeholder="ألاسم"
                                        />
                                    </div>
                                </div>

                                <div className={`group transition-all duration-300 transform ${fieldFocus.email ? 'scale-102' : 'scale-100'}`}>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        البريد الإلكتروني
                                    </label>
                                    <div className="relative">
                                        <span className={`absolute inset-y-0 right-0 flex items-center pr-3 transition-colors duration-300 ${fieldFocus.email ? 'text-indigo-500' : 'text-gray-400'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </span>
                                        <input
                                            onChange={handleChange}
                                            value={registerForm.email}
                                            onFocus={() => handleFocus('email')}
                                            onBlur={() => handleBlur('email')}
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className={`block w-full pr-10 pl-3 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right transition-all duration-300 ${fieldFocus.email ? 'border-indigo-500 bg-indigo-50/30' : 'border-gray-300'}`}
                                            placeholder="البريد الإلكتروني"
                                        />
                                    </div>
                                </div>

                                <div className={`group transition-all duration-300 transform ${fieldFocus.password ? 'scale-102' : 'scale-100'}`}>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        كلمة المرور
                                    </label>
                                    <div className="relative">
                                        <span className={`absolute inset-y-0 right-0 flex items-center pr-3 transition-colors duration-300 ${fieldFocus.password ? 'text-indigo-500' : 'text-gray-400'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <input
                                            onChange={handleChange}
                                            value={registerForm.password}
                                            onFocus={() => handleFocus('password')}
                                            onBlur={() => handleBlur('password')}
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="new-password"
                                            required
                                            className={`block w-full pr-10 pl-3 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right transition-all duration-300 ${fieldFocus.password ? 'border-indigo-500 bg-indigo-50/30' : 'border-gray-300'}`}
                                            placeholder="كلمة السر"
                                        />
                                    </div>
                                </div>

                                <div className={`group transition-all duration-300 transform ${fieldFocus.phone ? 'scale-102' : 'scale-100'}`}>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        رقم الهاتف
                                    </label>
                                    <div className="relative">
                                        <span className={`absolute inset-y-0 right-0 flex items-center pr-3 transition-colors duration-300 ${fieldFocus.phone ? 'text-indigo-500' : 'text-gray-400'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </span>
                                        <input
                                            onChange={handleChange}
                                            value={registerForm.phone}
                                            onFocus={() => handleFocus('phone')}
                                            onBlur={() => handleBlur('phone')}
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            autoComplete="tel"
                                            required
                                            className={`block w-full pr-10 pl-3 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right transition-all duration-300 ${fieldFocus.phone ? 'border-indigo-500 bg-indigo-50/30' : 'border-gray-300'}`}
                                            placeholder="رقم الهاتف"
                                        />
                                    </div>
                                </div>

                                <div className={`group transition-all duration-300 transform ${fieldFocus.address ? 'scale-102' : 'scale-100'}`}>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                        العنوان
                                    </label>
                                    <div className="relative">
                                        <span className={`absolute top-3 right-0 flex items-center pr-3 transition-colors duration-300 ${fieldFocus.address ? 'text-indigo-500' : 'text-gray-400'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <textarea
                                            onChange={handleChange}
                                            value={registerForm.address}
                                            onFocus={() => handleFocus('address')}
                                            onBlur={() => handleBlur('address')}
                                            id="address"
                                            name="address"
                                            rows="3"
                                            autoComplete="street-address"
                                            required
                                            className={`block w-full pr-10 pl-3 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-right transition-all duration-300 ${fieldFocus.address ? 'border-indigo-500 bg-indigo-50/30' : 'border-gray-300'}`}
                                            placeholder="شارع الرئيسي، المدينة، المنطقة، الرمز البريدي"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105 ${loading ? 'opacity-80' : ''}`}
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            جاري التسجيل...
                                        </>
                                    ) : (
                                        "إنشاء حساب"
                                    )}
                                </button>
                            </div>
                        </form>

                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-600">
                                لديك حساب بالفعل؟{" "}
                                <Link to="/login" className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-colors duration-300">
                                    تسجيل الدخول
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}