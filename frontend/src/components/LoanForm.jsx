// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import propTypes from 'prop-types';
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
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axios.post('http://localhost:5000/api/loan/', {
            loanType: formData.loanType,
            loanAmount: formData.loanAmount,
            purpose: formData.purpose,
            loanTerm: formData.loanTerm,
            interestRate: formData.interestRate,
            collateral: formData.collateral,
            status: formData.status,
            approvedAmt: formData.approvedAmt
        })
        
        .then((response) => {
            console.log('A loan was requested', response.data)
            addLoan(response.data)
            alert('A loan was requested')
            setFormData({
                loanType: '',
                loanAmount: '',
                purpose: '',
                loanTerm: '',
                interestRate: '',
                collateral: '',
                status: 'Pending',
                approvedAmt: ''
            })
        })

        .catch((error) => {
            console.log('Error requesting loan', error)
            alert(error.response?.data?.message || 'Error requesting loan. Please try again.');
        })
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="w-[600px] h-fit bg-white flex flex-col items-center justify-center gap-4 border border-gray-400 p-6 rounded-md shadow-lg">
            <div className="flex items-center justify-center">
                <h1 className="text-xl font-bold"> Loan Form </h1>
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                    <label htmlFor="loan-type" className="text-sm font-medium" aria-label="loan type">Loan Type</label>
                <input 
                    type="text" 
                    id="loan-type" 
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                    <label htmlFor="loan-amt" className="text-sm font-medium" aria-label="loan amount">Loan Amount</label>
                <input 
                    type="number" 
                    id="loan-amt" 
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                    <label htmlFor="purpose" className="text-sm font-medium" aria-label="purpose">Purpose</label>
                <input 
                    type="text" 
                    id="purpose" 
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="loan-term" className="text-sm font-medium" aria-label="loan term">Loan Term</label>
                <input 
                    type="number" 
                    id="loan-term" 
                    name="loanTerm"
                    placeholder="Years or Months (m/12)"
                    value={formData.loanTerm}
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
            />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="interest-rate" className="text-sm font-medium" aria-label="interest rate">Interest Rate (%)</label>
                <input 
                    type="number" 
                    id="interest-rate" 
                    name="interestRate"
                    value={formData.interestRate}
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
            />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="collateral" className="text-sm font-medium" aria-label="collateral">Collateral</label>
                <input 
                    type="text" 
                    id="collateral" 
                    name="collateral"
                    value={formData.collateral}
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
            />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="status" className="text-sm font-medium" aria-label="status">Status</label>
                <select
                    name="status"
                    id="status"
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Unverified">Unverified</option>
                    <option value="Rejected">Rejected</option>
                </select>    
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                    <label htmlFor="approved-amt" className="text-sm font-medium" aria-label="approved amount">Approved Amount</label>
                <input 
                    type="number" 
                    id="approved-amt" 
                    name="approvedAmt"
                    value={formData.approvedAmt}
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
    )
}

LoanForm.propTypes = {
    addLoan: propTypes.func.isRequired,
}

export default LoanForm;