// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";

const LoanData = () => {
    const [loans, setLoans] = useState([]); // To store fetched loan data
    const [loading, setLoading] = useState(true); // To show loading state
    const [error, setError] = useState(null); // To handle errors

    useEffect(() => {
        // Fetch loan data from the API when the component is mounted
        axios.get('http://localhost:5000/api/loan/')
            .then((response) => {
                setLoans(response.data); // Set loan data
                setLoading(false); // Stop loading
            })
            .catch((err) => {
                console.error('Error fetching loans:', err);
                setError('Failed to load loan data'); // Handle error
                setLoading(false); // Stop loading
            });
    }, []); // Empty dependency array means this runs once when the component mounts

    if (loading) {
        return <div>Loading loan data...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="pb-4 overflow-x-auto">
            <h1 className="pt-2 pb-1 text-3xl font-bold text-center font-pryFF">Loan Data</h1>
            <table className="w-full text-left">
                <thead className="bg-gray-100 border-b text-pryClr font-pryFF">
                    <tr>
                        {['id', 'Loan Type', 'Loan Amount', 'Purpose', 'Loan Term', 'Interest Rate', 'Collateral', 'Status', 'Approved Amount'].map((header, idx) => (
                            <th key={idx} className="px-4 py-2">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="font-pryFF">
                    {loans.map((loan, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{loan.id}</td>
                            <td className="px-4 py-2">{loan.loanType}</td>
                            <td className="px-4 py-2">{loan.loanAmount}</td>
                            <td className="px-4 py-2">{loan.purpose}</td>
                            <td className="px-4 py-2">{loan.loanTerm}</td>
                            <td className="px-4 py-2">{loan.interestRate}</td>
                            <td className="px-4 py-2">{loan.collateral}</td>
                            <td className="px-4 py-2">{loan.status}</td>
                            <td className="px-4 py-2">{loan.approvedAmt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LoanData;
