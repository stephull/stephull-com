import React from 'react';

import PageContainer from "../../components/page-container";
import PageText from "../../components/page-text";
import WebsiteCredits from '../../components/website-credits';
import FlexRow from '../../components/flex-row';

import { ABOUT_PAGE_TEXT } from '../../assets/text/about';
import colors from '../../constants/colors';
import GradientBackdrop from '../../components/gradient-backdrop';

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
                {
                  quote &&
                  <div style={{ position: 'absolute' }}>
                    <GradientBackdrop 
                      margin='-1.25em'
                      opacity='0.125'
                      color={colors.skyBlue}
                      height='60px'
                      width='50px'
                      stripes={16}
                      startPoints="0,0 40,0 20,60 0,60"
                      middlePoints="20,0 40,0 20,60 0,60"
                      endPoints="20,0 60,0 60,60 0,60"
                    />
                  </div>
                }
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
                            fontSize: quote ? '16px' : '19px',
                            position: quote && 'absolute'
                          }}
                        > 
                          { bullet }
                        </li>
                      )
                    })
                  }
                </ul>
                {
                  quote && (
                    <><br /><br /></>
                  )
                }
              </div>
            );
          })
        }
      </PageContainer>
      <WebsiteCredits />
    </>
  );
};

export default AboutPage;