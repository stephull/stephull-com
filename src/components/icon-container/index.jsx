import React from 'react';

const IconContainer = ({ 
    children, interact = false, event = null, edits = null 
}) => {
    const [hover, setHover] = React.useState(false);

    return (
        <div 
            onClick={event} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ 
                cursor: hover && interact ? 'pointer' : 'normal',
                padding: '0.25em',
                ...edits
            }}
        >
            {children}
        </div>
    );
};

export default IconContainer;