import React, { useState } from 'react';

import FlexRow from '../../components/flex-row';
import FlexColumn from '../../components/flex-column';
import ToggleButton from '../../components/toggle-button';
import PageContainer from "../../components/page-container";
import PageText from "../../components/page-text";
import { 
  RESUME_MAIN_TEXT,
  RESUME_SECONDARY_TEXT
} from '../../assets/text/resume';

import colors from '../../constants/colors';

const ResumePage = () => {
  const [PDFView, setPDFView] = useState(false);
  const togglePDFView = (state) => setPDFView(!state);

  const [showMore, setShowMore] = useState(false);

  const MainResumeContent = () => {
    return (
      RESUME_MAIN_TEXT.map((element, index) => {
        const { title, sub1, sub2, current, bullets } = element;
        return (
          <PageContainer key={index} edits={{
            marginLeft: '-0.5em',
            backgroundColor: current && colors.skyBlue
          }}>
            <PageText bold edits={{ 
              color: colors.brightBlue
            }}>
              {title}
            </PageText>
            <PageText edits={{ 
              color: current ? colors.darkBlue : colors.seaBlue,
              fontStyle: current && 'italic' 
            }}>
              {sub1}
            </PageText>
            <PageText edits={{ 
              color: current ? colors.darkBlue : colors.seaBlue,
              fontSize: '16px' ,
              fontStyle: current && 'italic'
            }}>
              {sub2}
            </PageText>
            <PageContainer>
              {
                bullets.map((bullet, index) => {
                  return (
                    <PageText
                      bullet
                      edits={{ paddingBottom: '0.125em' }}
                      key={index}
                    >
                      {bullet}
                    </PageText>
                  )
                })
              }
            </PageContainer>
          </PageContainer>
        );
      })
    );
  };

  const SecondaryResumeContent = () => {
    return (
      <FlexColumn>
        <div style={{ height: '100px' }} />
        <div>
          {
            RESUME_SECONDARY_TEXT.map((element, index) => {
              const { title, sub1, sub2, current, bullets } = element;
              return (
                <PageContainer key={index} edits={{
                  marginLeft: '-0.5em',
                }}>
                  <PageText bold edits={{ color: colors.brightOrange }}>
                    {title}
                  </PageText>
                  <PageText edits={{ color: colors.lightOrange }}>
                    {sub1}
                  </PageText>
                  <PageText edits={{ 
                    color: colors.lightOrange, 
                    fontSize: '16px' 
                  }}>
                    {sub2}
                  </PageText>
                  <PageContainer>
                    {
                      bullets.map((bullet, index) => {
                        return (
                          <PageText
                            bullet
                            edits={{ 
                              color: colors.lightOrange,
                              paddingBottom: '0.125em'
                            }}
                            key={index}
                          >
                            {bullet}
                          </PageText>
                        )
                      })
                    }
                  </PageContainer>
                </PageContainer>
              );
            })
          }
        </div>
      </FlexColumn>
    );
  };

  return (
    <>
      <FlexRow edits={{ justifyContent: 'space-between' }}>
        <h2 style={{ 
          color: colors.jetBlack, 
          paddingLeft: '0.5em' 
        }}>
          Resume
        </h2>
        <div style={{
          marginRight: '1em',
        }}>
          <ToggleButton
            border
            color={colors.lightOrange}
            hoverColor={colors.brightOrange}
            firstButton="Text"
            secondButton="PDF"
            toggle={togglePDFView}
            toggled={PDFView}
          />
        </div>
      </FlexRow>
      <PageContainer 
        indent 
        edits={{
          maxWidth: '840px'
        }}
      >
        {
          !PDFView ? (
            <>
              <MainResumeContent />
              {
                !showMore && <button onClick={() => setShowMore(true)}>Show More</button>
              }
              {
                showMore && <SecondaryResumeContent />
              }
            </>
          ) : (
            <FlexColumn>
              <div>
                Updated as of May 15, 2023
              </div>
              <div style={{ marginBottom: '1em' }}>
                Please note that resume file may not always be up to date.
              </div>
              <object
                data="https://stephull-com.s3.amazonaws.com/Stephen_Hullender_Resume.pdf"
                type="application/pdf"
                width="510px"
                height="660px"
              />
              {
                /* CHANGE THIS LATER AAAHHHHH */
              }
            </FlexColumn>
          )
        }
      </PageContainer>
    </>
  );
};

export default ResumePage;