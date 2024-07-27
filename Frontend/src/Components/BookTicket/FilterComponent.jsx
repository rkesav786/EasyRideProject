import React, { useState } from "react";
import { FaBottleWater } from "react-icons/fa6";
import { PiPlugChargingDuotone } from "react-icons/pi";
import { GiCctvCamera } from "react-icons/gi";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import axios from "axios";

export const FilterComponent = () => {
  const [ac, setAc] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [water, setWater] = useState(false);
  const [charge, setCharge] = useState(false);
  const [cctv, setCctv] = useState(false);
  const [television, setTelevision] = useState(false);

  const handleFilterData = (e) => {
    e.preventDefault();
    // Handle form submission
    // console.log({ ac, from, to, water, charge, cctv, television });
    let FilterData = {
      Fac: ac,
      Ffrom: from.toUpperCase(),
      Fto: to.toUpperCase(),
      Fwater: water,
      Fcharge: charge,
      Fcctv: cctv,
      Ftelevision: television,
    };
    axios
      .post("https://easyrideproject.onrender.com/fillterbus", FilterData)
      .then(() => {
        console.log("data posted");
      })
      .catch(() => {
        console.log("data isn't posted");
      });
  };

  return (
    <>
      <div className="container">
        <div className="card mb-3">
          <div className="filter-data">
            <div className="form p-2">
              <form onSubmit={handleFilterData}>
                <h6 className="ms-2">BUS TYPES</h6>
                <div className="bus-type mt-3">
                  <div className="form-check ms-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="ac"
                      onChange={(e) => setAc(e.target.checked)}
                    />
                    <label htmlFor="ac" className="form-check-label ms-2">
                      AC
                    </label>
                  </div>
                  <div className="form-check ms-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="non-ac"
                      onChange={(e) => setAc(!e.target.checked)}
                    />
                    <label htmlFor="non-ac" className="form-check-label ms-2">
                      NON-AC
                    </label>
                  </div>
                </div>

                <div className="boarding-dropping-point mt-3">
                  <h6 className="ms-2">BOARDING POINT</h6>
                  <div className="ms-2 p-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="BOARDING POINT"
                      onChange={(e) => setFrom(e.target.value)}
                    />
                  </div>
                  <h6 className="ms-2">DROPPING POINT</h6>
                  <div className="ms-2 p-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="DROPPING POINT"
                      onChange={(e) => setTo(e.target.value)}
                    />
                  </div>
                </div>

                <div className="amenities mt-3">
                  <h6 className="ms-2">AMENITIES</h6>
                  <div className="d-grid gap-2">
                    <div className="form-check ms-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="water"
                        checked={water}
                        onChange={() => setWater(!water)}
                      />
                      <label htmlFor="water" className="form-check-label ms-2">
                        <FaBottleWater /> <span>Water Bottle</span>
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="charge"
                        checked={charge}
                        onChange={() => setCharge(!charge)}
                      />
                      <label htmlFor="charge" className="form-check-label ms-2">
                        <PiPlugChargingDuotone /> Charging Point
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="cctv"
                        checked={cctv}
                        onChange={() => setCctv(!cctv)}
                      />
                      <label htmlFor="cctv" className="form-check-label ms-2">
                        <GiCctvCamera /> <span>CCTV</span>
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="television"
                        checked={television}
                        onChange={() => setTelevision(!television)}
                      />
                      <label
                        htmlFor="television"
                        className="form-check-label ms-2"
                      >
                        <PiTelevisionSimpleFill /> <span>Television</span>
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                  Apply Filters
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
