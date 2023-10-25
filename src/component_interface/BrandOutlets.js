import React from "react";
import { Link } from "react-router-dom";

const BrandOutlets = ({ method }) => {
    return (
        <Link className='youlike2-1-2-1'>
            <div className='youlike2-1-2-1-1'><img className='youlike2-1-2-1-1-1' src={method?.src} alt='' /></div>
            <div className='img-th'><img className='img-tha' src={method?.src_child} alt='' /></div>
            <div className='youlike2-1-2-1-2'><div class="youlike2-1-2-1-2-1" style={{ color: 'rgb(238, 78, 46)' }}>{method?.title}</div></div>

        </Link>
    );
};

export default BrandOutlets;