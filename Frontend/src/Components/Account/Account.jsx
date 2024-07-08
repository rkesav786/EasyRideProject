import React from 'react'
import style from './Account.module.css'
import { PiTicketLight } from "react-icons/pi";

export const Account = () => {
  return (
    <div className={`container ${style.container}`} id={style.container}>
      <div className="row text-center">
        <div className="col-12">
          <h3 className='mt-5'>PRINT TICKET</h3>
          <h6 className='mt-3'>Verify your details, and Print your tickets</h6>
        </div>
      </div>
      <div className="row justify-content-between mt-4">
        <div className="col-4">
          <div className="form-group">
            <label htmlFor="ticketNumber" className='form-control-label'>TICKET NUMBER</label>
            <div className="input-group">
              <input type="text" className="form-control" id="ticketNumber" placeholder="Enter your ticket number" />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit"><PiTicketLight /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label htmlFor="mobileNumber" className='form-control-label'>MOBILE NUMBER</label>
            <div className="input-group">
              <input type="text" className="form-control" id="mobileNumber" placeholder="Enter your mobile number" />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit">+91</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex align-items-end">
          <button className="btn btn-danger w-100">SEARCH</button>
        </div>
      </div>
    </div>
  )
}
