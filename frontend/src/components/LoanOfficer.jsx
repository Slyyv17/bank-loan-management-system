// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const LoanOfficer = ({addLoanOfficer}) => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/api/loanOfficer', {
            name: formData.name,
            phoneNumber: formData.phoneNumber,
        })
            .then((response) => {
                console.log('Loan Officer added', response.data)
                addLoanOfficer(response.data);
                alert('Loan Officer added');
                setFormData({id: '', name: '', phoneNumber: '' });
            })
        
            .catch((error) => {
                console.log('Error adding Loan officer', error)
                alert('Failed to add Loan officer. Please try again')
            });
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="w-[600px] font-pryFF h-fit bg-white flex flex-col items-center justify-center gap-4 border border-gray-400 p-6 rounded-md shadow-lg"
        >
            <h1 className="text-xl font-bold">Loan Officer Form</h1>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="name" className="text-sm font-medium">Fullname</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    required
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-secClr" 
                />
            </div>

            <div className="flex flex-col items-start justify-center w-full gap-2">
                <label htmlFor="phone-number" className="text-sm font-medium">Contact Info</label>
                <input 
                    type="tel" 
                    id="phone-number" 
                    name="phoneNumber"
                    placeholder="+2348012345678"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full h-10 px-2 text-lg border border-gray-400 rounded-md focus:outline-secClr" 
                />
            </div>
            
            <button 
                type="submit" 
                className="w-full px-6 py-3 mt-4 text-lg font-semibold cursor-pointer rounded-xl text-mainClr bg-secClr"
            >
                Submit
            </button>
        </form>
    )
}
LoanOfficer.propTypes = {
    addLoanOfficer: PropTypes.func.isRequired,
};

export default LoanOfficer;