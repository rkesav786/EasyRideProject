import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JS
import { CiSettings } from "react-icons/ci";
import { VscReferences } from "react-icons/vsc";
import { TbBrandBooking } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Help = () => {
  return (
    <div style={{ backgroundColor: '#d4475b', padding: '20px' }}>
      <div className="row">
        <div className="col-md-4">
          <div className="container">
           <div className="card">
            <div className="card-title mt-4 ms-3">
              <h6 >Other topics</h6>
            </div>
            <div className="body p-2">
              <div className="card ">
              <div className="technical d-flex justify-content-around mt-2">
                <div className="start">
                <CiSettings fontSize={30}/>
                </div>
                <div className="mid" >
                <p className='mb-0'>Technical Issues</p>
                <p >Need som technical helip</p>
                </div>
                <div className="end">
                <MdKeyboardArrowRight />
                </div>
              </div>
              </div>
              <div className="card mt-2">
              <div className="technical d-flex justify-content-around mt-2">
                <div className="start">
                <VscReferences fontSize={30}/>
                </div>
                <div className="mid" >
                <p className='mb-0'>Technical Issues</p>
                <p >Need som technical helip</p>
                </div>
                <div className="end">
                <MdKeyboardArrowRight />
                </div>
              </div>
              </div>
              <div className="card mt-2">
              <div className="technical d-flex justify-content-around mt-2">
                <div className="start">
                <TbBrandBooking fontSize={30}/>
                </div>
                <div className="mid" >
                <p className='mb-0'>Technical Issues</p>
                <p >Need som technical helip</p>
                </div>
                <div className="end">
                <MdKeyboardArrowRight />
                </div>
              </div>
              </div>
              <div className="card mt-2">
              <div className="technical d-flex justify-content-around mt-2">
                <div className="start">
                <BiSolidOffer fontSize={30}/>
                </div>
                <div className="mid" >
                <p className='mb-0'>Technical Issues</p>
                <p >Need som technical helip</p>
                </div>
                <div className="end">
                <MdKeyboardArrowRight />
                </div>
              </div>
              </div>
              <div className="card mt-2">
              <div className="technical d-flex justify-content-around mt-2">
                <div className="start">
                <MdAccountBalanceWallet fontSize={30}/>
                </div>
                <div className="mid" >
                <p className='mb-0'>Technical Issues</p>
                <p >Need som technical helip</p>
                </div>
                <div className="end">
                <MdKeyboardArrowRight />
                </div>
              </div>
              </div>
            </div>
           </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="  d-flex justify-content-center mt-5">
            <img className='img-fluid mt-5'
              src="https://github.com/rkesav786/EasyRideProject/blob/Asstets/helpBgImg.jpg?raw=true"
              alt=""
              style={{ width: '60%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
