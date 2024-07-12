import React, { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import "./Printpage.css"; // Assuming you have a CSS file for styles
import { Payment } from "./Payment";
export const Printpage = ({ TD }) => {
  const ticketRef = useRef();

  const downloadTicket = () => {
    html2canvas(ticketRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "ticket.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  useEffect(() => {
    console.log(TD);
  }, [TD]);

  return (
    <>
      <div ref={ticketRef} className="ticket-container">
        <div className="ticket-header">
          <h2>Your Bus Ticket</h2>
        </div>
        <div className="ticket-body">
          <div className="ticket-section">
            <h3>Journey Details</h3>
            <p>
              <strong>Bus Provider:</strong> {TD.BusName}
            </p>
            <p>
              <strong>From:</strong> {TD.StartingPoint}
            </p>
            <p>
              <strong>To:</strong> {TD.EndingPoint}
            </p>
            <p>
              <strong>Journey Date:</strong> {TD.Date}
            </p>
            <p>
              <strong>Departure Time:</strong> {TD.StartTime}
            </p>
            <p>
              <strong>Arrival Time:</strong> {TD.EndTime}
            </p>
            <p>
              <strong>Journey Duration:</strong> 11 hours
            </p>
          </div>
          <div className="ticket-section">
            <h3>Passenger Details</h3>
            <p>
              <strong>Name:</strong> {TD.Username}
            </p>
            <p>
              <strong>Age:</strong> {TD.Age}
            </p>
            <p>
              <strong>Gender:</strong> {TD.Gender}
            </p>
            <p>
              <strong>Phone Number:</strong> 1234567890
            </p>
            <p>
              <strong>Email:</strong> abc@gmail.com
            </p>
            <p>
              <strong>Trip Price:</strong> RS 1000
            </p>
          </div>
        </div>
        <div className="ticket-footer">
          <p>Thank you for choosing EasyRide!</p>
        </div>
      </div>
      <div className="download-button-container">
        <button className="btn btn-primary" onClick={downloadTicket}>
          Download Ticket
        </button>
      </div>

    </>
  );
};
