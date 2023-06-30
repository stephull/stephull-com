import React, { useState } from 'react';

import PageContainer from '../../components/page-container';
import PageText from '../../components/page-text';
import { PROJECTS_ACADEMIC_TEXT, PROJECTS_PERSONAL_TEXT } from '../../assets/text/projects';
import colors from '../../constants/colors';

import FlexRow from '../../components/flex-row';
import FlexColumn from '../../components/flex-column';

import ToggleButton from '../../components/toggle-button';
import HyperLinkButton from '../../components/hyperlink-button';

import { getListOfDates } from '../../utils/formatDate';

const ProjectsPage = () => {
  const sectionStyle = { display: 'none' }, activeSectionStyle = { display: 'block' };

  const [projectsView, setProjectsView] = useState(false);
  const toggleProjectsView = (projectsView) => setProjectsView(!projectsView);

  const sortSkillsEvenly = (skillList) => {
    return (
      <ul>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: '10px'
        }}>
          {
            skillList.map((s, i) => {
              return (
                <PageText key={i} edits={{
                  color: colors.brightOrange,
                  width: '200px',
                  paddingRight: '1em'
                }}>
                  <li style={{
                    listStyleType: 'disc',
                    marginLeft: '-0.5em',
                    marginTop: '-0.25em'
                  }}>
                    {s}
                  </li>
                </PageText>
              );
            })
          }
        </div>
      </ul>
    )
  };

  // svg's for ongoing and/or complete statuses
  const FinishedProjectSymbol = ({ thick }) => {
    return (
      <div style={{ 
        border: (thick ? "5px" : '2px') + ' solid ' + colors.snowWhite, 
        borderRadius: '100%',
        height: '45px',
        margin: '0.25em'
      }}>
        <svg width='45px' height='45px'>
          <circle 
            cx='22.5' cy='22.5' r='16.5' 
            stroke={colors.skyBlue} 
            strokeWidth='12'
            fill={colors.herbalGreen}
          />
        </svg>
      </div>
    );
  };
  
  const OngoingProjectSymbol = ({ thick }) => {
    return (
      <div style={{ 
        border: (thick ? "5px" : '2px') + ' solid ' + colors.snowWhite, 
        borderRadius: '100%',
        height: '45px',
        margin: '0.25em'
      }}>
        <svg width='45px' height='45px'>
          <circle 
            cx='22.5' cy='22.5' r='16.5' 
            stroke={colors.lightOrange} 
            strokeWidth='12'
            fill={colors.goldenYellow}
          />
        </svg>
      </div>
    );
  };

  const AwesomeKeyBackground = () => {
    const MARGIN = '-1.125em', OPAC = '0.5';
    return (
      <FlexRow>
        <svg height='44px' width='50px' style={{ marginLeft: MARGIN }}>
          <polygon points="0,0 40,0 20,40, 0,40" fill={colors.goldenYellow} opacity={OPAC} />
        </svg>
        <svg height='44px' width='50px' style={{ marginLeft: MARGIN }}>
          <polygon points="20,0 40,0 20,40, 0,40" fill={colors.goldenYellow} opacity={OPAC} />
        </svg>
        <svg height='44px' width='50px' style={{ marginLeft: MARGIN }}>
          <polygon points="20,0 40,0 20,40, 0,40" fill={colors.goldenYellow} opacity={OPAC} />
        </svg>
        <svg height='44px' width='50px' style={{ marginLeft: MARGIN }}>
          <polygon points="20,0 40,0 20,40, 0,40" fill={colors.goldenYellow} opacity={OPAC} />
        </svg>
        <svg height='44px' width='50px' style={{ marginLeft: MARGIN }}>
          <polygon points="20,0 40,0 20,40, 0,40" fill={colors.goldenYellow} opacity={OPAC} />
        </svg>
        <svg height='44px' width='50px' style={{ marginLeft: MARGIN }}>
          <polygon points="20,0 40,0 20,40, 0,40" fill={colors.goldenYellow} opacity={OPAC} />
        </svg>
        <svg height='44px' width='50px' style={{ marginLeft: MARGIN }}>
          <polygon points="20,0 40,0 40,40, 0,40" fill={colors.goldenYellow} opacity={OPAC} />
        </svg>
      </FlexRow>
    );
  };

  // sections for all projects
  const AcademicProjectsSection = () => {
    return (
      <PageContainer indent edits={{ maxWidth: '840px' }}>
        <PageText bold edits={{
          fontSize: '24px',
          marginLeft: '0.5em',
          marginBottom: '1em',
          color: colors.jetBlack
        }}>
          Academic Projects
        </PageText>
        {
          PROJECTS_ACADEMIC_TEXT.map((element, index) => {
            const {
              title,
              course,
              dates,
              links,
              description,
              skills,
              //query,
              ongoing,
              complete
            } = element;
            return (
              <PageContainer
                key={index}
                edits={{
                  marginBottom: '1.25em',
                  marginLeft: '1em',
                  padding: '-1em'
                }}
              >
                <FlexColumn>
                  <FlexRow edits={{
                    marginBottom: '1em',
                    backgroundColor: colors.brightBlue,
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                    <PageContainer>
                      <FlexColumn edits={{
                        marginTop: '-0.625em',
                        padding: '0.5em'
                      }}>
                        <PageText bold edits={{
                          fontSize: '22.5px',
                          color: colors.snowWhite
                        }}>
                          {title}
                        </PageText>
                        <PageText edits={{
                          color: colors.herbalGreen,
                          opacity: '0.75'
                        }}>
                          {course}
                        </PageText>
                        <PageText edits={{
                          color: colors.herbalGreen,
                          opacity: '0.75'
                        }}>
                          {getListOfDates(dates)}
                        </PageText>
                      </FlexColumn>
                    </PageContainer>
                    <FlexColumn>
                      {
                        ongoing &&
                        <div style={{ padding: '0.5em' }}>
                          <OngoingProjectSymbol thick={false} />
                        </div>
                      }
                      {
                        complete &&
                        <div style={{ padding: '0.5em' }}>
                          <FinishedProjectSymbol thick={false} />
                        </div>
                      }
                    </FlexColumn>
                  </FlexRow>
                  {
                    <svg style={{ 
                      marginBottom: '-7.5em',
                      marginTop: '-0.75em'
                    }}>
                      <rect width='100%' height='10px' fill={colors.brightBlue} />
                    </svg>
                  }
                  {
                    <svg style={{ 
                      marginBottom: '-8.75em',
                      marginTop: '-1em'
                    }}>
                      <rect width='100%' height='6px' fill={colors.brightBlue} />
                    </svg>
                  }
                </FlexColumn>
                <PageContainer edits={{ 
                  border: `1px solid ${colors.brightBlue}`,
                  borderTop: 'none',
                  marginTop: '-0.5em'
                }}>
                  <PageText edits={{
                    color: colors.brightBlue,
                    padding: '0.25em 0.5em'
                  }}>
                    {description}
                  </PageText>
                  <PageContainer indent>
                    { sortSkillsEvenly(skills) }
                  </PageContainer>
                  <PageContainer edits={{ marginTop: '-0.5em' }}>
                    <small style={{
                      padding: '0.25em',
                      fontSize: '12px'
                    }}>
                      Links:
                    </small>
                    <FlexRow>
                      {
                        links.map((element, index) => {
                          const { name: n, url: u } = element;
                          return <HyperLinkButton key={index} name={n} url={u} />;
                        })
                      }
                    </FlexRow>
                  </PageContainer>
                </PageContainer>
              </PageContainer>
            );
          })
        }
      </PageContainer>
    );
  };

  const IndependentProjectSection = () => {
    return (
      <PageContainer indent edits={{ maxWidth: '840px' }}>
        <PageText bold edits={{
          fontSize: '24px',
          marginLeft: '0.5em',
          marginBottom: '1em',
          color: colors.jetBlack
        }}>
          Personal Projects
        </PageText>
        {
          PROJECTS_PERSONAL_TEXT.map((element, index) => {
            const {
              title,
              purpose,
              dates,
              links,
              description,
              skills,
              //query,
              ongoing,
              complete
            } = element;
            return (
              <PageContainer
                key={index}
                edits={{
                  marginBottom: '1.25em',
                  marginLeft: '1em',
                  padding: '-1em'
                }}
              >
                <FlexColumn>
                  <FlexRow edits={{
                    marginBottom: '1em',
                    backgroundColor: colors.brightBlue,
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                    <PageContainer>
                      <FlexColumn edits={{
                        marginTop: '-0.625em',
                        padding: '0.5em'
                      }}>
                        <PageText bold edits={{
                          fontSize: '22.5px',
                          color: colors.snowWhite
                        }}>
                          {title}
                        </PageText>
                        <PageText edits={{
                          color: colors.herbalGreen,
                          opacity: '0.75'
                        }}>
                          {purpose}
                        </PageText>
                        <PageText edits={{
                          color: colors.herbalGreen,
                          opacity: '0.75'
                        }}>
                          {getListOfDates(dates)}
                        </PageText>
                      </FlexColumn>
                    </PageContainer>
                    <FlexColumn>
                      {
                        ongoing &&
                        <div style={{ padding: '0.5em' }}>
                          <OngoingProjectSymbol thick={false} />
                        </div>
                      }
                      {
                        complete &&
                        <div style={{ padding: '0.5em' }}>
                          <FinishedProjectSymbol thick={false} />
                        </div>
                      }
                    </FlexColumn>
                  </FlexRow>
                  {
                    <svg style={{ 
                      marginBottom: '-7.5em',
                      marginTop: '-0.75em'
                    }}>
                      <rect width='100%' height='10px' fill={colors.brightBlue} />
                    </svg>
                  }
                  {
                    <svg style={{ 
                      marginBottom: '-8.75em',
                      marginTop: '-1em'
                    }}>
                      <rect width='100%' height='6px' fill={colors.brightBlue} />
                    </svg>
                  }
                </FlexColumn>
                <PageContainer edits={{ 
                  border: `1px solid ${colors.brightBlue}`,
                  borderTop: 'none',
                  marginTop: '-0.5em'
                }}>
                  <PageText edits={{
                    color: colors.brightBlue,
                    padding: '0.25em 0.5em'
                  }}>
                    {description}
                  </PageText>
                  <PageContainer indent>
                    { sortSkillsEvenly(skills) }
                  </PageContainer>
                  <PageContainer edits={{ marginTop: '-0.5em' }}>
                    <small style={{
                      padding: '0.25em',
                      fontSize: '12px'
                    }}>
                      Links:
                    </small>
                    <FlexRow>
                      {
                        links.map((element, index) => {
                          const { name: n, url: u } = element;
                          return <HyperLinkButton key={index} name={n} url={u} />;
                        })
                      }
                    </FlexRow>
                  </PageContainer>
                </PageContainer>
              </PageContainer>
            );
          })
        }
      </PageContainer>
    )
  }

  return (
    <>
      <h2>Tech Projects</h2>
      <FlexRow edits={{ justifyContent: 'space-between' }}>
        <div className="projects-status-key">
          <FlexRow edits={{ 
            width: '125px', 
            zIndex: 301, 
            position: 'absolute'
          }}>
            <div style={{ marginLeft: '1em', marginTop: '0.25em' }}>
              <small style={{ 
                marginRight: '1em',
                fontStyle: 'italic'
              }}>
                Key:
              </small>
            </div>
            <FlexRow style={{ width: '100px' }}>
              <div style={{ padding: '0 0.5em' }}>
                <OngoingProjectSymbol thick={true} />
                <div style={{ marginTop: '-1em' }}>
                  <small style={{ fontWeight: 'bold' }}>
                    Ongoing
                  </small>
                </div>
              </div>
              <div style={{ padding: '0 0.5em' }}>
                <FinishedProjectSymbol thick={true} />
                <div style={{ marginTop: '-1em' }}>
                  <small style={{ fontWeight: 'bold' }}>
                    Finished
                  </small>
                </div>
              </div>
            </FlexRow>
          </FlexRow>
          <div style={{ 
            zIndex: 300, 
            position: 'absolute',
            paddingTop: "0.5em",
            marginLeft: '1.5em'
          }}>
            <AwesomeKeyBackground />
          </div>
        </div>
        <div style={{ marginTop: '-3em' }}>
          <ToggleButton
            border
            color={colors.brightBlue}
            hoverColor={colors.darkBlue}
            firstButton={"Academic"}
            secondButton={"Personal"}
            toggle={toggleProjectsView}
            toggled={projectsView}
            instructions={"Toggle between each section for different projects"}
          />
        </div>
      </FlexRow>
      <br />
      <br />
      <br />
      {
        <>
          <div style={!projectsView ? activeSectionStyle : sectionStyle}>
            <AcademicProjectsSection />
          </div>
          <div style={projectsView ? activeSectionStyle : sectionStyle}>
            <IndependentProjectSection />
          </div>
        </>
      }
    </>
  );
};

export default ProjectsPage;