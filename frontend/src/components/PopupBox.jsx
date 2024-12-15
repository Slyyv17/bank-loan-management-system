// eslint-disable-next-line no-unused-vars
import React from "react";
import { LockIcon, Mail } from "lucide-react";


import PropTypes from 'prop-types';

const PopupBox = ({ closePopup }) => {
    return (
        <form action="#"
            className="flex flex-col items-center justify-center w-[600px] gap-4 shadow-lg p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg">
            <h1 className="text-2xl font-semibold font-pryFF text-tetClr"> Sign in</h1>
            <div className="flex items-center w-full gap-2 px-4 py-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-secClr">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="flex-1 text-gray-800 outline-none font-pryFF"
                />
                <Mail className="text-lg text-gray-400" />
            </div>

            <div className="flex items-center w-full gap-2 px-4 py-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-secClr">
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="flex-1 text-gray-800 outline-none font-pryFF"
                />
                <LockIcon className="text-lg text-gray-400" />
            </div>
            <button type="button" onClick={closePopup} className="w-full h-10 font-medium text-white transition-colors bg-black rounded-lg hover:bg-gray-800 font-pryFF">
                Sign in
            </button>
            
            <div className="flex items-center justify-center w-full gap-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-gray-500">Or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="rounded-lg shadow-md h-fit w-fit">
                <button className="flex items-center gap-2 px-10 py-2 font-medium text-black transition-colors rounded-lg font-pryFF">
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" />
                    Sign in with Google
                </button>
            </div>
        </form>
    )
}

PopupBox.propTypes = {
    closePopup: PropTypes.func.isRequired,
};
export default PopupBox;