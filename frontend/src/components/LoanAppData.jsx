// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const LoanAppData = ({ loanApps }) => {
    if (!loanApps || loanApps.length === 0) {
        return (
            <div className="pt-4 text-center">
                <p className="text-lg text-gray-500">No loan applications available.</p>
            </div>
        );
    }

    return (
        <div className="pb-4 overflow-x-auto">
            <h1 className="pt-2 pb-1 text-3xl font-bold text-center font-pryFF">Loan Applications</h1>
            <table className="w-full border-collapse">
                <thead className="bg-gray-100 border-b text-pryClr font-pryFF">
                    <tr>
                        <th className="px-4 py-2 text-left">Customer ID</th>
                        <th className="px-4 py-2 text-left">Loan ID</th>
                        <th className="px-4 py-2 text-left">Loan Officer ID</th>
                        <th className="px-4 py-2 text-left">Review Date</th>
                        <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody className="font-pryFF">
                    {loanApps.map((loanApp, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{loanApp.customerId}</td>
                            <td className="px-4 py-2">{loanApp.loanId}</td>
                            <td className="px-4 py-2">{loanApp.loanOfficerId}</td>
                            <td className="px-4 py-2">{loanApp.reviewDate}</td>
                            <td className="px-4 py-2">{loanApp.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

LoanAppData.propTypes = {
    loanApps: PropTypes.array.isRequired,
};

export default LoanAppData;
