import React from "react";
import { Link } from "react-router-dom";

const PaymentMethod = ({ method }) => {
  return (
    <li className="customer-thanhtoan2-1">
      <Link className="customer-thanhtoan2-1-1">
        <img src={method?.image} alt="" />
      </Link>
    </li>
  );
};

export default PaymentMethod;