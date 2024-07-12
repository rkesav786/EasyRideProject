import React, { useState } from "react";
import { FilterComponent } from "./FilterComponent";
import { Link } from "react-router-dom";
import { FaBottleWater } from "react-icons/fa6";
import { PiPlugChargingDuotone } from "react-icons/pi";
import { GiCctvCamera } from "react-icons/gi";
import { PiTelevisionSimpleFill } from "react-icons/pi";

export const FilterBus = ({ F }) => {
  const [filters, setFilters] = useState({
    water: false,
    charging: false,
    cctv: false,
    television: false,
  });

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters({
      ...filters,
      [name]: checked,
    });
  };

  const applyFilters = () => {
    return F.filter(
      (bus) =>
        (filters.water ? bus.Water : true) &&
        (filters.charging ? bus.Charge : true) &&
        (filters.cctv ? bus.Cctv : true) &&
        (filters.television ? bus.Television : true)
    );
  };

  const filteredBuses = applyFilters();

  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <div className="filter-section">
            <h5>Filter Options</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="water"
                id="water"
                checked={filters.water}
                onChange={handleFilterChange}
              />
              <label className="form-check-label" htmlFor="water">
                Water Bottle
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="charging"
                id="charging"
                checked={filters.charging}
                onChange={handleFilterChange}
              />
              <label className="form-check-label" htmlFor="charging">
                Charging Point
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="cctv"
                id="cctv"
                checked={filters.cctv}
                onChange={handleFilterChange}
              />
              <label className="form-check-label" htmlFor="cctv">
                CCTV
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="television"
                id="television"
                checked={filters.television}
                onChange={handleFilterChange}
              />
              <label className="form-check-label" htmlFor="television">
                Television
              </label>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="container">
            <div className="card-container">
              {filteredBuses.length > 0 ? (
                filteredBuses.map((bus, index) => (
                  <div key={index} className="card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <h6>{bus.Tname}</h6>
                          <p>AC or Non-AC</p>
                          <div>
                            <span className="fs-5 p-1">
                              {bus.Water ? <FaBottleWater /> : ""}
                              {bus.Charge ? <PiPlugChargingDuotone /> : ""}
                              {bus.Cctv ? <GiCctvCamera /> : ""}
                              {bus.Television ? <PiTelevisionSimpleFill /> : ""}
                            </span>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 d-flex">
                          <div className="boarding me-5">
                            <h5>{bus.Stime}</h5>
                            <p className="mt-5">{bus.From}</p>
                          </div>
                          <div className="dropping">
                            <h5>{bus.Etime}</h5>
                            <p>{bus.Date}</p>
                            <p className="mt-3">{bus.To}</p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 d-flex justify-content-between">
                          <div className="badge">
                            <span className="badge bg-success">4.4</span>
                          </div>
                          <div className="price ms-2">
                            <h6>
                              Starting from <br />
                              INR <del>899</del>
                              {bus.Rate}
                            </h6>
                          </div>
                          <div className="book ms-5 mt-4">
                            <Link to={`/SBD/${bus._id}`}>
                              <button className="btn btn-outline-dark">
                                Book
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No buses found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
