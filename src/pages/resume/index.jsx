import React, { useState } from 'react';

import FlexRow from '../../components/flex-row';
import FlexColumn from '../../components/flex-column';
import ToggleButton from '../../components/toggle-button';
import PageContainer from "../../components/page-container";
import PageText from "../../components/page-text";
import HyperLinkButton from '../../components/hyperlink-button';

import { 
  RESUME_MAIN_TEXT,
  RESUME_SECONDARY_TEXT
} from '../../assets/text/resume';

import colors from '../../constants/colors';
import { s3ResumeLink } from '../../envConfig';
import { getListOfDates } from '../../utils/formatDate';

const ResumePage = () => {
  const activeSectionStyle = { display: 'block' }, sectionStyle = { display: 'none' };

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
            const {title, location, dates, current, bullets, sources} = element;
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
                    {location}
                  </PageText>
                  <PageText edits={{ 
                    color: current ? colors.snowWhite : colors.seaBlue,
                    fontSize: '16px' ,
                    fontStyle: current && 'italic',
                    fontSize: '16px',
                    marginTop: '0.25em',
                    maxWidth: '80%'
                  }}>
                    { getListOfDates(dates) }
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
                {
                  sources.length > 0 &&
                  <PageContainer edits={{ marginTop: '-1em' }}>
                    <small style={{ 
                      padding: '0.25em',
                      fontSize: '12px'
                    }}>
                      Links: 
                    </small>
                    <FlexRow>
                      {
                        sources.map((element, index) => {
                          const { name: n, url: u } = element;
                          return <HyperLinkButton key={index} name={n} url={u} />;
                        })
                      }
                    </FlexRow>
                  </PageContainer>
                }
                {
                  !current &&
                  <>
                    <svg style={{ marginBottom: '-7.5em' }}>
                      <rect height='3px' width='97.5%' fill={colors.brightBlue} />
                    </svg>
                    <svg style={{ marginTop: '-1.5em', marginBottom: '-7.5em' }}>
                      <rect height='3px' width='97.5%' fill={colors.brightBlue} />
                    </svg>
                  </>
                }
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
              const {title, location, dates, bullets, sources} = element;
              return (
                <PageContainer key={index} edits={{
                  marginLeft: '-0.5em',
                }}>
                  <PageText bold edits={{ 
                    color: colors.brightOrange,
                    fontSize: '20px'
                  }}>
                    {title}
                  </PageText>
                  <FlexRow edits={{
                    justifyContent: 'space-between',
                  }}>
                    <PageText edits={{ 
                      color: colors.lightOrange,
                      fontSize: '20px',
                      maxWidth: '80%'
                    }}>
                      {location}
                    </PageText>
                    <PageText edits={{ 
                      color: colors.brightOrange, 
                      fontSize: '16px',
                      marginTop: '0.25em',
                      maxWidth: '80%'
                    }}>
                      { getListOfDates(dates) }
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
                  {
                    sources.length > 0 &&
                    <PageContainer edits={{ marginTop: '-1em' }}>
                      <small style={{ 
                        padding: '0.25em',
                        fontSize: '12px'
                      }}>
                        Links: 
                      </small>
                      <FlexRow>
                        {
                          sources.map((element, index) => {
                            const { name: n, url: u } = element;
                            return (
                              <HyperLinkButton 
                                key={index} 
                                name={n} 
                                url={u} 
                                color={colors.brightOrange}
                                hoverColor={colors.lightOrange}
                              />
                            );
                          })
                        }
                      </FlexRow>
                    </PageContainer>
                  }
                  {
                    <>
                      <svg style={{ marginBottom: '-7.5em' }}>
                        <rect height='3px' width='97.5%' fill={colors.brightOrange} />
                      </svg>
                      <svg style={{ marginTop: '-1.5em', marginBottom: '-7.5em' }}>
                        <rect height='3px' width='97.5%' fill={colors.brightOrange} />
                      </svg>
                    </>
                  }
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
      <FlexRow edits={{ 
        justifyContent: 'space-between' 
      }}>
        <h2 style={{ 
          color: colors.jetBlack, 
          paddingLeft: '0.5em' 
        }}>
          Resume
        </h2>
        <div style={{
          marginRight: '1em',
          marginTop: '0.5em'
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
        edits={{ maxWidth: '840px' }}
      >
        <div style={ !PDFView ? activeSectionStyle : sectionStyle }>
          <MainResumeContent />
            {
              showMore 
                ? <SecondaryResumeContent /> 
                : (
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <button 
                      onClick={() => setShowMore(true)}
                      style={{
                        fontSize: '18px',
                        padding: '0.5em 1em',
                        backgroundColor: colors.brightBlue,
                        color: colors.snowWhite,
                        borderColor: colors.snowWhite
                      }}
                    >
                      Show More
                    </button>
                  </div>
                )
            }
        </div>
        <div style={ PDFView ? activeSectionStyle : sectionStyle }>
          <FlexColumn>
            <div>
              Updated as of July 21, 2023
            </div>
            <br />
            <object
              data={s3ResumeLink}
              type="application/pdf"
              width="600px"
              height="800px"
            />
          </FlexColumn>
        </div>
      </PageContainer>
    </>
  );
};

export default ResumePage;