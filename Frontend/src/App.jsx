import React from 'react'
import Temp from './Temp'
import { Login } from './Components/Login'
import { Account } from './Components/Account/Account'
import { Printpage } from "./Components/Paymentpage/Printpage";
import { PersonalDetails } from "./Components/BookTicket/PersonalDetails";

const App = () => {
  return (
    <div className="container">
      <Temp />
      {/* <Printpage /> */}
    </div>
  );
};

export default App