// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';

const CustomerForm = ({ addCustomer }) => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        dob: '',
        jobTitle: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumberPattern = /^[+]?[0-9]{10,15}$/; // Improved pattern for phone numbers with country codes

        if (!phoneNumberPattern.test(formData.phoneNumber)) {
            alert('Please enter a valid phone number');
            return;
        }

        axios.post('http://localhost:5000/api/customers/', {
            name: formData.name,
            phoneNumber: formData.phoneNumber,
            dob: new Date(formData.dob),
            jobTitle: formData.jobTitle,
        })
        .then((response) => {
            console.log('Customer added', response.data);
            addCustomer(response.data); // Update state
            alert('Customer added');
            setFormData({ name: '', phoneNumber: '', dob: '', jobTitle: '' }); // Reset form
        })
        .catch((error) => {
            console.log('Error adding customer', error);
            alert('Failed to add customer. Please try again.');
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[600px] h-fit bg-white flex flex-col items-center justify-center gap-4 border border-gray-400 p-6 rounded-md shadow-lg"
        >
            <h1 className="text-xl font-bold">Customer Form</h1>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    required
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="phone-number" className="text-sm font-medium">Phone Number</label>
                <input 
                    type="tel" 
                    id="phone-number" 
                    name="phoneNumber"
                    placeholder="+2348012345678"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="dob" className="text-sm font-medium">Date of Birth</label>
                <input 
                    type="date" 
                    id="dob" 
                    name="dob"
                    value={formData.dob}
                    required
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="job-title" className="text-sm font-medium">Job Title</label>
                <input 
                    type="text" 
                    id="job-title" 
                    name="jobTitle"
                    value={formData.jobTitle}
                    required
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <button 
                type="submit" 
                className="w-full px-6 py-3 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
};

CustomerForm.propTypes = {
    addCustomer: PropTypes.func.isRequired,
};

export default CustomerForm;
