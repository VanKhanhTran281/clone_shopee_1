import React from "react";
import { Link } from "react-router-dom";

const FollowOns = ({ method }) => {
    return (
        <li className='footer-linkweb1'>
            <Link className='footer-linkweb1-1'>
                <img className='footer-linkweb1-1-1' src={method?.src} alt='' />
                <span className='footer-linkweb1-1-2 hoverr'>{method?.title}</span>
            </Link>
        </li>
    );
};

export default FollowOns;