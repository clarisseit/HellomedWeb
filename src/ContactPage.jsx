
import logo from '../src/assets/img/logo.jpg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function ContactPage() {




    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="p-6 bg-white text-black">
            <header className="bg-[#3F9DA8] text-white p-6 shadow-md absolute w-full z-10">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Company Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="Hellomed Logo" className="h-10 mr-3" />
                        <h1 className="text-3xl font-bold">Hellomed</h1>
                    </div>

                    {/* Navigation Links for larger screens */}
                    <nav className="hidden lg:flex items-center text-3xl font-bold">
                        <NavLink
                            to="/"
                            className="px-4 hover:text-gray-200"
                            style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="px-4 hover:text-gray-200"
                            style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="px-4 hover:text-gray-200"
                            style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            Contact
                        </NavLink>
                    </nav>

                    {/* Mobile Menu Toggle Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 transition-colors duration-300 bg-gray-700"
                        >
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Links */}
                {isOpen && (
                    <nav className="lg:hidden mt-4 flex flex-col items-center text-xl font-bold">
                        <NavLink
                            to="/"
                            className="px-4 py-2 hover:text-gray-200"
                            style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="px-4 py-2 hover:text-gray-200"
                            style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="px-4 py-2 hover:text-gray-200"
                            style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            Contact
                        </NavLink>
                    </nav>
                )}
            </header>







            {/* <div className="background-image inset-0 bg-center bg-cover opacity-50">
                <ul className='flex ml-[63rem] text-2xl font-bold text-wrap gap-12 text-center text-blue-800 -mt-[.4rem]'>
                    <li className='mt-4 hover:bg-blue-700 hover:text-white'><a href="#">Home</a></li>
                    <li className='mt-4 hover:bg-blue-700 hover:text-white'><a href="https://www.lands.rw/about/history">About</a></li>
                </ul>
                <img src="../src/assets/img/logo.png" className="w-[48rem] ml-[20rem]" alt="Logo" />
                <marquee className="text-4xl font-bold text-wrap text-center text-blue-800 -mt-[1rem]">
                    Welcome to National Land Authority and make transfer of Land Document at your Home
                </marquee>
            </div> */}


            {/* <div
                className=" absolute inset-0 bg-cover h-[27rem] bg-center "
                style={{ backgroundImage: `url(${logo})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div> */}


            <div
                className="absolute inset-0 bg-cover h-[27rem] bg-center"
                style={{ backgroundImage: `url(${logo})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Navigation Links in Background Image */}
                <ul className="flex justify-center lg:justify-end mt-6 text-2xl font-bold gap-12 text-center text-blue-800">
                    <li className="hover:bg-blue-700 hover:text-white px-4 py-2">
                        <a href="#">Home</a>
                    </li>
                    <li className="hover:bg-blue-700 hover:text-white px-4 py-2">
                        <a href="https://www.lands.rw/about/history">About</a>
                    </li>
                </ul>

                {/* Centered Logo */}
                <div className="flex justify-center mt-10">
                    <img src="../src/assets/img/logo.png" className="w-[48rem]" alt="Logo" />
                </div>

                {/* Scrolling Text */}
                <marquee className="text-4xl font-bold text-center text-blue-800 mt-4">
                    Welcome to National Land Authority and make transfer of Land Document at your Home
                </marquee>
            </div>

            <h2 className="text-2xl font-semibold text-center mb-4" style={{ color: '#3F9DA8' }}>Contact Us</h2>
            <form className="max-w-md mx-auto bg-gray-100 p-6 shadow-md rounded">
                <label className="block mb-4">
                    <span className="text-black">Name</span>
                    <input type="text" className="form-input mt-1 block w-full" placeholder="Your Name" />
                </label>
                <label className="block mb-4">
                    <span className="text-black">Email</span>
                    <input type="email" className="form-input mt-1 block w-full" placeholder="Your Email" />
                </label>
                <label className="block mb-4">
                    <span className="text-black">Message</span>
                    <textarea className="form-textarea mt-1 block w-full" rows={4} placeholder="Your Message"></textarea>
                </label>
                <button type="submit" className="bg-[#3F9DA8] text-white px-4 py-2 rounded">Send Message</button>
            </form>
        </div>
    );
}

export default ContactPage;
