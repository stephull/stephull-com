import React from 'react';

import ColorScheme from '../../components/color-scheme';
import PageContainer from "../../components/page-container";
import PageText from "../../components/page-text";
import WebsiteCredits from '../../components/website-credits';

import { ABOUT_PAGE_TEXT } from '../../assets/text/about';
import colors from '../../constants/colors';

const AboutPage = () => {
  return (
    <>
      <h2>About Me</h2>
      <PageContainer edits={{ maxWidth: '840px' }}>
        {
          ABOUT_PAGE_TEXT.map((element, index) => {
            const { text, quote, bullets } = element;
            return (
              <div key={index}>
                <PageText edits={{ 
                  fontWeight: quote ? 'bold' : 'normal',
                  fontSize: quote ? '30px' : '19px',
                  color: quote && colors.darkBlue
                }}>
                  { text }
                </PageText>
                <ul>
                  {
                    bullets.map((bullet, i) => {
                      return (
                        <li
                          key={i} 
                          style={{ 
                            listStyleType: quote ? 'none' : 'circle',
                            marginLeft: quote && '-2.5em',
                            marginTop: quote && '-1em',
                            color: quote && colors.darkBlue,
                            fontSize: quote ? '16px' : '19px'
                          }}
                        > 
                          { bullet }
                        </li>
                      )
                    })
                  }
                </ul>
                {
                  quote && <br />
                }
              </div>
            );
          })
        }
      </PageContainer>
      <PageContainer indent>
        <h4>Colors Used for Website</h4>
        <ColorScheme />
      </PageContainer>
      <PageContainer indent>
        <h4>
          Univers Font, font provided by <a href="https://www.cdnfonts.com/univers.font" target="_blank">CDNFonts</a>
        </h4>
      </PageContainer>
      <WebsiteCredits />
    </>
  );
};

export default AboutPage;