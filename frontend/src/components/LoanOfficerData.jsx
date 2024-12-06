// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';

const LoanOfficerData = ({loanOfficers}) => {
    return (
        <div className="pb-4 overflow-x-auto">
            <h1 className="pt-2 pb-1 text-3xl font-bold text-center font-pryFF"> Loan Officers Data</h1>
            <table className="w-[800px] bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100 border-b text-pryClr font-pryFF">
                    <tr>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Fullname</th>
                        <th className="px-4 py-2 text-right">Contact Info </th>
                    </tr>
                </thead>
                <tbody className='font-pryFF'>
                    {loanOfficers.map((loanOfficers, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{loanOfficers.id}</td>
                            <td className="px-4 py-2">{loanOfficers.name}</td>
                            <td className="px-4 py-2 text-right">{loanOfficers.phoneNumber}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
LoanOfficerData.propTypes = {
    loanOfficers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default LoanOfficerData;