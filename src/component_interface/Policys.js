import React from "react";
import { Link } from "react-router-dom";

const Policys = ({ method }) => {
    return (
        <div className='list-policy1'>
            <Link className='list-policy1-1'>
                <span>{method?.title}</span>
            </Link>
        </div>
    );
};

export default Policys;