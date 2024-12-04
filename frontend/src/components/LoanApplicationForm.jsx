// eslint-disable-next-line no-unused-vars
import React from "react";

const LoanApplicationForm = () => {
    return (
        <div>
            <form className="w-[600px] h-fit bg-white flex flex-col items-center justify-center gap-4 border border-gray-400 p-6 rounded-md shadow-lg">
            <div className="flex items-center justify-center">
                <h1 className="text-xl font-bold"> Loan Application Form </h1>
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                    <label htmlFor="customer-id" className="text-sm font-medium">Customer ID</label>
                <input 
                type="text" 
                id="customer-id" 
                name="customer-id"
                className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                    <label htmlFor="loan-id" className="text-sm font-medium">Loan ID</label>
                <input 
                type="text" 
                id="loan-id" 
                name="loan-id"
                className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                    <label htmlFor="loanOfficer-id" className="text-sm font-medium">Loan Officer ID</label>
                <input 
                type="text" 
                id="loanOfficer-id" 
                name="loanOfficer-id"
                className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="name" className="text-sm font-medium">Fullname</label>
                <input 
                type="text" 
                id="name" 
                name="name"
                className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
            />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="phone-number" className="text-sm font-medium">Phone Number</label>
                <input 
                type="tel" 
                id="phone-number" 
                name="phoneNumber"
                className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-blue-500" 
            />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="dob" className="text-sm font-medium">Review Date</label>
                <input 
                type="date" 
                id="review-date" 
                name="review-date"
                className="w-full h-10 px-2 text-lg uppercase border border-gray-400 rounded-md focus:outline-blue-500" 
            />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="employment-details" className="text-sm font-medium">Status</label>
                <input 
                type="text" 
                id="status" 
                name="status"
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

export default LoanApplicationForm;