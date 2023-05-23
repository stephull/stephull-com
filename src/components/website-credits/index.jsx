import React from 'react';

import PageContainer from '../page-container';
import PageText from '../page-text';
import FlexRow from '../flex-row';

import colors from '../../constants/colors';
import { BACKEND_CREDITS, FRONTEND_CREDITS } from '../../assets/text/home';

const WebsiteCredits = () => {
  return (
    <PageContainer edits={{ 
      border: `1px solid ${colors.jetBlack}`,
      borderRadius: '1.5em',
      height: 'fit-content',
      maxWidth: '720px'
    }}>
      <PageText bold edits={{ 
        padding: '0.5em',
        marginBottom: '-1em'
      }}>
        This website was made possible with these technologies...
      </PageText>
      <br />
      <FlexRow edits={{ justifyContent: 'space-evenly' }}>
        <PageContainer indent edits={{
          backgroundColor: colors.seaBlue,
          width: '250px'
        }}>
          <PageText bold edits={{ color: colors.snowWhite }}>
            Frontend work
          </PageText>
          <ul>
            {
              FRONTEND_CREDITS.map((element, index) => {
                return (
                  <li key={index}>
                    <div style={{ color: colors.snowWhite }}>
                      {element}
                    </div>
                  </li>
                ); 
              })
            }
          </ul>
        </PageContainer>
        <PageContainer indent edits={{
          backgroundColor: colors.persimmonOrange,
          width: '250px'
        }}>
          <PageText bold edits={{ color: colors.snowWhite }}>
            Backend work
          </PageText>
          <ul>
            {
              BACKEND_CREDITS.map((element, index) => {
                return (
                  <li key={index}>
                    <div style={{ color: colors.snowWhite }}>
                      {element}
                    </div>
                  </li>
                ); 
              })
            }
          </ul>
        </PageContainer>
      </FlexRow>
    </PageContainer>
  )
};

export default WebsiteCredits;