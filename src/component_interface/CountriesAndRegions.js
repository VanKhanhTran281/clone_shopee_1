import React from "react";
import { Link } from "react-router-dom";

const CountriesAndRegions = ({ method }) => {
  return (
    <div className='customer-care2-2-2'>
        <Link className='customer-care2-2-2-1'>{method?.title}</Link>
    </div>
  );
};

export default CountriesAndRegions;