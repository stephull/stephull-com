import React, { useState } from 'react';
import colors from '../../constants/colors';

const DownloadButton = ({ name, onClick }) => {
    const [hover, setHover] = useState(false);

    return (
        <button
            onClick={onClick}
            style={{
                fontSize: '18px',
                fontWeight: 'bold',
                backgroundColor: colors.herbalGreen,
                color: colors.jetBlack,
                cursor: hover ? 'pointer' : 'none',
                padding: '0.5em',
                margin: '0.5em',
                width: 'fit-content'
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            Download {name}
        </button>
    )
}

export default DownloadButton;