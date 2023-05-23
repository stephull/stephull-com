import React from 'react';

const FlexColumn = ({ children, edits = null }) => {
    return (
        <div style={{  
            display: 'flex',
            flexDirection: "column",
            ...edits
        }}>
            { children }
        </div>
    )
};

export default FlexColumn;