import React, { useState } from 'react';

import FlexRow from '../flex-row';
import colors from '../../constants/colors';

const HyperLinkButton = ({ name, url, color = null, hoverColor = null }) => {
  const [hover, setHover] = useState(false);

  const goToWindow = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={goToWindow}
      style={{
        fontSize: '14px',
        backgroundColor: color && hoverColor
          ? (!hover ? color : hoverColor)
          : (!hover ? colors.brightBlue : colors.seaBlue),
        border: `1px solid ${colors.jetBlack}`,
        padding: '0.5em',
        margin: '0.25em',
        color: colors.snowWhite,
        cursor: hover ? 'pointer' : 'none'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FlexRow>
        <svg height='20' width='20' style={{ 
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <polygon points="14,8 0,16, 0,0" fill={colors.snowWhite} />
        </svg>
        <span>
          { name }
        </span>
      </FlexRow>
    </button>
  );
};

export default HyperLinkButton;