import React from 'react';
import { FilterBus } from './FilterBus';

const ShowBus = ({ FD }) => {
  console.log("FD in ShowBus:", FD);

  return (
    <>
      <div className='mt-3'>
        <FilterBus F={FD} />
      </div>
    </>
  );
};

export default ShowBus;
