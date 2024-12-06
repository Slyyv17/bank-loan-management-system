// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const RepaymentForm = ({ addRepayment }) => {
   const [formData, setFormData] = useState({
    loanId: '',
    paymentDate: '',
    paymentAmount: '',
    paymentMethod: '',
    latePenalty: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const {paymentDate, paymentAmount, paymentMethod } = formData;
    if (!paymentDate || !paymentAmount || !paymentMethod) {
      setError('Please fill in all required fields.');
      return;
    }

    setError(''); // Clear any existing errors

    axios
      .post('http://localhost:5000/api/repayment', formData)
      .then((response) => {
        console.log('You repaid your loan', response);
        alert('Repayment submitted');
        addRepayment(response.data);
        setFormData({
          loanId: '',
          paymentDate: '',
          paymentAmount: '',
          paymentMethod: '',
          latePenalty: '',
        });
      })
      .catch((error) => {
        console.error('Error sending repayment', error);
        alert('Error processing repayment. Please try again.');
        setError(error.response?.data?.message || 'Error processing repayment. Please try again.');
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] font-pryFF h-fit bg-white flex flex-col items-center justify-center gap-4 border border-gray-400 p-6 rounded-md shadow-lg"
    >
      <h1 className="text-xl font-bold">Repayment Form</h1>

      {error && <p className="text-red-500">{error}</p>}
    
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
      {/* Payment Date */}
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="payment-date" className="text-sm font-medium">
          Payment Date
        </label>
        <input
          type="date"
          id="payment-date"
          name="paymentDate"
          value={formData.paymentDate}
          className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-secClr"
          onChange={handleChange}
          required
        />
      </div>

      {/* Payment Amount */}
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="payment-amt" className="text-sm font-medium">
          Payment Amount
        </label>
        <input
          type="number"
          id="payment-amt"
          name="paymentAmount"
          value={formData.paymentAmount}
          className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-secClr"
          onChange={handleChange}
          required
        />
      </div>

      {/* Payment Method */}
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="payment-method" className="text-sm font-medium">
          Payment Method
        </label>
        <select
          name="paymentMethod"
          id="payment-method"
          value={formData.paymentMethod}
          className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-secClr"
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="bank_transfer">Bank Transfer</option>
          <option value="card">Card</option>
        </select>
      </div>

      {/* Late Penalty */}
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="late-penalty" className="text-sm font-medium">
          Late Penalty
        </label>
        <input
          type="number"
          id="late-penalty"
          name="latePenalty"
          value={formData.latePenalty}
          className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-secClr"
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 mt-4 text-lg font-semibold rounded-xl text-mainClr bg-secClr"
      >
        Submit
      </button>
    </form>
  );
};

RepaymentForm.propTypes = {
  addRepayment: PropTypes.func.isRequired,
};

export default RepaymentForm;
