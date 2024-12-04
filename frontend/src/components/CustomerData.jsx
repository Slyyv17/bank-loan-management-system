// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"

const CustomerData = ({ customers }) => {
    return (
        <div className="pb-4 overflow-x-auto">
            <h1 className="pt-2 pb-1 text-3xl font-bold text-center"> Customers Data</h1>
            <table className="w-[1000px] bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100 border-b">
                    <tr>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Phone Number </th>
                        <th className="px-4 py-2 text-left">Date of Birth</th>
                        <th className="px-4 py-2 text-left">Job Title</th>
                    </tr>
                </thead>
                <tbody>
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
    )
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
}

export default CustomerData;