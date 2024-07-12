import React, { useEffect } from "react";

export const Printpage = ({ TD }) => {
  console.log(TD);
  return (
    <>
      <div
        className="card"
        style={{ border: "dotted", fontFamily: "monospace" }}
      >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Your Ticket</h5>
        </div>
        <div className="card-body d-flex">
          <div className="bookingdetails ms-5">
            <p>Bus provider: Lion transport</p>
            <p>Start From: Chennai</p>
            <p>To: Tenkasi</p>
            <p>Journey Date: xx.yy.zzzz</p>
            <p>Arrival time: 07.00 pm</p>
            <p>Departure time: 06.00 am</p>
            <p>Journey time: 11 hours</p>
          </div>

          <div className="passengerdetails ms-5">
            <p>Passenger Name: Kesavan R</p>
            <p>Age: 22</p>
            <p>Gender: Male</p>
            <p>Phone number: 1234567890</p>
            <p>Email: abc@gmail.com</p>
            <p>Trip price: RS 1000</p>
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-primary">Download Ticket</button>
      </div>
    </>
  );
};
