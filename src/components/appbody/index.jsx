import React from 'react';

import colors from '../../constants/colors';

const AppBody = (props) => {
    return (
        <div style={{ 
            position: 'relative',
            padding: '0.25em 2.25em',
            backgroundColor: colors.snowWhite
        }}>
            {props.children}
        </div>
    )
};

export default AppBody;