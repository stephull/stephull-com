import React, { useState, useEffect } from 'react';

import FlexColumn from '../../components/flex-column';
import FlexRow from "../../components/flex-row";
import { PORTFOLIO_TEXT } from '../../assets/text/portfolio';
import { formatDate } from '../../utils/formatDate';
import colors from '../../constants/colors';

const PortfolioPage = () => {
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [hoverStates, setHoverStates] = useState([]);
  const [selectImage, setSelectImage] = useState({
    title: "", desc: "", date: new Date()
  });

  useEffect(() => {
    const initHover = Array(PORTFOLIO_TEXT.length).fill(false);
    setHoverStates(initHover);
  }, []);

  const MediaDescriptionModal = () => {
    return (
      <>
        <span>{ selectImage.title }</span>
        <span>{ selectImage.desc }</span>
        <small>{ formatDate(selectImage.date) ?? "Date unknown" }</small>
      </>
    )
  }

  const handleImageClick = (title, desc, date) => {
    if (!showDescriptionModal) {
      setShowDescriptionModal(true);
    }
    setSelectImage({ title, desc, date });
  }

  const handleImageHover = (i, isHovered) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[i] = isHovered;
    setHoverStates(newHoverStates);
  }

  return (
    <>
      <h2>Portfolio</h2>
      <FlexColumn>
        {
          PORTFOLIO_TEXT.map((element, index) => {
            const { title, desc, dates, media } = element;
            return (
              <FlexColumn key={index}>
                <FlexRow>
                  <span>{title}</span>
                  <small>
                    {`${formatDate(dates.start)} - ${formatDate(dates.end) ?? "Present"}`}
                  </small>
                </FlexRow>
                <span>{desc}</span>
                <div>
                  {
                    media.map((m, i) => {
                      const { link, title, desc, date } = m;
                      return (
                        <img 
                          key={i}
                          style={{ 
                            border: `1px solid ${colors.brightBlue}`,
                            cursor: hoverStates[i] ? 'pointer' : 'default',
                            opacity: hoverStates[i] ? 0.9 : 1.0,
                            height: '100px',
                            width: 'fit-content'
                          }}
                          onMouseEnter={() => handleImageHover(i, true)}
                          onMouseLeave={() => handleImageHover(i, false)}
                          onClick={() => handleImageClick(title, desc, date)}
                          src={link}
                        />
                      )
                    })
                  }
                </div>
              </FlexColumn>
            )
          })
        }
      </FlexColumn>
      {
        selectImage.title != "" &&
        <MediaDescriptionModal />
      }
    </>
  );
};

export default PortfolioPage;