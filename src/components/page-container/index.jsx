import React from 'react';
import colors from "../../constants/colors";
import FlexRow from '../flex-row';

const PageContainer = ({ 
  children, 
  indent = false, 
  edits = null, 
  orientation = 'column'
}) => {
  return (
    <div style={{
      padding: '1em',
      ...edits
    }}>
      {
        indent ?
        (
          <FlexRow>
            <div style={{
              width: '2.5px',
              height: 'auto',
              marginRight: '10px',
              backgroundColor: colors.jetBlack
            }} />
            <div style={{
              display: 'flex',
              flexDirection: orientation
            }}>
              { children }
            </div>
          </FlexRow>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: orientation
          }}>
            { children }
          </div>
        )
      }
    </div>
  )
};

export default PageContainer;