import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './SearchBus.module.css';
import { TbBus, TbBusStop } from "react-icons/tb";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { OffersCard } from './OffersCard';

export const SearchBus = ({ setFD }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let SearchData = {
      From: from.toUpperCase(),
      To: to.toUpperCase(),
      Date: date
    };
    axios.post("http://localhost:8000/searchbus", SearchData)
      .then((res) => {
        console.log(SearchData);
        setFD(res.data);
        console.log("Data received from server:", res.data);
        navigate('/list'); // Navigate to the list route after setting FD
      })
      .catch((e) => {
        console.log("No Data Available!", e);
      });
  };

  return (
    <div id={style.container}>
      <div className="heading text-center">
        <h3>India's No. 1 Online Bus Ticket Booking Site</h3>
      </div>
      <div className='container-fluid mt-5' id={style.cardcontainer}>
        <div className="card" id={style.card}>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row align-items-center">
                <div className="col-12 col-md-3 mb-3 mb-md-0">
                  <div className="input-group">
                    <div className='icon fs-4 me-3'>
                      <TbBus />
                    </div>
                    <label htmlFor='from' className='form-label me-2'>From</label>
                    <input
                      id={style.forminput}
                      type="text"
                      className='form-control'
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-3 mb-3 mb-md-0">
                  <div className="input-group">
                    <div className='icon fs-4 me-3'>
                      <TbBusStop />
                    </div>
                    <label htmlFor='to' className='form-label me-2'>To</label>
                    <input
                      id={style.forminput}
                      type="text"
                      className='form-control'
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-3 mb-3 mb-md-0">
                  <div className="input-group">
                    <label htmlFor='date' className='form-label me-2'>Date</label>
                    <input
                      id={style.forminput}
                      type="date"
                      className='form-control'
                      placeholder='yyyy-mm-dd'
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="button">
                    <button type="submit" className='btn btn-danger rounded-pill w-100'>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-5" id={style.offerscard}>
        <OffersCard />
      </div>
    </div>
  );
};
