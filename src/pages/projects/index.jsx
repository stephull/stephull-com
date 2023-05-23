import React from 'react';

import PageContainer from '../../components/page-container';
import PageText from '../../components/page-text';
import { PROJECTS_ACADEMIC_TEXT, PROJECTS_PERSONAL_TEXT } from '../../assets/text/projects';
import colors from '../../constants/colors';

import FlexRow from '../../components/flex-row';
import FlexColumn from '../../components/flex-column';

const ProjectsPage = () => {
  return (
    <>
      <h2>Tech Projects</h2>
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
              ongoing,
              complete,
              sub1,
              sub2,
              link,
              picture,
              description,
              skills
            } = element;
            return (
              <PageContainer key={index} edits={{ marginBottom: '1.25em' }}>
                <FlexRow edits={{ marginBottom: '1em' }}>
                  <div style={{ 
                    border: `1px solid ${colors.jetBlack}`,
                    maxHeight: '100px',
                    height: '100px',
                    maxWidth: '100px',
                    width: '100px'
                  }}>
                    <image src="https://stephull-com.s3.amazonaws.com/roblox.png" alt=""></image>
                  </div>
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
                        {sub1}
                      </PageText>
                      <PageText edits={{
                        color: colors.seaBlue
                      }}>
                        {sub2}
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
                            color: colors.persimmonOrange
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
              ongoing,
              complete,
              sub,
              link,
              picture,
              description,
              skills
            } = element;
            return (
              <PageContainer key={index} edits={{ marginBottom: '1.25em' }}>
                <FlexRow edits={{ marginBottom: '1em' }}>
                  <div style={{ 
                    border: `1px solid ${colors.jetBlack}`,
                    maxHeight: '100px',
                    height: '100px',
                    maxWidth: '100px',
                    width: '100px'
                  }}>
                    <image src={picture} alt=""></image>
                  </div>
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
                        {sub}
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
                            color: colors.persimmonOrange
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