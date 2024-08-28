
import logo from '../src/assets/img/logo.jpg'; // Update the path to where your logo is located.
import clinic from '../src/assets/img/clinitouch.JPG';
import health from '../src/assets/img/healthtech.JPG';
import rdb from '../src/assets/img/rdb.JPG';
import zoom from '../src/assets/img/zoom.JPG';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function AboutPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="min-h-screen flex flex-col">
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


            <main className="flex-grow p-6 bg-gray-100">



                <section className="text-center my-8">
                    <h2 className="text-2xl font-semibold mb-4" style={{ color: '#3F9DA8' }}>Our Mission</h2>
                    <p className="text-lg mb-6 mx-auto max-w-3xl">
                        Hellomed empowers patients by providing access to healthcare services from the comfort of their homes.
                        We believe that quality healthcare should be accessible to everyone, everywhere.
                    </p>
                </section>

                <section className="my-8">
                    <h2 className="text-2xl font-semibold text-center mb-4" style={{ color: '#3F9DA8' }}>The Problem We Solve</h2>
                    <div className="mx-auto max-w-4xl text-lg">
                        <p className="mb-4">
                            Overcrowded hospitals and clinics lead to long wait times, reduced care quality, and stress for both patients and healthcare providers.
                            Patients often have to travel long distances, taking time off work to access care, and sometimes delay seeking help until their condition worsens.
                        </p>
                        <p>
                            Healthcare providers are overwhelmed, facing burnout from high patient volumes and long working hours, which in turn affects the quality of care they can provide.
                        </p>
                    </div>
                </section>

                <section className="my-8">
                    <h2 className="text-2xl font-semibold text-center mb-4" style={{ color: '#3F9DA8' }}>Our Solution</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 shadow-md rounded">
                            <h3 className="text-xl font-semibold mb-4">Telemedicine</h3>
                            <p>Connecting patients with certified healthcare professionals remotely for consultations, reducing the need to visit overcrowded clinics.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded">
                            <h3 className="text-xl font-semibold mb-4">Remote Patient Monitoring</h3>
                            <p>Using the latest technology, we monitor patients' health remotely, providing continuous care and early interventions.</p>
                        </div>
                    </div>
                </section>

                <section className="my-8">
                    <h2 className="text-2xl font-semibold text-center mb-4" style={{ color: '#3F9DA8' }}>Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 shadow-md rounded">
                            <h3 className="text-xl font-semibold mb-4">Aloys Rukundo</h3>
                            <p>Founder & CEO - Passionate about business and digital healthcare, Aloys has a background in finance and is dedicated to transforming healthcare in Rwanda.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded">
                            <h3 className="text-xl font-semibold mb-4">Ryou Nagai</h3>
                            <p>Business Development - A healthcare business consultant with an MBA, focusing on business development in healthtech and clinic management.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded">
                            <h3 className="text-xl font-semibold mb-4">Ines Ineza</h3>
                            <p>COO - With experience in operations and internal control from Ecobank Rwanda, Ines ensures the smooth operation of Hellomed.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded">
                            <h3 className="text-xl font-semibold mb-4">Joyeuse Uwamurera</h3>
                            <p>Nurse - A qualified nurse with a bachelor's degree in nursing, Joyeuse is committed to providing high-quality patient care.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded">
                            <h3 className="text-xl font-semibold mb-4">Dr. Wellars Uwizeyimana</h3>
                            <p>Doctor - A General Practitioner with over 7 years of experience, Dr. Uwizeyimana holds a degree in General Medicine and Surgery.</p>
                        </div>
                    </div>
                </section>

                <section className="my-8">
                    <h2 className="text-2xl font-semibold text-center mb-4" style={{ color: '#3F9DA8' }}>Our Strategic Partners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex justify-center">
                            <img src={clinic} alt="Clinitouch Partner" className="w-40 h-40 object-contain" />
                        </div>
                        <div className="flex justify-center">
                            <img src={health} alt="HealthTech Partner" className="w-40 h-40 object-contain" />
                        </div>
                        <div className="flex justify-center">
                            <img src={rdb} alt="RDB Partner" className="w-40 h-40 object-contain" />
                        </div>
                        <div className="flex justify-center">
                            <img src={zoom} alt="Zoom Partner" className="w-40 h-40 object-contain" />
                        </div>
                    </div>
                </section>

                <section className="my-8">
                    <h2 className="text-2xl font-semibold text-center mb-4" style={{ color: '#3F9DA8' }}>Our Vision</h2>
                    <div className="mx-auto max-w-4xl text-lg">
                        <p className="mb-4">
                            Hellomed aims to revolutionize healthcare by making it accessible, efficient, and patient-centered. Our goal is to reach 5000 paying customers by 2025,
                            providing them with seamless healthcare services that enhance their quality of life.
                        </p>
                        <p>
                            We are committed to continuous innovation, ensuring that our platform meets the evolving needs of our patients and healthcare providers.
                        </p>
                    </div>
                </section>
            </main>

            <footer className="bg-[#3F9DA8] text-white p-4 text-center">
                <p>&copy; 2024 Hellomed. All rights reserved.</p>
            </footer>
        </div >
    );
}

export default AboutPage;
