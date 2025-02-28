import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getLinkClass = (path) => {
        const isActive = location.pathname === path;
        return `relative px-3 py-2 transition-colors duration-200 ${
            isActive
                ? "text-[#E3007E] font-semibold border-b-2 border-[#E3007E]"
                : "text-gray-700 hover:text-[#E3007E]"
        }`;
    };

    const navLinks = [
        { to: "/", label: "الرئيسية" },
        { to: "/Donations", label: "خيارات التبرع" },
        { to: "/BecomeBeneficiary", label: "سجل كمستفيد" },
        { to: "/About", label: "من نحن" },
        { to: "/Contact", label: "تواصل معنا" },
    ];

    return (
        <>
            <nav className="backdrop-blur-md bg-white/95 sticky top-0 z-50 border-b border-gray-100 shadow-sm " style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif"}} >
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16 md:h-20">

                        {/* Logo Section */}
                        <Link to="/" className="relative group flex items-center space-x-3">
                            <img src={logo} className="h-20 w-40" alt="Logo" />
                        </Link>

                        {/* Login Button on the Far Left */}
                        <Link
                            to="/login"
                            className=" rounded-tl-[18px] rounded-tr-[0px] rounded-br-[18px] rounded-bl-[18px] bg-[#E3007E] ml-20 text-white px-4 py-2 rounded-md hover:bg-[#C9006E] transition-colors duration-200"
                        >
                            تسجيل الدخول
                        </Link>

                        {/* Desktop Menu - Centered */}
                        <div className="hidden md:flex md:items-center md:space-x-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={getLinkClass(link.to)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-700 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white border-t border-gray-100 py-2">
                            <div className="flex flex-col space-y-2 px-4 pb-3 pt-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        className={getLinkClass(link.to)}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;