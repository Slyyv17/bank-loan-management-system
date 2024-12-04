// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';

const LoanData = ({ loans }) => {
    return (
        <div className="pb-4 overflow-x-auto">
            <h1 className="pt-2 pb-1 text-3xl font-bold text-center"> Loan Data </h1>
            <table>
                <thead className="bg-gray-100 border-b">
                    <tr>
                        <th className="px-4 py-2 text-left">Loan Type</th>
                        <th className="px-4 py-2 text-left">Loan Amount</th>
                        <th className="px-4 py-2 text-left">Purpose</th>
                        <th className="px-4 py-2 text-left">Loan Term</th>
                        <th className="px-4 py-2 text-left">Interest Rate</th>
                        <th className="px-4 py-2 text-left">Collateral</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Approved Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {loans.map((loan, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
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

LoanData.propTypes = {
    loans: PropTypes.arrayOf(
        PropTypes.shape({
            loanType: PropTypes.string.isRequired,
            loanAmount: PropTypes.number.isRequired,
            purpose: PropTypes.string.isRequired,
            loanTerm: PropTypes.number.isRequired,
            interestRate: PropTypes.number.isRequired,
            collateral: PropTypes.string.isRequired,
            status: PropTypes.oneOf(['Pending', 'Approved', 'Unverified', 'Rejected']),
            approvedAmt: PropTypes.number.isRequired,
        })
    ).isRequired
};

export default LoanData;
