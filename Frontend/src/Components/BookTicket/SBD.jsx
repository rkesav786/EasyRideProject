import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./SBD.module.css";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Payment } from "../Paymentpage/Payment";

export const SBD = ({setTD}) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [insuranceYes, setInsuranceYes] = useState(false);
  const [insuranceNo, setInsuranceNo] = useState(false); 



let PasangerData = (e)=>{
  e.preventDefault();

  
  let PInfo = {
    Username:username,
    Gender:gender,
    Age:age,
    InsuranceYes:insuranceYes,
    InsuranceNo:insuranceNo
  }
  setTD(PInfo)

}







  console.log(data);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/SBD/${id}`)
      .then((response) => {
        console.log("Received data:", response.data);
        setData(response.data);
      })
      .catch((e) => {
        console.log("Error occurred", e);
      });
  }, [id]);

  return (
    <>
      <div className="container p-4 mt-3" id={style.cardcontainer}>
        {data.map((bus, index) => (
          <div className="cardcontainer" id={style.insurencefont} key={index}>
            <h4 className="mt-2 mb-3">Passenger Information</h4>
            <div className="card">
              <div className="card-body p-2">
                <div className="row">
                  <div className="col-12">
                    <span>{bus.Tname}</span>
                  </div>
                </div>
                <div className="row p-3">
                  <div className="buscard d-flex justify-content-between">
                    <div className="boarding col-5">
                      <p className="m-0">{bus.From}</p>
                      <p>{bus.Stime}</p>
                    </div>
                    <div className="col-2 text-center">
                      <span>
                        <IoMdArrowForward />
                        <br />
                        {bus.Date}
                      </span>
                    </div>
                    <div className="dropping col-5 text-end">
                      <p className="m-0 disabled">{bus.To}</p>
                      <p className="m-0">{bus.Etime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="personaldetails" id={style.insurencefont}>
          <h4 className="mt-2 mb-3">Personal Details</h4>
          <div className="card">
            <div className="card-body p-3">
              <form className="form" onSubmit={PasangerData}>
                <div className="mb-3">
                  <label htmlFor="passengerName" className="form-control-label">
                    Passenger 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="passengerName"
                    placeholder="Enter your Name"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <select
                      name="gender"
                      id="gender"
                      onChange={(e) => setGender(e.target.value)}
                      className="form-select"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="age">
                    <label htmlFor="age" className="form-control-label">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      className="form-control"
                      placeholder="Enter Age"
                      required
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                </div>
                <div className="cardinsurence">
                  <h4 className="mt-2 mb-3">Travel Insurance</h4>
                  <div className="card">
                    <div className="card-body">
                      <div className="row p-3">
                        <div className="col-12">
                          <h6 className="text-center" id={style.insurencefont}>
                            Secure your trip at just{" "}
                            <b className="text-danger">RS 15.0</b> per passenger
                          </h6>
                        </div>
                      </div>
                      <div className="row text-center" id={style.insurencefont}>
                        <div className="col-4">
                          <div className="upto5000">
                            <img src="" alt="" />
                            <p className="m-0 text-success">Upto RS 5,000</p>
                            <p className="m-0">In the event of loss luggage</p>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="upto5000">
                            <img src="" alt="" />
                            <p className="m-0 text-success">Upto RS 75,000</p>
                            <p className="m-0">
                              In the event of accidental hospitalisation
                            </p>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="upto5000">
                            <img src="" alt="" />
                            <p className="m-0 text-success">Upto RS 6 Lakh</p>
                            <p className="m-0">In case of death/PTD/PPD</p>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3" id={style.insurencefont}>
                        <div className="col-12">
                          <input
                            type="radio"
                            name="insurance"
                            value="yes"
                            onChange={(e) => {
                              setInsuranceYes(e.target.checked);
                              setInsuranceNo(false);
                            }}
                          />
                          <label className="ms-2" htmlFor="" id={style.font}>
                            Yes, protect my trip at{" "}
                            <b className="text-danger">RS 15</b> (1 passenger),
                            I agree to the{" "}
                            <b className="text-primary">Terms & Conditions</b>
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="insurance"
                            value="no"
                            onChange={(e) => {
                              setInsuranceNo(e.target.checked);
                              setInsuranceYes(false);
                            }}
                          />
                          <label className="ms-2" htmlFor="" id={style.font}>
                            No, I would like to proceed without insurance
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit mt-3">
                  <div className="row border" id={style.insurencefont}>
                    <div className="col-8 mt-3">
                      <div className="amount">
                        <h6>
                          Amount: <b className="text-danger">RS 1000</b>
                        </h6>
                        <p id={style.font}>Tax excluded</p>
                      </div>
                    </div>
                    <div className="col-4 mt-3 d-flex justify-content-end">
                      <Link to="/downloadticket">
                        <input
                          type="submit"
                          value=" Continue To Book"
                          className="btn btn-danger"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
