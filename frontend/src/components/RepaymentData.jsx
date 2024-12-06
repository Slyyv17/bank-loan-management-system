// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const RepaymentData = ({ payments = [] }) => {
  return (
    <div className="pb-4 overflow-x-auto">
      <h1 className="pt-2 pb-1 text-3xl font-bold text-center font-pryFF">Payment Data</h1>
      <table>
        <thead className="bg-gray-100 border-b text-pryClr font-pryFF">
          <tr>
            <th className="px-4 py-2 text-left">Loan ID</th>
            <th className="px-4 py-2 text-left">Payment Date</th>
            <th className="px-4 py-2 text-left">Payment Amount</th>
            <th className="px-4 py-2 text-left">Payment Method</th>
            <th className="px-4 py-2 text-left">Late Penalty</th>
          </tr>
        </thead>
        <tbody className='font-pryFF'>
          {payments.map((payment, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{payment.loanId}</td>
              <td className="px-4 py-2">{new Date(payment.paymentDate).toLocaleDateString()}</td>
              <td className="px-4 py-2">{payment.paymentAmount}</td>
              <td className="px-4 py-2">{payment.paymentMethod}</td>
              <td className="px-4 py-2">{payment.latePenalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

RepaymentData.propTypes = {
  payments: PropTypes.arrayOf(
    PropTypes.shape({
      loanId: PropTypes.string.isRequired,
      paymentDate: PropTypes.string.isRequired,
      paymentAmount: PropTypes.number.isRequired,
      paymentMethod: PropTypes.oneOf(['Bank Transfer', 'Card']),
      latePenalty: PropTypes.number.isRequired,
    })
  ),
};

export default RepaymentData;
