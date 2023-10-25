import React from "react";
import { Link } from "react-router-dom";

const NavbarProducts = ({ method }) => {
  return (
    <>
        <Link className='space' style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} to={method?.to}>
            {method?.title}
        </Link>                
    </>
  );
};

export default NavbarProducts;