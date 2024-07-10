import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { SearchTrain } from './Components/Trainpage/SearchTrain';
import { Help } from './Components/Helppage/Help';
import { Account } from './Components/Account/Account';
import { Travelowns } from './travelspage/Travelowns';
import ShowBus from './Components/BookTicket/ShowBus';
import { SearchBus } from './Components/Buspage/SearchBus';
import Footer from './Components/Footer';
import { SBD } from "./Components/BookTicket/SBD";

const Temp = () => {
  const [FD, setFD] = useState([]);
  console.log(FD);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/bus" element={<SearchBus setFD={setFD} />} />
        <Route path="/train" element={<SearchTrain />} />
        <Route path="/help" element={<Help />} />
        <Route path="/account" element={<Account />} />
        <Route path="/travelowns" element={<Travelowns />} />
        <Route path="/list" element={<ShowBus FD={FD} />} />
        <Route path="/SBD/:id" element={<SBD />} />
      </Routes>
      <div className="mt-3">
        <Footer />
      </div>
    </Router>
  );
};

export default Temp;
