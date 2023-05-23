import React from 'react';

import colors from "../../constants/colors";

const PageText = ({ 
  children, bold = false, bullet = false, edits = null
}) => {
  const DEFAULT_TEXT_SIZE = '19px', BULLET_TEXT_SIZE = '15px';

  if (bullet) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: "row",
      }}>
        <div style={{
          backgroundColor: colors.jetBlack,
          minWidth: '5px',
          height: '5px',
          marginRight: '10px',
          paddingTop: '5px',
          marginTop: '5px'
        }} />
        <div style={{ 
          fontSize: BULLET_TEXT_SIZE,
          color: colors.jetBlack
        }}>
          { children }
        </div>
      </div>
    )
  }

  return (
    <div style={{
      color: colors.jetBlack,
      fontSize: DEFAULT_TEXT_SIZE,
      fontWeight: bold ? 'bold' : 'normal',
      ...edits
    }}>
      { children }
    </div>
  );
};

export default PageText;