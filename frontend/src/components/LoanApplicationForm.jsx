// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const LoanApplicationForm = ({ addLoanApp }) => {
    const [formData, setFormData] = useState({
        customerId: '',
        loanId: '',
        loanOfficerId: '',
        reviewDate: '',
        status: '',
    }) 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).some(field => !field)) {
            alert('Please fill in all fields before submitting.');
            return;
        }
        axios.post('http://localhost:5000/api/loanApplication', formData)
        .then((response) => {
            console.log('Loan Application submitted', response.data);
            addLoanApp(response.data);
            alert('Loan Application submitted');
            setFormData({ customerId: '', loanId: '', loanOfficerId: '', reviewDate: '', status: '' });
        })
        .catch((error) => {
            console.error('Error submitting loan application:', error);
            alert('Failed to submit loan application. Please try again.');
        });
    };

    return (  
        <div>
            <form
                onSubmit={handleSubmit}
                className="w-[600px] h-fit bg-white flex flex-col items-center justify-center gap-4 border border-gray-400 p-6 rounded-md shadow-lg">
            <div className="flex items-center justify-center">
                <h1 className="text-xl font-bold"> Loan Application Form </h1>
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                    <label htmlFor="customer-id" className="text-sm font-medium">Customer ID</label>
                <input 
                type="text" 
                id="customer-id" 
                    name="customerId"
                    value={formData.customerId}
                onChange={handleChange}    
                className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                    <label htmlFor="loan-id" className="text-sm font-medium">Loan ID</label>
                <input 
                type="text" 
                id="loan-id" 
                    name="loanId"
                        value={formData.loanId}
                    onChange={handleChange}  
                className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                    <label htmlFor="loanOfficer-id" className="text-sm font-medium">Loan Officer ID</label>
                <input 
                type="text" 
                id="loanOfficer-id" 
                    name="loanOfficerId"
                    value={formData.loanOfficerId}
                    onChange={handleChange}  
                className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="review-date" className="text-sm font-medium">Review Date</label>
                <input 
                type="date" 
                id="review-date" 
                    name="reviewDate"
                    value={formData.reviewDate}
                    onChange={handleChange}  
                className="w-full h-10 px-2 text-lg uppercase border border-gray-400 rounded-md focus:outline-blue-500" 
            />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="employment-details" className="text-sm font-medium">Status</label>
                <input 
                type="text" 
                id="status" 
                    name="status"
                    value={formData.status}
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
        </div>
    )
}

LoanApplicationForm.propTypes = {
    addLoanApp: PropTypes.func.isRequired,
};

export default LoanApplicationForm;