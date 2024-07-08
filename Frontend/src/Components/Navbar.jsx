import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import { BsBusFrontFill } from "react-icons/bs";
import { MdTrain } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm" id={style.Navbar}>
        <div className="container-fluid">
          <div className="border-end pe-3">
            <Link to='/bus'>
              <img src="https://raw.githubusercontent.com/rkesav786/EasyRideProject/2d8e75839f1a4f3055201df57298df21e867ea05/logo.svg" alt="" width={85} />
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link id={style.NavLink} className='ms-3' to='/bus'>
                    <BsBusFrontFill fontSize={25} /> Bus Tickets
                  </Link>
                </li>
                <li className="nav-item">
                  <Link id={style.NavLink} className='ms-3' to='/train'>
                    <MdTrain fontSize={29} /> Train Tickets
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-2">
                <Link id={style.NavLink}  to='/help'>
                  <RiCustomerService2Line fontSize={19} /> HELP
                </Link>
              </li>
              <div className="dropdown">
  <li className="nav-item me-2">
    <Link id={style.NavLink} className='dropdown-toggle' to='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <MdManageAccounts fontSize={19} /> ACCOUNT
    </Link>
    <ul className='dropdown-menu' aria-labelledby="navdropdown">
      <li className='dropdown-item'>Show M Ticket</li>
      <li className='dropdown-item'>Cancel Ticket</li>
      <li className='dropdown-item'>Login/Sign in</li>
    </ul>
  </li>
</div>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
