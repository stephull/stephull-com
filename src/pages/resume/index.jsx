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
      <FlexColumn>
        <PageText bold>
          Main Work Experience
        </PageText>
        {
          RESUME_MAIN_TEXT.map((element, index) => {
            const { title, sub1, sub2, current, bullets } = element;
            return (
              <PageContainer key={index} edits={{
                marginLeft: '-0.5em',
                backgroundColor: current && colors.brightBlue
              }}>
                <PageText bold edits={{ 
                  fontSize: '20px',
                  color: current ? colors.snowWhite : colors.brightBlue,
                }}>
                  {title}
                </PageText>
                <FlexRow edits={{
                  justifyContent: 'space-between'
                }}>
                  <PageText edits={{ 
                    color: current ? colors.snowWhite : colors.seaBlue,
                    fontStyle: current && 'italic',
                    fontSize: '20px',
                    maxWidth: '80%'
                  }}>
                    {sub1}
                  </PageText>
                  <PageText edits={{ 
                    color: current ? colors.snowWhite : colors.seaBlue,
                    fontSize: '16px' ,
                    fontStyle: current && 'italic',
                    fontSize: '16px',
                    marginTop: '0.25em',
                    maxWidth: '80%'
                  }}>
                    {sub2}
                  </PageText>
                </FlexRow>
                <PageContainer edits={{
                  paddingTop: '0.5em'
                }}>
                  {
                    bullets.map((bullet, index) => {
                      return (
                        <PageText
                          bullet
                          edits={{ 
                            paddingBottom: '0.125em',
                          }}
                          key={index}
                        >
                          <div style={{
                            color: current && colors.snowWhite
                          }}>
                            { bullet }
                          </div>
                        </PageText>
                      )
                    })
                  }
                </PageContainer>
              </PageContainer>
            );
          })
        }
      </FlexColumn>
    );
  };

  const SecondaryResumeContent = () => {
    return (
      <FlexColumn>
        <div style={{ height: '100px' }} />
        <PageText bold>
          Other Work Experience
        </PageText>
        <div>
          {
            RESUME_SECONDARY_TEXT.map((element, index) => {
              const { title, sub1, sub2, bullets } = element;
              return (
                <PageContainer key={index} edits={{
                  marginLeft: '-0.5em',
                }}>
                  <PageText bold edits={{ 
                    color: colors.cherryRed,
                    fontSize: '20px'
                  }}>
                    {title}
                  </PageText>
                  <FlexRow edits={{
                    justifyContent: 'space-between',
                  }}>
                    <PageText edits={{ 
                      color: colors.brightOrange,
                      fontSize: '20px',
                      maxWidth: '80%'
                    }}>
                      {sub1}
                    </PageText>
                    <PageText edits={{ 
                      color: colors.brightOrange, 
                      fontSize: '16px',
                      marginTop: '0.25em',
                      maxWidth: '80%'
                    }}>
                      {sub2}
                    </PageText>
                  </FlexRow>
                  <PageContainer edits={{
                    paddingTop: '0.5em'
                  }}>
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
                Updated as of June 12, 2023
              </div>
              {
                /*
                // just in case
                <div style={{ marginBottom: '1em' }}>
                  Please note that resume file may not always be up to date.
                </div>
                */
              }
              <br />
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