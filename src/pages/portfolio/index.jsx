import React, { useState, useEffect } from 'react';

import FlexColumn from '../../components/flex-column';
import FlexRow from "../../components/flex-row";
import GradientBackdrop from '../../components/gradient-backdrop';
import colors from '../../constants/colors';

import { PORTFOLIO_TEXT } from '../../assets/text/portfolio';
import { formatDate } from '../../utils/formatDate';
import HyperLinkButton from '../../components/hyperlink-button';

const PortfolioPage = () => {
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [hoverStates, setHoverStates] = useState([]);

  const initSelectImage = { link: "", title: "", desc: "", date: new Date() };
  const [selectImage, setSelectImage] = useState(initSelectImage);

  const PORTFOLIO_SECTION_WIDTH = '720px';
  const DISPLAY_IMAGE_ON_MODAL = '100px';
  const MODAL_MOVE_UP = '-80em';

  useEffect(() => {
    const initHover = Array(PORTFOLIO_TEXT.length).fill(false);
    setHoverStates(initHover);
  }, []);

  const ArtDesignPortfolioSymbol = () => {
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
            stroke={colors.herbalGreen}
            strokeWidth='12'
            fill={colors.snowWhite}
          />
        </svg>
      </div>
    );
  }

  const MusicPortfolioSymbol = () => {
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
            stroke={colors.brightOrange}
            strokeWidth='12'
            fill={colors.snowWhite}
          />
        </svg>
      </div>
    );
  }

  const GamingExperienceShowcasePortfolioSymbol = () => {
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
            stroke={colors.brightBlue}
            strokeWidth='12'
            fill={colors.jetBlack}
          />
        </svg>
      </div>
    );
  }

  const MediaDescriptionModal = () => {
    const { link, title, desc, date } = selectImage;
    return (
      <FlexRow edits={{
        position: 'fixed',
        zIndex: 995,
        width: '600px',
        height: '85px',
        padding: '1em',
        backgroundColor: colors.snowWhite,
        border: `5px solid ${colors.skyBlue}`,
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
              backgroundColor: colors.skyBlue
            }} />
            <img
              src={link}
              style={{
                width: DISPLAY_IMAGE_ON_MODAL,
                height: 'fit-content',
                border: `2px solid ${colors.skyBlue}`
              }}
            />
            <div style={{
              width: DISPLAY_IMAGE_ON_MODAL * 1.125,
              display: 'flex',
              justifyContent: 'center',
              height: '5px',
              marginTop: '0.25em',
              backgroundColor: colors.skyBlue
            }} />
          </FlexColumn>
        </div>
        <FlexColumn edits={{
          display: 'flex',
          justifyContent: 'right'
        }}>
          <FlexRow edits={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '-0.625em'
          }}>
            <span style={{
              fontWeight: 'bold',
              fontSize: '17px',
              padding: '0.125em',
              color: colors.jetBlack
            }}>
              {title}
            </span>
            <small>{formatDate(date) ?? "Date unknown"}</small>
          </FlexRow>
          <span>{desc}</span>
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
                color: colors.jetBlack,
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
        Unlike the Projects page, this portfolio is reserved for more liberal/creative bodies of work that I have done either independently or through volunteering/organizational work.
      </p>
      <p>
        Click on each picture for a brief explanation of what the body of work means.
      </p>
      <div style={{ marginBottom: '7.5em' }}>
        <FlexRow edits={{
          zIndex: 301,
          position: 'absolute'
        }}>
          <b style={{
            marginTop: '0.375em',
            marginLeft: '0.25em',
            fontStyle: 'italic',
            paddingRight: '1em'
          }}>
            Key:
          </b>
          <FlexColumn edits={{
            paddingRight: '1em'
          }}>
            <ArtDesignPortfolioSymbol />
            <span style={{
              marginTop: '-0.25em',
              fontSize: '14px'
            }}>
              Art/design
            </span>
          </FlexColumn>
          <FlexColumn edits={{
            paddingRight: '1em'
          }}>
            <MusicPortfolioSymbol />
            <span style={{
              marginTop: '-0.25em',
              fontSize: '14px',
              paddingLeft: '1em'
            }}>
              Music
            </span>
          </FlexColumn>
          <FlexColumn>
            <div style={{ width: 'fit-content' }}>
              <GamingExperienceShowcasePortfolioSymbol />
            </div>
            <span style={{
              marginTop: '-0.25em',
              fontSize: '14px',
              paddingLeft: '0.5em'
            }}>
              Gaming/showcases
            </span>
          </FlexColumn>
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
            height='250px'
            width='60px'
            color={colors.goldenYellow}
            stripes={7}
            startPoints="0,0 55,0 25,70 0,70"
            middlePoints="30,0 55,0 25,70 0,70"
            endPoints="30,0 55,0 55,70 0,70"
          />
        </div>
      </div>
      <FlexColumn edits={{ paddingLeft: '0.5em' }}>
        {
          PORTFOLIO_TEXT.map((element, index) => {
            const { title, desc, dates, type, links, media } = element;

            const half = media.length / 2;
            const firstColumn = media.slice(0, half), secondColumn = media.slice(half);

            const IMAGE_WIDTH = '333px';
            const MAX_HEIGHT = IMAGE_WIDTH * 0.85;

            return (
              <div style={{ paddingTop: '1em' }}>
                <div style={{
                  position: 'absolute',
                  marginLeft: '-1.5625em',
                  marginTop: '-1.25em'
                }}>
                  { type == "art" && <ArtDesignPortfolioSymbol /> } 
                  { type == "music" && <MusicPortfolioSymbol /> }
                  { type == "game" && <GamingExperienceShowcasePortfolioSymbol /> }
                </div>
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
                        paddingLeft: '1.85em', 
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
                      {desc}
                    </blockquote>
                    {
                      links.map((link, ind) => {
                        const {name: n, url: u} = link;
                        return <HyperLinkButton key={ind} name={n} url={u} />;
                      })
                    }
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
              </div>
            )
          })
        }
      </FlexColumn>
      <br />
      <br />
      <br />
      <br />
      <br />
      { /* :-) don't mind these breaks :-) */}
      {
        selectImage.title != "" &&
        <MediaDescriptionModal />
      }
    </>
  );
};

export default PortfolioPage;