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
import GradientBackdrop from '../../components/gradient-backdrop';

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
  const FinishedProjectSymbol = () => {
    return (
      <div style={{ 
        border: '5px solid ' + colors.snowWhite, 
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
  
  const OngoingProjectSymbol = () => {
    return (
      <div style={{ 
        border: '5px solid ' + colors.snowWhite, 
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
                    <FlexRow edits={{ marginRight: '1em' }}>
                    {
                        ongoing &&
                        <FlexColumn>
                          <div style={{ 
                            padding: '0.5em',
                            marginTop: '-1.85em' 
                          }}>
                            <OngoingProjectSymbol />
                          </div>
                          <small style={{ 
                            color: colors.lightOrange,
                            marginLeft: '1.125em',
                            marginTop: '-0.75em',
                            fontWeight: 'bold'
                          }}>
                            Ongoing
                          </small>
                        </FlexColumn>
                      }
                      {
                        complete &&
                        <FlexColumn>
                          <div style={{ 
                            padding: '0.5em',
                            marginTop: '-1.85em'
                          }}>
                            <FinishedProjectSymbol />
                          </div>
                          <small style={{ 
                            color: colors.skyBlue,
                            marginLeft: '1em',
                            marginTop: '-0.75em',
                            fontWeight: 'bold'
                          }}>
                            Complete
                          </small>
                        </FlexColumn>
                      }
                    </FlexRow>
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
                <br />
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
                    <FlexRow edits={{ marginRight: '1em' }}>
                      {
                        ongoing &&
                        <FlexColumn>
                          <div style={{ 
                            padding: '0.5em',
                            marginTop: '-1.85em' 
                          }}>
                            <OngoingProjectSymbol />
                          </div>
                          <small style={{ 
                            color: colors.lightOrange,
                            marginLeft: '1.125em',
                            marginTop: '-0.75em',
                            fontWeight: 'bold'
                          }}>
                            Ongoing
                          </small>
                        </FlexColumn>
                      }
                      {
                        complete &&
                        <FlexColumn>
                          <div style={{ 
                            padding: '0.5em',
                            marginTop: '-1.85em'
                          }}>
                            <FinishedProjectSymbol />
                          </div>
                          <small style={{ 
                            color: colors.skyBlue,
                            marginLeft: '1em',
                            marginTop: '-0.75em',
                            fontWeight: 'bold'
                          }}>
                            Complete
                          </small>
                        </FlexColumn>
                      }
                    </FlexRow>
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
                <br />
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
            <div style={{ 
              marginTop: '0.25em',
              padding: '0.25em' 
            }}>
              <small style={{ 
                marginRight: '1em',
                fontStyle: 'italic',
                fontWeight: 'bold'
              }}>
                Key:
              </small>
            </div>
            <FlexRow style={{ width: '100px' }}>
              <div style={{ padding: '0 0.5em' }}>
                <OngoingProjectSymbol />
                <div style={{ 
                  marginTop: '-0.333em',
                  marginLeft: '0.4em'
                }}>
                  <small style={{ 
                    fontWeight: 'bold',
                    color: colors.lightOrange,
                    backgroundColor: colors.snowWhite,
                    padding: '0.25em 0'
                  }}>
                    Ongoing
                  </small>
                </div>
              </div>
              <div style={{ 
                width: '200px', 
                marginLeft: '-0.125em',
                marginTop: '-0.25em' 
              }}>
                <p style={{ 
                  fontSize: '14px',
                  opacity: '0.8' 
                }}>
                  Project is currently in progress or in revision
                </p>
              </div>
              <div style={{ padding: '0 0.5em' }}>
                <FinishedProjectSymbol />
                <div style={{ 
                  marginTop: '-0.333em',
                  marginLeft: '0.333em' 
                }}>
                  <small style={{ 
                    fontWeight: 'bold',
                    color: colors.skyBlue,
                    backgroundColor: colors.snowWhite,
                    padding: '0.25em 0'
                  }}>
                    Complete
                  </small>
                </div>
              </div>
              <div style={{ 
                marginLeft: '-0.125em',
                marginTop: '-0.25em',
              }}>
                <p style={{ 
                  fontSize: '14px',
                  opacity: '0.8'
                }}>
                  Complete version of project is available 
                  (may not always mean it is finalized as intended)
                </p>
              </div>
            </FlexRow>
          </FlexRow>
          <div style={{ 
            zIndex: 300, 
            position: 'absolute',
            paddingTop: "0.5em",
            marginLeft: '1.5em'
          }}>
            <GradientBackdrop  
              margin='-1.5em'
              opacity='0.333'
              height='150px'
              width='60px'
              color={colors.goldenYellow}
              stripes={10}
              startPoints="0,0 55,0 25,70 0,70"
              middlePoints="30,0 55,0 25,70 0,70"
              endPoints="30,0 55,0 55,70 0,70"
            />
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