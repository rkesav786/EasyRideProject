import React from 'react';
import { FaBottleWater } from "react-icons/fa6";
import { PiPlugChargingDuotone } from "react-icons/pi";
import { GiCctvCamera } from "react-icons/gi";
import { PiTelevisionSimpleFill } from "react-icons/pi";

export const FilterComponent = () => {
  return (
    <>
      <div className="container">
        <div className="card mb-3">
          <div className="filter-data">
            <div className="form p-2">
              <form>
                <h6 className="ms-2">BUS TYPES</h6>
                <div className="bus-type mt-3">
                  <div className="form-check ms-2">
                    <input type="checkbox" className="form-check-input" id="ac" />
                    <label htmlFor="ac" className="form-check-label ms-2">AC</label>
                  </div>
                  <div className="form-check ms-2">
                    <input type="checkbox" className="form-check-input" id="non-ac" />
                    <label htmlFor="non-ac" className="form-check-label ms-2">NON-AC</label>
                  </div>
                </div>
                
                <div className="boarding-dropping-point mt-3">
                  <h6 className="ms-2">BOARDING POINT</h6>
                  <div className="ms-2 p-3">
                    <input type="text" className="form-control" placeholder="BOARDING POINT" />
                  </div>
                  <h6 className="ms-2">DROPPING POINT</h6>
                  <div className="ms-2 p-3">
                    <input type="text" className="form-control" placeholder="DROPPING POINT" />
                  </div>
                </div>

                <div className="amenities mt-3">
                  <h6 className="ms-2">AMENITIES</h6>
                  <div className="d-grid gap-2">
                    <button className="btn btn-outline-dark">
                      <FaBottleWater /> <span>Water Bottle</span>
                    </button>
                    <button className="btn btn-outline-dark">
                      <PiPlugChargingDuotone /> Charging Point
                    </button>
                    <button className="btn btn-outline-dark">
                      <GiCctvCamera /> <span>CCTV</span>
                    </button>
                    <button className="btn btn-outline-dark">
                      <PiTelevisionSimpleFill /> <span>Television</span>
                    </button>
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