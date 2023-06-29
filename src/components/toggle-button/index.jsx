import React, { useState } from 'react';
import FlexRow from '../flex-row';

import colors from '../../constants/colors';
import FlexColumn from '../flex-column';

const ToggleButton = ({
  color,
  hoverColor,
  firstButton,
  secondButton,
  toggle,
  toggled,
  border = null,
  instructions = null
}) => {
  const mainStyles = {
    padding: '1em', height: '20px', width: 'fit-content'
  }

  const [firstHover, setFirstHover] = useState(false);
  const [secondHover, setSecondHover] = useState(false);

  return (
    <FlexColumn>
      {
        instructions &&
        <small style={{
          fontSize: '9px',
          textAlign: 'center',
          wordWrap: 'normal'
        }}>
          {instructions}
        </small>
      }
      <FlexRow
        edits={{
          borderRadius: '10px',
          height: 'fit-content',
          marginTop: '0.5em',
          border: border && `1px solid ${colors.jetBlack}`,
          width: 'fit-content',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            backgroundColor: toggled 
              ? firstHover 
                ? hoverColor 
                  : color 
                : colors.snowWhite,
            color: toggled ? colors.snowWhite : color,
            textDecoration: !toggled && 'underline',
            cursor: toggled && 'pointer',
            ...mainStyles
          }}
          onClick={() => toggled && toggle(toggled)}
          onMouseEnter={() => setFirstHover(true)}
          onMouseLeave={() => setFirstHover(false)}
        >
          {firstButton}
        </div>
        <div
          style={{
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            backgroundColor: toggled 
              ? colors.snowWhite 
                : secondHover 
              ? hoverColor 
                : color,
            color: toggled ? color : colors.snowWhite,
            textDecoration: toggled && 'underline',
            cursor: !toggled && 'pointer',
            ...mainStyles
          }}
          onClick={() => !toggled && toggle(toggled)}
          onMouseEnter={() => setSecondHover(true)}
          onMouseLeave={() => setSecondHover(false)}
        >
          {secondButton}
        </div>
      </FlexRow>
    </FlexColumn>
  )
};

export default ToggleButton;