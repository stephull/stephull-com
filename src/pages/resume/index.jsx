import React, { useState } from 'react';

import FlexRow from '../../components/flex-row';
import FlexColumn from '../../components/flex-column';
import ToggleButton from '../../components/toggle-button';
import PageContainer from "../../components/page-container";
import PageText from "../../components/page-text";
import HyperLinkButton from '../../components/hyperlink-button';
import DownloadButton from '../../components/download-button';

import { 
  RESUME_EDUCATION,
  RESUME_MAIN_TEXT,
  RESUME_SECONDARY_TEXT
} from '../../assets/text/resume';

import colors from '../../constants/colors';
import { s3ResumeLink } from '../../envConfig';
import { formatDate, getListOfDates } from '../../utils/formatDate';
import { handleDownload } from '../../utils/fileDownload';

const ResumePage = () => {
  const activeSectionStyle = { display: 'block' }, 
    sectionStyle = { display: 'none' };
  const MAX_WIDTH_NORMAL = '840px';

  const [PDFView, setPDFView] = useState(false);
  const togglePDFView = (state) => setPDFView(!state);

  const [showMore, setShowMore] = useState(false);

  const [downloadError, setDownloadError] = useState(false);

  const Divider = ({color}) => {
    return (
      <>
        <svg style={{ marginBottom: '-7.5em' }}>
          <rect height='3px' width='97.5%' fill={color} />
        </svg>
        <svg style={{ marginTop: '-1.5em', marginBottom: '-7.5em' }}>
          <rect height='3px' width='97.5%' fill={color} />
        </svg>
      </>
    )
  };

  const EducationContent = () => {
    const { title, subtitle, location, major, minor, courses } = RESUME_EDUCATION;
    const eduStyle = {
      display: 'flex', 
      justifyContent: "space-between",
      marginBottom: '-1em',
      fontSize: '17px'
    };

    return (
      <>
        <PageText bold>
          Education
        </PageText>
        <PageContainer edits={{
          backgroundColor: colors.brightBlue,
          marginLeft: '-0.5em',
          color: colors.snowWhite
        }}>
          <div style={{ maxWidth: MAX_WIDTH_NORMAL }}>
            <div style={eduStyle}>
              <b style={{ fontSize: '20px' }}>{title}</b>
              <p style={{ marginTop: "-0.0625em" }}>{location}</p>
            </div>
            <small>{subtitle}</small>
            <div style={eduStyle}>
              <p>{major}</p>
              <p>{minor}</p>
            </div>
          </div>
        </PageContainer>
        <PageContainer edits={{ 
          marginLeft: '-0.5em',
          color: colors.brightBlue,
          marginTop: "0.125em"
        }}>
          <h5 style={{ 
            fontSize: '16px',
            marginTop: '-0.25em'
          }}>
            Relevant major/minor coursework: 
          </h5>
          <ul style={{ 
            marginTop: '-1em', 
            marginLeft: '-1em',
            width: '600px',
            marginBottom: '-0.25em'
          }}>
            {
              courses.map((c, i) => {
                const { name, code, dates } = c;
                return (
                  <li key={i} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    fontSize: '15px'
                  }}>
                    <span>
                      {`${name} (${code})`}
                    </span>
                    <span>
                      {`${formatDate(dates.start) ?? ""} - ${formatDate(dates.end) ?? ""}`}
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </PageContainer>
        <FlexColumn edits={{ marginTop: '1em' }}>
          <Divider color={colors.brightBlue} />
        </FlexColumn>
      </>
    )
  }

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
                        sources.map((element, index) => <HyperLinkButton key={index} name={element.name} url={element.url} />)
                      }
                    </FlexRow>
                  </PageContainer>
                }
                {
                  !current &&
                  <Divider color={colors.brightBlue} />
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
                            return (
                              <HyperLinkButton 
                                key={index} 
                                name={element.name} 
                                url={element.url} 
                                color={colors.brightOrange}
                                hoverColor={colors.lightOrange}
                              />
                            );
                          })
                        }
                      </FlexRow>
                    </PageContainer>
                  }
                  <Divider color={colors.brightOrange} />
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
            color={colors.brightOrange}
            hoverColor={colors.lightOrange}
            firstButton="Text"
            secondButton="PDF"
            toggle={togglePDFView}
            toggled={PDFView}
          />
        </div>
      </FlexRow>
      <PageContainer 
        indent 
        edits={{ maxWidth: MAX_WIDTH_NORMAL }}
      >
        <div style={ !PDFView ? activeSectionStyle : sectionStyle }>
          <div style={{ paddingBottom: '4em' }}>
            <EducationContent />
          </div>
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
          <FlexColumn edits={{ padding: '0.25em' }}>
            <span>
              Updated as of July 21, 2023
            </span>
            <span>
              Click on 'Download' for a PDF version of my resume.
            </span>
            <p style={{
              fontWeight: 'bold',
              color: colors.jetBlack,
              backgroundColor: colors.goldenYellow,
              padding: '0.5em',
              width: 'fit-content',
              height: 'auto'
            }}>
              Warning: Please be aware that downloading this PDF file will notify the owner.
            </p>
            <br />
            <DownloadButton
              name={"Resume"}
              onClick={handleDownload}
            >
              Download
            </DownloadButton>
            <object 
              data={s3ResumeLink}
              type="application/pdf"
              width="600px"
              height="800px"
            >
              <p>It appears that your browser does not support PDF previews.</p>
            </object>
          </FlexColumn>
        </div>
      </PageContainer>
    </>
  );
};

export default ResumePage;