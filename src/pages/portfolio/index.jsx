import React, { useState, useEffect } from 'react';

import FlexColumn from '../../components/flex-column';
import FlexRow from "../../components/flex-row";
import { PORTFOLIO_TEXT } from '../../assets/text/portfolio';
import { formatDate } from '../../utils/formatDate';
import colors from '../../constants/colors';

const PortfolioPage = () => {
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [hoverStates, setHoverStates] = useState([]);

  const initSelectImage = { link: "", title: "", desc: "", date: new Date() };
  const [selectImage, setSelectImage] = useState(initSelectImage);

  const PORTFOLIO_SECTION_WIDTH = '720px';
  const DISPLAY_IMAGE_ON_MODAL = '100px';
  const MODAL_MOVE_UP = '-77.5em';

  useEffect(() => {
    const initHover = Array(PORTFOLIO_TEXT.length).fill(false);
    setHoverStates(initHover);
  }, []);

  const MediaDescriptionModal = () => {
    const { link, title, desc, date } = selectImage;
    return (
      <FlexRow edits={{
        position: 'fixed',
        zIndex: 995,
        width: '600px',
        height: 'fit-content',
        maxHeight: '80px',
        padding: '1em', 
        backgroundColor: colors.snowWhite,
        border: `5px solid ${colors.herbalGreen}`,
        marginTop: MODAL_MOVE_UP,
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          paddingRight: '1em',
          left: 0
        }}>
          <FlexColumn>
          <div style={{
            width: DISPLAY_IMAGE_ON_MODAL * 1.125,
            display: 'flex',
            justifyContent: 'center',
            height: '5px',
            marginBottom: '0.25em',
            backgroundColor: colors.herbalGreen
          }}/>
          <img 
            src={link}
            style={{
              width: DISPLAY_IMAGE_ON_MODAL,
              height: 'fit-content',
              border: `2px solid ${colors.herbalGreen}`
            }}
          />
          <div style={{
            width: DISPLAY_IMAGE_ON_MODAL * 1.125,
            display: 'flex',
            justifyContent: 'center',
            height: '5px',
            marginTop: '0.25em',
            backgroundColor: colors.herbalGreen
          }}/>
          </FlexColumn>
        </div>
        <FlexColumn edits={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <FlexRow edits={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span style={{
              fontWeight: 'bold',
              fontSize: '17px'
            }}>
              { title }
            </span>
            <small>{ formatDate(date) ?? "Date unknown" }</small>
          </FlexRow>
          <span>{ desc }</span>
          <FlexRow edits={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <small>
              <a href={link} target="_blank">
                See full picture in new tab
              </a>
            </small>
            <small 
              onClick={() => {
                setShowDescriptionModal(false);
                setSelectImage(initSelectImage);
              }}
              style={{
                fontWeight: 'bold',
                color: colors.brightOrange,
                textDecoration: 'underline',
                cursor: 'pointer'
              }}  
            >
                Close window
            </small>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    )
  }

  const handleImageClick = (media) => {
    const { link, title, desc, date } = media;
    if (!showDescriptionModal) {
      setShowDescriptionModal(true);
    }
    setSelectImage({ link, title, desc, date });
  }

  const handleImageHover = (i, isHovered) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[i] = isHovered;
    setHoverStates(newHoverStates);
  }

  return (
    <>
      <h2>Portfolio</h2>
      <p>
        Click on each picture for a brief explanation of what the body of work means.
      </p>
      <FlexColumn>
        {
          PORTFOLIO_TEXT.map((element, index) => {
            const { title, desc, dates, media } = element;

            const half = media.length/2;
            const firstColumn = media.slice(0, half), secondColumn = media.slice(half);
            
            const IMAGE_WIDTH = '333px';
            const MAX_HEIGHT = IMAGE_WIDTH * 0.85;

            return (
              <FlexColumn key={index} edits={{
                width: PORTFOLIO_SECTION_WIDTH
              }}>
                <div style={{ 
                  border: `5px solid ${colors.seaBlue}`,
                  padding: '1em'
                }}>
                  <FlexRow edits={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{
                      fontWeight: 'bold',
                      fontSize: '20px',
                      color: colors.brightBlue
                    }}>
                      {title}
                    </span>
                    <small style={{ 
                      color: colors.jetBlack,
                      paddingTop: '0.333em'
                    }}>
                      {`${formatDate(dates.start)} - ${formatDate(dates.end) ?? "Present"}`}
                    </small>
                  </FlexRow>
                  <blockquote style={{
                    fontSize: '18px',
                    color: colors.brightBlue
                  }}>
                    { desc }
                  </blockquote>
                </div>
                <div style={{
                  backgroundColor: colors.seaBlue,
                  width: 'fit-content',
                  height: 'fit-content'
                }}>
                <FlexRow edits={{
                  width: PORTFOLIO_SECTION_WIDTH,
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '0.25em 0'
                }}>
                    <FlexColumn>
                      {
                        firstColumn.map((m, i) => {
                          return (
                            <div style={{
                              display: 'flex',
                              alignItems: 'center'
                            }}>
                              <img 
                                key={i}
                                style={{ 
                                  border: `1px solid ${colors.brightBlue}`,
                                  cursor: hoverStates[i] ? 'pointer' : 'default',
                                  opacity: hoverStates[i] ? 0.9 : 1.0,
                                  width: IMAGE_WIDTH,
                                  height: 'fit-content',
                                  maxHeight: MAX_HEIGHT,
                                  margin: '0.5em'
                                }}
                                onMouseEnter={() => handleImageHover(i, true)}
                                onMouseLeave={() => handleImageHover(i, false)}
                                onClick={() => handleImageClick(m)}
                                src={m.link}
                              />
                            </div>
                          )
                        })
                      }
                    </FlexColumn>  
                    <FlexColumn>
                      {
                        secondColumn.map((m, i) => {
                          i += half;
                          return (
                            <div style={{
                              display: 'flex',
                              alignItems: 'center'
                            }}>
                              <img 
                                key={i}
                                style={{ 
                                  border: `1px solid ${colors.brightBlue}`,
                                  cursor: hoverStates[i] ? 'pointer' : 'default',
                                  opacity: hoverStates[i] ? 0.9 : 1.0,
                                  width: IMAGE_WIDTH,
                                  height: 'fit-content',
                                  maxHeight: MAX_HEIGHT,
                                  margin: '0.5em'
                                }}
                                onMouseEnter={() => handleImageHover(i, true)}
                                onMouseLeave={() => handleImageHover(i, false)}
                                onClick={() => handleImageClick(m)}
                                src={m.link}
                              />
                            </div>
                          )
                        })
                      }
                    </FlexColumn>
                </FlexRow>
                </div>
              </FlexColumn>
            )
          })
        }
      </FlexColumn>
      <br />
      <br />
      <br />
      <br />
      <br />
      { /* :-) don't mind these breaks :-) */ }
      {
        selectImage.title != "" &&
        <MediaDescriptionModal />
      }
    </>
  );
};

export default PortfolioPage;