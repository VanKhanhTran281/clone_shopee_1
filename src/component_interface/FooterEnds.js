import React from "react";

const FooterEnds = ({ method }) => {
    return (
        <div style={{ display: 'block', width: '100%', textAlign: 'center', marginTop: '0.5rem' }} >
            {method?.title}
        </div>
    );
};

export default FooterEnds;