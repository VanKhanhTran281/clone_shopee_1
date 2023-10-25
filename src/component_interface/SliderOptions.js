import React from "react";
import { Link } from "react-router-dom";

const SliderOptions = ({ method }) => {
    return (
        <Link style={{ textDecoration: 'none' }}>
            <div className=''>
                <div className='linktabdiv2'>
                    <div className='linktabdiv3'>
                        <img src={method?.src} alt='' style={{ height: '100%', opacity: '1' }} />
                    </div>

                </div>
                <div className='linktabdiv5'>{method?.title}</div>
            </div>
        </Link>
    );
};

export default SliderOptions;