import React from 'react';
import style from './OffersCard.module.css';

export const OffersCard = () => {
  const carddata = [
    {
      img: 'https://raw.githubusercontent.com/rkesav786/EasyRideProject/2d8e75839f1a4f3055201df57298df21e867ea05/offerscard1.webp',
      badge: 'BUS',
      offername: 'Save up to RS250 on bus tickets',
      valid: 'Valid till 01 Aug',
      coupen: 'FIRST'
    },
    {
      img: 'https://raw.githubusercontent.com/rkesav786/EasyRideProject/2d8e75839f1a4f3055201df57298df21e867ea05/offerscard1.webp',
      badge: 'BUS',
      offername: 'Save up to RS250 on bus tickets',
      valid: 'Valid till 01 Aug',
      coupen: 'FIRST'
    },
    {
      img: 'https://raw.githubusercontent.com/rkesav786/EasyRideProject/2d8e75839f1a4f3055201df57298df21e867ea05/offerscard1.webp',
      badge: 'BUS',
      offername: 'Save up to RS250 on bus tickets',
      valid: 'Valid till 01 Aug',
      coupen: 'FIRST'
    },
    {
      img: 'https://raw.githubusercontent.com/rkesav786/EasyRideProject/2d8e75839f1a4f3055201df57298df21e867ea05/offerscard1.webp',
      badge: 'BUS',
      offername: 'Save up to RS250 on bus tickets',
      valid: 'Valid till 01 Aug',
      coupen: 'FIRST'
    }
  ];

  const backgroundClasses = [style.class1, style.class2, style.class3, style.class4];

  return (
    <>
      <div className="container rounded-pill">
        <div className="card p-3">
          <h1 className='mt-3'>TRENDING OFFERS</h1>
          <div className="row container mt-3">
            {carddata.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
                <div className={`card ${backgroundClasses[index % backgroundClasses.length]}`} id={style.card}>
                  <div>
                    <div className="d-flex">
                      <div className="image mt-5 ms-1">
                        <img className='img-fluid rounded-pill' src={item.img} alt="" />
                      </div>
                      <div className="offers ms-3 p-3">
                        <span className='badge bg-secondary rounded-pill'>{item.badge}</span>
                        <h5>{item.offername}</h5>
                        <p>{item.valid}</p>
                        <span className='badge bg-secondary'>{item.coupen}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
