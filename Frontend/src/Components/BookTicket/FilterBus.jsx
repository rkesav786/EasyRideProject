import React from 'react';
import { FilterComponent } from './FilterComponent';

export const FilterBus = ({ F }) => {
  console.log("F in FilterBus:", F);

  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <FilterComponent />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="container">
            <div className="card-container">
              {F.length > 0 ? (
                F.map((bus, index) => (
                  <div key={index} className="card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <h6>{bus.Tname}</h6>
                          <p>AC or Non-AC</p>
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
                            <h6>Starting from <br />INR <del>899</del>{bus.Rate}</h6>
                          </div>
                          <div className="book ms-5 mt-4">
                            <button className="btn btn-outline-dark">Book</button>
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
