import React, { useState } from 'react';

import PageContainer from '../../components/page-container';
import PageText from '../../components/page-text';
import { PROJECTS_ACADEMIC_TEXT, PROJECTS_PERSONAL_TEXT } from '../../assets/text/projects';
import colors from '../../constants/colors';

import PhotoGenerate from '../../components/photogenerate';
import FlexRow from '../../components/flex-row';
import FlexColumn from '../../components/flex-column';

import ToggleButton from '../../components/toggle-button';
import HyperLinkButton from '../../components/hyperlink-button';

import { getListOfDates } from '../../utils/formatDate';

const ProjectsPage = () => {
  const IMAGE_DIMENSIONS = { frameHeight: '100px', frameWidth: '120px' };
  const sectionStyle = { display: 'none' }, activeSectionStyle = { display: 'block' };

  const [projectsView, setProjectsView] = useState(false);
  const toggleProjectsView = (projectsView) => setProjectsView(!projectsView);

  const randomlyPickQuery = (queryList) => {
    var index = Math.floor(Math.random() * queryList.length);
    return queryList[index];
  };

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
  }

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
              query
            } = element;
            return (
              <PageContainer
                key={index}
                edits={{
                  marginBottom: '1.25em',
                  marginLeft: '1em',
                  border: `1px solid ${colors.brightBlue}`,
                  padding: '-1em'
                }}
              >
                <FlexRow edits={{
                  marginBottom: '1em',
                  backgroundColor: colors.brightBlue
                }}>
                  <div style={{
                    marginTop: '0.25em',
                    paddingLeft: '0.25em'
                  }}>
                    <PhotoGenerate
                      info={{
                        name: query.length > 0 ? randomlyPickQuery(query) : title,
                        dimensions: IMAGE_DIMENSIONS
                      }}
                      error={true}
                      edits={{ marginLeft: '1em' }}
                    />
                  </div>
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
                        color: colors.herbalGreen
                      }}>
                        {course}
                      </PageText>
                      <PageText edits={{
                        color: colors.herbalGreen
                      }}>
                        {getListOfDates(dates)}
                      </PageText>
                    </FlexColumn>
                  </PageContainer>
                </FlexRow>
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
              query
            } = element;
            return (
              <PageContainer
                key={index}
                edits={{
                  marginBottom: '1.25em',
                  marginLeft: '1em',
                  border: `1px solid ${colors.brightBlue}`,
                  padding: '-1em'
                }}
              >
                <FlexRow edits={{
                  marginBottom: '1em',
                  backgroundColor: colors.brightBlue
                }}>
                  <div style={{
                    marginTop: '0.25em',
                    paddingLeft: '0.25em'
                  }}>
                    <PhotoGenerate
                      info={{
                        name: query.length > 0 ? randomlyPickQuery(query) : title,
                        dimensions: IMAGE_DIMENSIONS
                      }}
                      error={true}
                      edits={{ marginLeft: '1em' }}
                    />
                  </div>
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
                        color: colors.herbalGreen
                      }}>
                        {purpose}
                      </PageText>
                      <PageText edits={{
                        color: colors.herbalGreen
                      }}>
                        {getListOfDates(dates)}
                      </PageText>
                    </FlexColumn>
                  </PageContainer>
                </FlexRow>
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
        <div>
          <small>Note: pictures are generated automatically</small>
          <br />
          <small>Clicking on each generated picture takes you to the credited author</small>
        </div>
        <div style={{ marginTop: '-1.5em' }}>
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