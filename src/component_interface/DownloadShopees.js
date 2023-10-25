import React from "react";
import { Link } from "react-router-dom";

const DownloadShopees = ({ method }) => {
    return (
        <Link className='footer-dowload2-1'>
            <img className='footer-dowload2-1-1' src={method?.src} alt='' />
        </Link>
    );
};

export default DownloadShopees;