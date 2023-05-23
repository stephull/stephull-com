import React from 'react';

const FlexRow = ({ children, edits = null }) => {
    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'row',
            ...edits
        }}>
            { children }
        </div>
    )
};

export default FlexRow;