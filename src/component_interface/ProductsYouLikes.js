import React from "react";
import { Link } from "react-router-dom";

const ProductsYouLikes = ({ method }) => {
    return (
        <Link className='youlike2-1-2-1'>
            <div className='youlike2-1-2-1-1'><img className='youlike2-1-2-1-1-1' src={method?.src} alt='' /></div>
            <div className='youlike2-1-2-1-2'><div class="youlike2-1-2-1-2-1" style={{ color: 'rgb(238, 78, 46)' }}>{method?.price}</div></div>
            <div className='youlike2-1-2-1-3'><div class="youlike2-1-2-1-3-1"><span class="youlike2-1-2-1-3-1-1">{method?.discounts}</span></div></div>
        </Link>
    );
};

export default ProductsYouLikes;