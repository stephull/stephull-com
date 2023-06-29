import React from 'react';

import PageContainer from '../../components/page-container';
import PageText from '../../components/page-text';
import { PROJECTS_ACADEMIC_TEXT, PROJECTS_PERSONAL_TEXT } from '../../assets/text/projects';
import colors from '../../constants/colors';

import PhotoGenerate from '../../components/photogenerate';
import FlexRow from '../../components/flex-row';
import FlexColumn from '../../components/flex-column';

import { getListOfDates } from '../../utils/formatDate';

const ProjectsPage = () => {
  const IMAGE_DIMENSIONS = { frameHeight: '100px', frameWidth: '120px' };

  return (
    <>
      <h2>Tech Projects</h2>
      <small>
        Note: pictures are generated automatically
      </small>
      <br />
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
              link,
              description,
              skills
            } = element;
            return (
              <PageContainer key={index} edits={{ marginBottom: '1.25em' }}>
                <FlexRow edits={{ marginBottom: '1em' }}>
                <PhotoGenerate 
                  info={{
                    name: title,
                    dimensions: IMAGE_DIMENSIONS
                  }}
                  error={true} 
                />
                  <PageContainer>
                    <FlexColumn edits={{ marginTop: '-1em' }}>
                      <PageText bold edits={{ 
                        fontSize: '22.5px',
                      }}>
                        <a
                          style={{ color: colors.brightBlue }} 
                          href={link} 
                          target="_blank"
                        >
                          {title}
                        </a>
                      </PageText>
                      <PageText edits={{
                        color: colors.seaBlue
                      }}>
                        {course}
                      </PageText>
                      <PageText edits={{
                        color: colors.seaBlue
                      }}>
                        { getListOfDates(dates) }
                      </PageText>
                    </FlexColumn>
                  </PageContainer>
                </FlexRow>
                <PageText edits={{
                  color: colors.seaBlue
                }}>
                  {description}
                </PageText>
                <PageContainer indent>
                  <ul>
                    {
                      skills.map((s, i) => {
                        return (
                          <PageText key={i} edits={{
                            color: colors.lightOrange
                          }}>
                            <li style={{
                              listStyleType: 'disc',
                              marginLeft: '-0.5em',
                              marginTop: '-0.125em'
                            }}>
                              {s}
                            </li>
                          </PageText>
                        );
                      })
                    }
                  </ul>
                </PageContainer>
              </PageContainer>
            );
          })
        }
      </PageContainer>
      <br />
      <PageContainer indent edits={{ maxWidth: '840px' }}>
        <PageText bold edits={{ 
          fontSize: '24px',
          marginLeft: '0.5em',
          marginBottom: '1em',
          color: colors.jetBlack
        }}>
          Personal/Independent Projects
        </PageText>
        {
          PROJECTS_PERSONAL_TEXT.map((element, index) => {
            const {
              title,
              purpose,
              dates,
              link,
              description,
              skills
            } = element;
            return (
              <PageContainer key={index} edits={{ marginBottom: '1.25em' }}>
                <FlexRow edits={{ marginBottom: '1em' }}>
                  <PhotoGenerate 
                    info={{
                      name: title,
                      dimensions: IMAGE_DIMENSIONS
                    }}
                    error={true} 
                    edits={{ marginLeft: '1em' }}
                  />
                  <PageContainer>
                    <FlexColumn edits={{ marginTop: '-1em' }}>
                    <PageText bold edits={{ 
                        fontSize: '22.5px',
                      }}>
                        <a
                          style={{ color: colors.brightBlue }} 
                          href={link} 
                          target="_blank"
                        >
                          {title}
                        </a>
                      </PageText>
                      <PageText edits={{
                        color: colors.seaBlue
                      }}>
                        {purpose}
                      </PageText>
                      <PageText edits={{
                        color: colors.seaBlue
                      }}>
                        { getListOfDates(dates) }
                      </PageText>
                    </FlexColumn>
                  </PageContainer>
                </FlexRow>
                <PageText edits={{
                  color: colors.seaBlue
                }}>
                  {description}
                </PageText>
                <PageContainer indent>
                  <ul>
                    {
                      skills.map((s, i) => {
                        return (
                          <PageText key={i} edits={{
                            color: colors.lightOrange
                          }}>
                            <li style={{
                              listStyleType: 'disc',
                              marginLeft: '-0.5em',
                              marginTop: '-0.125em'
                            }}>
                              {s}
                            </li>
                          </PageText>
                        );
                      })
                    }
                  </ul>
                </PageContainer>
              </PageContainer>
            );
          })
        }
      </PageContainer>
    </>
  );
};

export default ProjectsPage;