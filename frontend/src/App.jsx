// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import CustomerForm from "./components/CustomerForm";
import LoanApplicationForm from "./components/LoanApplicationForm";
// import LoanForm from "./components/LoanForm";
import CustomerData from "./components/CustomerData";

function App() {
    const [customers, setCustomers] = useState([]);

    const addCustomer = (newCustomer) => {
    // Ensure dob is converted to a Date object
    const formattedCustomer = {
      ...newCustomer,
      dob: new Date(newCustomer.dob), // Convert dob to a Date object
    };

    setCustomers([...customers, formattedCustomer]);
  };

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex flex-col items-center justify-start gap-4 p-2">
                <CustomerForm addCustomer={addCustomer} />
                <LoanApplicationForm />
                {/* <LoanForm /> */}
            </div>
            <div>
                <CustomerData customers={customers} />
            </div>
        </div>
    );
}

export default App;
