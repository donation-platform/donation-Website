import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { to: "/login", label: "Login" },
        { to: "/register", label: "register" },
        { to: "/BecomeBeneficiary", label: "Become Beneficiary" },
        { to: "/AdminDash", label: "Admin Dashboard" },
        { to: "/Donations", label: "Donations" },
        { to: "/DonationDetails", label: "Donation Details" },
        { to: "/Payment", label: "Payment" },
        { to: "/Profile", label: "Profile" },
        { to: "/About", label: "About" },
        { to: "/Contact", label: "Contact" },
    ];

    return (
        <>
            <nav className="backdrop-blur-md bg-white/95 sticky top-0 z-50 border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo Section */}
                        <Link to="/" className="relative group flex items-center space-x-3">
                            <div className="bg-[#A59D84] rounded-lg p-2 transition-all duration-300 group-hover:shadow-lg">
                                <span className="text-white font-bold text-lg md:text-xl">HV</span>
                            </div>
                            <span className="text-gray-800 font-semibold text-base md:text-lg group-hover:text-[#A59D84] transition-all duration-300">
                                Horizon Villas
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#A59D84]"></span>
                            </span>
                        </Link>

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

                        {/* Desktop Menu */}
                        <div className="hidden md:flex md:items-center md:space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#A59D84] hover:text-white rounded-md transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white border-t border-gray-100 py-2">
                            <div className="flex flex-col space-y-2 px-4 pb-3 pt-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#A59D84] hover:text-white rounded-md transition-colors duration-200"
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