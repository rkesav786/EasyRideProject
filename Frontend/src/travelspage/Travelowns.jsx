import React, { useState } from 'react';
import { FaBottleWater } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { PiPlugChargingDuotone } from "react-icons/pi";
import { GiCctvCamera } from "react-icons/gi";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import axios from "axios";

export const Travelowns = () => {
  let [name, setName] = useState("");
  let [from, setFrom] = useState("");
  let [to, setTo] = useState("");
  let [date, setDate] = useState("");
  let [stime, setStime] = useState("");
  let [etime, setEtime] = useState("");
  let [rate, setRate] = useState("");

  let [water, setWater] = useState(false);
  let [ac, setAc] = useState(false);
  let [charge, setCharge] = useState(false);
  let [cctv, setCctv] = useState(false);
  let [television, setTelevision] = useState(false);

  let HandleBAD = (event) => {
    event.preventDefault();
    let OABD = {
      Tname: name,
      From: from,
      To: to,
      Date: date,
      Stime: stime,
      Etime: etime,
      Rate: rate,
      Water: water,
      Ac: ac,
      Charge: charge,
      Cctv: cctv,
      Television: television
    };

    axios.post("http://localhost:8000/addbus", OABD)
      .then(() => {
        console.log("Data Posted");
      })
      .catch((e) => {
        console.log("Data Posted Failed!", e);
      });
  };

  return (
    <>
      <div className="container">
        <div className="form p-4 border">
          <form onSubmit={HandleBAD}>
            <h1>Available buses</h1>
            <div className="transpot-name mt-5">
              <label>Transport Name</label>
              <input type="text" className='form-control' id='name' onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className="input-from mt-2">
              <label>From</label>
              <input type="text" className='form-control' id='from' onChange={(e) => { setFrom(e.target.value) }} />
            </div>
            <div className="input-to mt-2">
              <label>To</label>
              <input type="text" className='form-control' id='to' onChange={(e) => { setTo(e.target.value) }} />
            </div>
            <div className="input-to mt-2">
              <label>Date</label>
              <input type="date" className='form-control' id='date' onChange={(e) => { setDate(e.target.value) }} />
            </div>
            <div className="timecontainer mt-2 d-flex">
              <div className="input-to">
                <label>Start time</label>
                <input type="time" className='form-control' id='time' onChange={(e) => { setStime(e.target.value) }} />
              </div>
              <div className="input-to ms-3">
                <label>End time</label>
                <input type="time" className='form-control' id='time' onChange={(e) => { setEtime(e.target.value) }} />
              </div>
            </div>
            <div className="timecontainer mt-2 d-flex">
              <div className="input-to">
                <label>Rate</label>
                <input type="number" className='form-control' id='price' onChange={(e) => { setRate(e.target.value) }} />
              </div>
            </div>
            <div className="checkbox d-flex mt-2">
              <div className="water">
                <input className="form-check-input" type="checkbox" id="defaultCheck1" onChange={(e) => { setWater(e.target.checked) }} />
                <label className="form-check-label"><FaBottleWater /></label>
              </div>
              <div className="water ms-2">
                <input className="form-check-input" type="checkbox" id="defaultCheck2" onChange={(e) => { setAc(e.target.checked) }} />
                <label className="form-check-label"><TbAirConditioning /></label>
              </div>
              <div className="water ms-2">
                <input className="form-check-input" type="checkbox" id="defaultCheck3" onChange={(e) => { setCharge(e.target.checked) }} />
                <label className="form-check-label"><PiPlugChargingDuotone /></label>
              </div>
              <div className="water ms-2">
                <input className="form-check-input" type="checkbox" id="defaultCheck4" onChange={(e) => { setCctv(e.target.checked) }} />
                <label className="form-check-label"><GiCctvCamera /></label>
              </div>
              <div className="water ms-2">
                <input className="form-check-input" type="checkbox" id="defaultCheck5" onChange={(e) => { setTelevision(e.target.checked) }} />
                <label className="form-check-label"><PiTelevisionSimpleFill /></label>
              </div>
            </div>
            <div className="button mt-3">
              <button className='btn btn-danger w-100' type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
