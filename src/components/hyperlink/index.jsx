import React, { useState } from 'react';
import colors from "../../constants/colors";

const Hyperlink = ({ url, children, edits = null }) => {
    const [hover, setHover] = useState(false);

    return (
        <div 
            style={{
                padding: '0 1em',
                color: hover ? colors.skyBlue : colors.snowWhite,
                textDecoration: 'underline',
                cursor: hover ? 'pointer' : 'none'
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => window.open(url, '_blank')}
        >
            <span style={{
                fontWeight: 'bold',
                ...edits
            }}>
                { children }
            </span>
        </div>
    )
};

export default Hyperlink;