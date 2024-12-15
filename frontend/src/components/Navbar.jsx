// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/img/elevate logo 1.png';
import PropTypes from 'prop-types';

const Navbar = ({ openPopup }) => {
    return (
        <nav className="sticky top-0 left-0 right-0 flex flex-wrap items-center justify-between w-full p-1.5 border-none shadow-lg">
            <div className='flex items-center'>
                <img className='w-32 h-28' src={logo} alt="logo" />
            </div>
            <ul className="flex flex-wrap items-center justify-center gap-4">
                <li className="relative text-lg font-semibold cursor-pointer font-pryFF before:content-[''] text-pryClr before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-secClr before:transition-all before:duration-500 hover:before:w-full">
                    Home
                </li>
                <li className="relative text-lg font-semibold cursor-pointer font-pryFF before:content-[''] text-pryClr before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-secClr before:transition-all before:duration-500 hover:before:w-full">
                    Services
                </li>
                <li className="relative text-lg font-semibold cursor-pointer font-pryFF before:content-[''] text-pryClr before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-secClr before:transition-all before:duration-500 hover:before:w-full">
                    About us
                </li>
                <li className="relative text-lg font-semibold cursor-pointer font-pryFF before:content-[''] text-pryClr before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-secClr before:transition-all before:duration-500 hover:before:w-full">
                    Contact
                </li>
            </ul>

            <button
                onClick={openPopup}
                className="px-6 py-2 rounded-full border-bg-pryClr bg-pryClr text-mainClr font-pryFF">
                Sign in
            </button>
        </nav>
    )
}

Navbar.propTypes = {
    openPopup: PropTypes.func.isRequired,
};

export default Navbar;