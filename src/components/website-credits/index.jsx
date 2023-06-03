import React from 'react';

import PageContainer from '../page-container';
import PageText from '../page-text';
import FlexRow from '../flex-row';
import ColorScheme from '../../components/color-scheme';
import colors from '../../constants/colors';
import { BACKEND_CREDITS, FRONTEND_CREDITS } from '../../assets/text/home';

const WebsiteCredits = () => {
  return (
    <>
      <PageText bold>
        About This Website
      </PageText>
      <PageContainer indent>
        <h4>Colors Used for Website</h4>
        <ColorScheme />
      </PageContainer>
      <PageContainer indent>
        <h4>
          Univers Font, font provided by <a href="https://www.cdnfonts.com/univers.font" target="_blank">CDNFonts</a>
        </h4>
      </PageContainer>
      <PageContainer indent edits={{ 
        height: 'fit-content',
        maxWidth: '660px'
      }}>
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
            backgroundColor: colors.lightOrange,
            width: '250px'
          }}>
            <PageText bold edits={{ color: colors.jetBlack }}>
              Backend work
            </PageText>
            <ul>
              {
                BACKEND_CREDITS.map((element, index) => {
                  return (
                    <li key={index}>
                      <div style={{ color: colors.jetBlack }}>
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
    </>
  )
};

export default WebsiteCredits;