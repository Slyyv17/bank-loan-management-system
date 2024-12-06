// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';

const LoanForm = ({ addLoan }) => {
    const [formData, setFormData] = useState({
        loanType: '',
        loanAmount: '',
        purpose: '',
        loanTerm: '',
        interestRate: '',
        collateral: '',
        status: 'Pending',
        approvedAmt: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/loan/', formData)
            .then((response) => {
                console.log('Loan requested successfully:', response.data);
                addLoan(response.data); // Pass new loan data to parent
                alert('Loan request submitted');
                setFormData({
                    id: '',
                    loanType: '',
                    loanAmount: '',
                    purpose: '',
                    loanTerm: '',
                    interestRate: '',
                    collateral: '',
                    status: 'Pending',
                    approvedAmt: ''
                });
            })
            .catch((error) => {
                console.error('Error requesting loan:', error);
                alert(error.response?.data?.message || 'Error requesting loan. Please try again.');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="w-[600px] font-pryFF h-fit bg-white flex flex-col items-center justify-center gap-4 border border-gray-400 p-6 rounded-md shadow-lg">
            <div className="flex items-center justify-center">
                <h1 className="text-xl font-bold">Loan Form</h1>
            </div>

            {['loanType', 'loanAmount', 'purpose', 'loanTerm', 'interestRate', 'collateral', 'approvedAmt'].map((field, idx) => (
                <div key={idx} className="flex flex-col items-start justify-center w-full gap-2">
                    <label htmlFor={field} className="text-sm font-medium">{field.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
                    <input
                        type={field === 'loanAmount' || field === 'loanTerm' || field === 'interestRate' || field === 'approvedAmt' ? 'number' : 'text'}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-secClr"
                    />
                </div>
            ))}

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="status" className="text-sm font-medium">Status</label>
                <select
                    name="status"
                    id="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-secClr"
                >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Unverified">Unverified</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>

            <button type="submit" className="w-full px-6 py-3 mt-4 text-lg font-semibold cursor-pointer rounded-xl text-mainClr bg-secClr">
                Submit
            </button>
        </form>
    );
};

LoanForm.propTypes = {
    addLoan: PropTypes.func.isRequired,
};

export default LoanForm;
