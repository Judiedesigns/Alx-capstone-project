import React, { useState } from 'react';
import appLogo from '../assets/logo.png'
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header () {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="flex justify-between items-center border-b py-4 border-gray-400">
            <Link to="/">
                <img src={appLogo} alt="logo" className="w-32" />
            </Link>

            <nav className='hidden md:block'>
                <ul className="flex space-x-8">
                    <li>
                        <Link to="/business">Business</Link>
                    </li>
                    <li>
                        <Link to="/technology">Technology</Link>
                    </li>
                    <li>
                        <Link to="/entertainment">Entertainment</Link>
                    </li>
                    <li>
                        <Link to="/health">Health</Link>
                    </li>
                    <li>
                        <Link to="/science">Science</Link>
                    </li>
                </ul>
            </nav>

            <div className="relative md:hidden block">
                <div
                    className={`fixed top-0 right-0 h-full bg-white border-l border-gray-300 transform transition-transform duration-500 ease-in-out z-50
                    ${isOpen ? 'translate-x-0 w-[75%]' : 'translate-x-full w-[75%]'}
                    `}
                >
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6 text-gray-700" />
                    </button>

                    <ul className="flex flex-col space-y-6 p-6 mt-16">
                        <li>
                            <Link to="/business" onClick={toggleMenu}>Business</Link>
                        </li>
                        <li>
                            <Link to="/technology" onClick={toggleMenu}>Technology</Link>
                        </li>
                        <li>
                            <Link to="/entertainment" onClick={toggleMenu}>Entertainment</Link>
                        </li>
                        <li>
                            <Link to="/health" onClick={toggleMenu}>Health</Link>
                        </li>
                        <li>
                            <Link to="/science" onClick={toggleMenu}>Science</Link>
                        </li>
                    </ul>
                </div>

                {isOpen && (
                    <div
                        onClick={toggleMenu}
                        className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-5 transition-opacity duration-500 ease-in-out z-40"
                    ></div>
                )}
            </div>

            <div className='cursor-pointer md:hidden block'>
                <Menu onClick={toggleMenu} />
            </div>
        </header>
    );
}
export default Header;
