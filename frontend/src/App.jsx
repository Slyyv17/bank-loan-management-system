// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import CustomerForm from "./components/CustomerForm";
import CustomerData from "./components/CustomerData";
import LoanForm from "./components/LoanForm";
import LoanData from "./components/LoanData";
import LoanOfficer from "./components/LoanOfficer";
import LoanApplicationForm from "./components/LoanApplicationForm";
import LoanAppData from "./components/LoanAppData";
import RepaymentForm from "./components/RepaymentForm";
import RepaymentData from "./components/RepaymentData";
import LoanOfficerData from "./components/LoanOfficerData";
import Footer from "./components/Footer";
import logo from './assets/img/elevate logo 1.png';
import axios from "axios";

function App() {
    const [customers, setCustomers] = useState([]);
    const [loans, setLoans] = useState([]);
    const [loanOfficers, setLoanOfficers] = useState([]);
    const [loanApps, setLoanApps] = useState([]);
    const [repayments, setRepayments] = useState([]);
    const [activeSection, setActiveSection] = useState("customers");
    
    // State to control showing the main content
    const [showMainContent, setShowMainContent] = useState(false);

    const addCustomer = (newCustomer) => {
        setCustomers([...customers, { ...newCustomer, dob: new Date(newCustomer.dob) }]);
    };

    const addLoan = (newLoan) => setLoans([...loans, newLoan]);
    
    // Fetch all loan officers from the database
    useEffect(() => {
        axios.get('http://localhost:5000/api/loanOfficer')
            .then((response) => {
                setLoanOfficers(response.data); // Update state with the fetched loan officers
            })
            .catch((error) => {
                console.error("Error fetching loan officers:", error);
            });
    }, []);

    // Add a new loan officer to the list
    const addLoanOfficer = (newLoanOfficer) => {
        setLoanOfficers([...loanOfficers, newLoanOfficer]);
    };
    

    // Fetch loan applications from the backend
    const fetchLoanApps = () => {
        axios.get('http://localhost:5000/api/loanApplication') // Replace with your actual endpoint
            .then((response) => {
                setLoanApps(response.data);
            })
            .catch((error) => {
                console.error('Error fetching loan applications:', error);
            });
    };

    useEffect(() => {
        fetchLoanApps();
    }, []);

    // Add a new loan application
    const addLoanApp = (newLoanApp) => {
        setLoanApps((prev) => [...prev, newLoanApp]);
    };

    
    // Fetch repayment data from the backend
  const fetchRepayments = () => {
    axios
      .get('http://localhost:5000/api/repayment') // Replace with your actual endpoint
      .then((response) => {
        setRepayments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching repayments:', error);
      });
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchRepayments();
  }, []);

  // Add a new repayment and refresh the data
  const addRepayment = (newRepayment) => {
    setRepayments((prev) => [...prev, newRepayment]);
    fetchRepayments(); // Optionally refresh the data after adding
  };

    return (
        <div className="flex flex-col items-center gap-5">
            {!showMainContent ? (
                <div className="flex flex-col items-center justify-center h-screen gap-6">
                    <img className="w-64 h-56" src={logo} alt="Fast Loan Logo" />
                    <h1 className="text-4xl font-bold text-center font-pryFF text-pryClr">Elevate: Your Path to Smarter Loans.</h1>
                    <button
                        onClick={() => setShowMainContent(true)}
                        className="px-10 py-2 text-lg font-semibold rounded-md text-mainClr bg-secClr"
                    >
                        Next
                    </button>
                </div>
            ) : (
                <>
                    <div className="flex flex-wrap items-center justify-between w-full p-4 border-b border-gray-300">
                        <img className="w-20 h-20" src={logo} alt="Fast Loan Logo" />
                        <div className="flex flex-wrap mt-3 text-lg font-bold w-fit md:mt-0 font-pryFF">
                            <button
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                    activeSection === "customers"
                                    ? "bg-secClr text-mainClr"
                                    : "text-secClr hover:bg-secClr rounded-full hover:text-mainClr"
                                }`}
                                onClick={() => setActiveSection("customers")}
                            >
                                Customers
                            </button>
                                
                            <button
                                className={`px-10 py-2 rounded-full transition-all duration-300 ${
                                    activeSection === "loans"
                                    ? "bg-secClr text-mainClr"
                                    : "text-secClr hover:bg-secClr rounded-full hover:text-mainClr"
                                }`}
                                onClick={() => setActiveSection("loans")}
                            >
                                Loans
                            </button>
                            
                            <button
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                    activeSection === "loanOfficers"
                                    ? "bg-secClr text-mainClr"
                                    : "text-secClr rounded-full hover:bg-secClr hover:text-mainClr"
                                }`}
                                onClick={() => setActiveSection("loanOfficers")}
                            >
                                Loan Officers
                            </button>
                                
                            <button
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                    activeSection === "loanApplications"
                                    ? "bg-secClr text-mainClr"
                                    : "text-secClr hover:bg-secClr rounded-full hover:text-mainClr"
                                }`}
                                onClick={() => setActiveSection("loanApplications")}
                            >
                                Loan Applications
                            </button>
                                
                            <button
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                    activeSection === "repayments"
                                    ? "bg-secClr text-mainClr"
                                    : "text-secClr hover:bg-secClr rounded-full hover:text-mainClr"
                                }`}
                                onClick={() => setActiveSection("repayments")}
                            >
                                Repayments
                            </button>
                        </div>
                    </div>


                    {activeSection === "customers" && (
                        <div className="flex flex-col items-center justify-center">
                            <CustomerForm addCustomer={addCustomer} />
                            <CustomerData customers={customers} />
                        </div>
                    )}

                    {activeSection === "loans" && (
                        <div className="flex flex-col items-center justify-center">
                            <LoanForm addLoan={addLoan} />
                            <LoanData loans={loans} />
                        </div>
                    )}

                    {activeSection === "loanOfficers" && (
                        <div className="flex flex-col items-center justify-center">
                            <LoanOfficer addLoanOfficer={addLoanOfficer} />
                            <LoanOfficerData loanOfficers={loanOfficers} />
                        </div>
                    )}

                    {activeSection === "loanApplications" && (
                        <div className="flex flex-col items-center justify-center">
                            <LoanApplicationForm addLoanApp={addLoanApp} />
                            <LoanAppData loanApps={loanApps} />
                        </div>
                    )}

                    {activeSection === "repayments" && (
                        <div className="flex flex-col items-center justify-center">
                            <RepaymentForm addRepayment={addRepayment} />
                            <RepaymentData payments={repayments} />
                        </div>
                    )}

                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
