import logo from '../src/assets/img/logo.jpg';
import video from '../src/assets/video/Hellomed.mp4';
import backgroundImageSection from '../src/assets/conslutate/section.jpg';
import IosImage from '../src/assets/img/10004.png';
import how from '../src/assets/img/how it work3.jpg';
import how1 from '../src/assets/img/10005 (1).png';

import aloysImage from '../src/assets/img/10002 (1).png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons



function HomePage() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="min-h-screen bg-gray-100">


            <header className="bg-[#3F9DA8] text-white p-6 shadow-md">
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



            {/* <div
                className="absolute inset-0 bg-cover h-[27rem] bg-center"
                style={{ backgroundImage: `url(${logo})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div> */}


            <div className="background-image inset-0 bg-center bg-cover opacity-50">

                <marquee className="text-4xl font-bold text-wrap text-center text-blue-800 mt-[20rem]">
                    Welcome to Hellomedawebsite
                </marquee>
            </div>

            <div className="relative h-[27rem] mt-[1rem]">
                <div className="space-y-12">
                    {/* First Section */}
                    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 animate-fade-in">
                        <p className="text-lg text-gray-800 leading-relaxed md:w-1/2 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg border-l-4 border-[#3F9DA8] transform transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-opacity-100">
                            <span className="font-bold text-[#3F9DA8] text-2xl block mb-2 animate-pulse">Why You Matter</span>
                            <span className="text-xl">
                                Your time is precious. It’s for building dreams, nurturing relationships, and chasing passions. Not for endless queues and the stress of finding affordable, quality healthcare. We believe everyone deserves healthcare that fits seamlessly into their life. That's why we've created a new way to access care – convenient, affordable, and effective. Let us handle your health, so you can focus on what truly matters.
                            </span>
                        </p>
                        <video
                            className="md:w-1/2 w-full h-auto object-cover rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in"
                            autoPlay
                            loop
                            muted
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Second Section */}
                    <div className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-6 animate-fade-in">
                        <p className="text-lg text-gray-800 leading-relaxed md:w-1/2 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg border-r-4 border-[#3F9DA8] transform transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-opacity-100">
                            <span className="font-bold text-[#3F9DA8] text-2xl block mb-2 animate-pulse">For Your Health and Beyond</span>
                            <span className="text-xl">
                                Life happens. Unexpected illnesses can strike anywhere – a sudden pain while commuting, a nagging worry that won't go away. Or perhaps you're thriving but seeking guidance on your wellness journey. Wherever you are in your health story, our expert Doctors, Clinical Psychologists, and Clinical Nutritionists are here to provide the support you need, from quick consultations to ongoing care.
                            </span>
                        </p>

                        <video
                            className="md:w-1/2 w-full h-auto object-cover rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in"
                            autoPlay
                            loop
                            muted
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <main
                    className="container mx-auto p-6 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${backgroundImageSection})`,
                    }}
                >
                    <section className="my-12 text-center">
                        <h2 className="text-4xl font-bold mb-6 text-[#3F9DA8] bg-gradient-to-r from-[#3F9DA8] to-[#2c8a9c] text-transparent bg-clip-text">
                            Empowering patients by putting healthcare into their own hands
                        </h2>
                        <p className="text-xl text-gray-800 mb-6 max-w-3xl mx-auto">
                            Hellomed is solving the problem of overcrowded hospitals and clinics by providing a telemedicine platform for remote consultations. Experience healthcare like never before, right from the comfort of your home.
                        </p>
                    </section>

                    <section id="problem" className="my-12">
                        <h2 className="text-3xl font-bold mb-4 text-[#3F9DA8]">The Problem</h2>
                        <p className="text-lg text-gray-800 mb-6 bg-[#f9fafb] p-4 rounded-lg shadow-lg">
                            "Overcrowded hospitals & clinics lead to long wait times, reduced care quality, and stress for patients and providers."
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
                                <h3 className="text-2xl font-semibold mb-2 text-[#3F9DA8]">Patients</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Long lines and waits of 6 hours+</li>
                                    <li>Time off work to visit healthcare facilities</li>
                                    <li>Travel long distances for care</li>
                                    <li>Delay seeking care until conditions worsen</li>
                                    <li>50-100% spend on transport to hospitals</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
                                <h3 className="text-2xl font-semibold mb-2 text-[#3F9DA8]">Healthcare Providers</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Overwhelmed with high patient volumes</li>
                                    <li>Limited time with each patient</li>
                                    <li>Increased administrative work</li>
                                    <li>High stress from critical conditions</li>
                                    <li>Long working hours impact work-life balance</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section id="solution" className="my-12">
                        <h2 className="text-3xl font-bold mb-4 text-[#3F9DA8]">The Solution</h2>
                        <p className="text-lg text-gray-800 mb-6 max-w-4xl mx-auto bg-[#e0f7fa] p-6 rounded-lg shadow-lg">
                            Hellomed is a telemedicine platform connecting patients and healthcare providers remotely for medical consultations. Our solution ensures seamless, convenient, and effective care from anywhere.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-xl hover:bg-[#f0f9f9] hover:border-2 hover:border-[#3F9DA8] duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-2 text-[#3F9DA8] transition-colors duration-300 ease-in-out hover:text-[#1e88e5]">
                                    Remote Patient Monitoring
                                </h3>
                                <p className="text-gray-700 transition-colors duration-300 ease-in-out hover:text-gray-800">
                                    Track patient health from a distance with real-time data and insights.
                                </p>
                            </div>
                            <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-xl hover:bg-[#f0f9f9] hover:border-2 hover:border-[#3F9DA8] duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-2 text-[#3F9DA8] transition-colors duration-300 ease-in-out hover:text-[#1e88e5]">
                                    Telemedicine by Medical Professionals
                                </h3>
                                <p className="text-gray-700 transition-colors duration-300 ease-in-out hover:text-gray-800">
                                    Consult with doctors remotely via secure video calls or messaging.
                                </p>
                            </div>
                            <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-xl hover:bg-[#f0f9f9] hover:border-2 hover:border-[#3F9DA8] duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-2 text-[#3F9DA8] transition-colors duration-300 ease-in-out hover:text-[#1e88e5]">
                                    At-home Rapid Tests
                                </h3>
                                <p className="text-gray-700 transition-colors duration-300 ease-in-out hover:text-gray-800">
                                    Perform various health tests at home with quick and accurate results.
                                </p>
                            </div>
                        </div>
                        y

                    </section>



                </main>
                <div className="flex">
                    <section className="my-12 text-center bg-[#f0f4f8] py-12">
                        <h2 className="text-4xl font-bold mb-4 text-[#3F9DA8]">Take Hellomed Inc with you</h2>
                        <p className="text-xl text-gray-700 mb-6">
                            Anywhere, Anytime. Access video consultation with top doctors on the Hellomed App. Connect with doctors online, available 24/7, from the comfort of your home.
                        </p>
                        <div className="flex justify-center gap-6 mb-8">
                            <a href="#ios-download" className="bg-white p-4 rounded-lg shadow-lg hover:bg-[#e0f7fa] transition duration-300 ease-in-out">
                                <img src={IosImage} alt="iOS Download" className="w-36 h-auto" />
                                <p className="mt-2 text-[#3F9DA8] font-semibold">iOS Download</p>
                            </a>
                            <a href="#android-download" className="bg-white p-4 rounded-lg shadow-lg hover:bg-[#e0f7fa] transition duration-300 ease-in-out">
                                <img src={IosImage} alt="Android Download" className="w-36 h-auto" />
                                <p className="mt-2 text-[#3F9DA8] font-semibold">Android Download</p>
                            </a>
                        </div>
                    </section>

                    <div className="w-1/2 flex justify-center items-center">
                        <img src={how} alt="Android Download" className="w-36 h-auto" />
                        <img src={how1} alt="Android Download" className="w-36 h-auto" />
                    </div>
                </div>


                <section id="team" className="my-12">
                    <h2 className="text-3xl font-semibold mb-4 text-[#3F9DA8]">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 shadow-lg rounded text-center">
                            <img src={aloysImage} alt="Aloys Rukundo" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Aloys Rukundo</h3>
                            <p className="text-gray-700">Founder & CEO</p>
                        </div>
                        <div className="bg-white p-6 shadow-lg rounded text-center">
                            <img src={aloysImage} alt="Ryou Nagai" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Ryou Nagai</h3>
                            <p className="text-gray-700">Business Development</p>
                        </div>
                        <div className="bg-white p-6 shadow-lg rounded text-center">
                            <img src={aloysImage} alt="Ines Ineza" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Ines Ineza</h3>
                            <p className="text-gray-700">COO</p>
                        </div>
                    </div>
                </section>

                {/* <section id="contact" className="my-12 text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-[#3F9DA8]">Get in Touch</h2>
                    <p className="text-lg text-gray-700 mb-6">Have questions or want to learn more about Hellomed? Contact us today.</p>
                    <button className="bg-[#3F9DA8] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#2c8a9c] transition">Contact Us</button>
                </section> */}

            </div>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Social Media Links */}
                        <div className="flex space-x-4 mb-4 md:mb-0">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3F9DA8]">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3F9DA8]">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3F9DA8]">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3F9DA8]">
                                <FaLinkedin size={24} />
                            </a>
                        </div>

                        {/* Google Maps Embed */}
                        {/* <div className="w-full md:w-1/2">
                            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <iframe
                                        width="100%"
                                        height="300"
                                        id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=YOUR_ADDRESS_HERE&z=15&output=embed"
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight="0"
                                        marginWidth="0"
                                        title="Google Maps"
                                    ></iframe>
                                </div>
                            </LoadScript>
                        </div> */}
                    </div>

                    <div className="text-center mt-[73rem]">
                        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* <footer className="bg-[#3F9DA8] text-white  text-center">
                <p>&copy; 2024 Hellomed. All rights reserved.</p>
            </footer> */}
        </div >
    );
}

export default HomePage;
