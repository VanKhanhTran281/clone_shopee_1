import React from "react";
import { Link } from "react-router-dom";

const CustomerCare = ({ method }) => {
  return (
    <li className='customer-care1-1-2-1'>
        <Link className='customer-care1-1-2-1-1'>
            <span className='customer-care1-1-2-1-1-1 hoverr'>{method?.title}</span>
        </Link>
    </li>
  );
};

export default CustomerCare;