import React from 'react';

import PageContainer from "../../components/page-container";
import PageText from "../../components/page-text";
import WebsiteCredits from '../../components/website-credits';

import { INTRODUCTION_TEXT, ABOUT_PAGE_TEXT } from '../../assets/text/about';
import colors from '../../constants/colors';
import GradientBackdrop from '../../components/gradient-backdrop';

const HomePage = () => {

  const FONT_SIZE_NORMAL = '19px';
  const MAX_WIDTH_NORMAL = '840px';

  const SocialParagraph = () => {
    const instagram = <a href="https://instagram.com/step_hull" target="_blank">Instagram</a>;
    const linkedin = <a href="https://linkedin.com/in/shullender" target="_blank">LinkedIn</a>;
    const github = <a href="https://github.com/stephull" target="_blank">GitHub</a>;

    return (
      <>{github}, {linkedin}, and {instagram}</>  
    )
  }

  const Introduction = () => {
    return (
      <>
        <div style={{ 
          marginTop: '0.25em',
          marginLeft: '-0.0625em',
          maxWidth: MAX_WIDTH_NORMAL
        }}>
          <small style={{ 
              backgroundColor: colors.brightBlue, 
              color: colors.snowWhite,
              fontWeight: '300',
              fontSize: '12px',
              padding: '0.25em'
            }}>
              Please note that this website will not work on mobile...
            </small>
          <br />
        </div>
        <h2>Home</h2>
        <div style={{ 
          marginLeft: '1.25em',
          fontSize: FONT_SIZE_NORMAL,
          maxWidth: MAX_WIDTH_NORMAL
        }}>
          {
            INTRODUCTION_TEXT.map((element, index) => {
              return <p key={index}>{element.text}</p>
            })
          }
          <p>
            You can also learn more about me through my <SocialParagraph />
          </p>
        </div>
      </>
    )
  };

  return (
    <>
      <Introduction />
      <br />
      <h3>About Me</h3>
      <PageContainer edits={{ maxWidth: MAX_WIDTH_NORMAL }}>
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
                            fontSize: quote ? '16px' : FONT_SIZE_NORMAL,
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

export default HomePage;