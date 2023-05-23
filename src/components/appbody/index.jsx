import React from 'react';

const AppBody = (props) => {
    return (
        <div style={{ 
            position: 'relative',
            padding: '0.25em 2.25em'
        }}>
            {props.children}
        </div>
    )
};

export default AppBody;