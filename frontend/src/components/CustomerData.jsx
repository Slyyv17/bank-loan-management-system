// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';

const CustomerData = () => {
    const [customers, setCustomers] = useState([]); // To store fetched customer data
    const [loading, setLoading] = useState(true); // To show loading state
    const [error, setError] = useState(null); // To handle errors

    useEffect(() => {
        // Fetch customer data from the API when the component is mounted
        axios.get('http://localhost:5000/api/customers')
            .then((response) => {
                setCustomers(response.data); // Set customer data
                setLoading(false); // Stop loading
            })
            .catch((err) => {
                console.error('Error fetching customers:', err);
                setError('Failed to load customer data'); // Handle error
                setLoading(false); // Stop loading
            });
    }, []); // Empty dependency array means this runs once when the component mounts

    if (loading) {
        return <div>Loading customer data...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="pb-4 overflow-x-auto">
            <h1 className="pt-2 pb-1 text-3xl font-bold text-center font-pryFF"> Customers Data</h1>
            <table className="w-[1000px] bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100 border-b text-pryClr font-pryFF">
                    <tr>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Contact Info </th>
                        <th className="px-4 py-2 text-left">Date of Birth</th>
                        <th className="px-4 py-2 text-left">Job Title</th>
                    </tr>
                </thead>
                <tbody className='font-pryFF'>
                    {customers.map((customer, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{customer.id}</td>
                            <td className="px-4 py-2">{customer.name}</td>
                            <td className="px-4 py-2">{customer.phoneNumber}</td>
                            <td className="px-4 py-2">{customer.dob instanceof Date 
                                ? customer.dob.toLocaleDateString() 
                                : new Date(customer.dob).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-2">{customer.jobTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

CustomerData.propTypes = {
    customers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string.isRequired,
            dob: PropTypes.instanceOf(Date).isRequired,
            jobTitle: PropTypes.string.isRequired,
        })
    )
};

export default CustomerData;
