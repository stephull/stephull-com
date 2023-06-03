import React, { useState } from 'react';

import icons from '../../assets/icons';
import IconContainer from "../icon-container";

import FlexColumn from '../flex-column';
import FlexRow from '../flex-row';

import CommentList from '../comment-list';

import colors from '../../constants/colors';

const Card = ({ id, post, content }) => {

  const [viewCard, setViewCard] = useState(true);

  // Main component of Card
  const CardMain = ({ content: { src, type } }) => {
    const mainStyles = {
      maxWidth: '600px',
      width: 'fit-content',
      maxHeight: '1000px',
      height: 'fit-content'
    };

    return (type === 'VIDEO')
      ? (
        <video style={mainStyles} controls>
          <source src={src} />
        </video>
      ) : (
        <img 
          style={{
            border: `1px solid ${colors.jetBlack}`,
            ...mainStyles
          }} 
          src={src} 
        />
      );
  };

  // Footer for card, includes buttons for functionality
  const CardFooter = ({ desc, created }) => {

    const CardFooterButtons = () => {
      return (
        <div>
          {
            viewCard ? (
              <FlexRow>
                <IconContainer 
                  interact 
                  event={() => {
                    setViewCard(false)
                  }}
                >
                  {icons.view}
                </IconContainer>
                <IconContainer 
                  interact 
                  event={() => {
                    // stars
                  }}
                >
                  {icons.star}
                </IconContainer>
              </FlexRow>
            ) : ( 
              <FlexRow>
                <IconContainer 
                  interact 
                  event={() => {
                    setViewCard(true)
                  }}
                >
                  {icons.noView}
                </IconContainer>
              </FlexRow>
            )
          }
        </div>
      );
    };

    return (
      <FlexColumn edits={{ 
        backgroundColor: colors.cherryRed,
        padding: '0.5em',
        maxWidth: '585px',
      }}>
        <CardFooterButtons />
        <FlexColumn>
          {
            <FlexRow>
              <div style={{
                width: '20px',
                height: '20px',
                marginLeft: '0.125em',
                marginRight: '0.625em',
                backgroundColor: colors.brightOrange
              }} />
              <span
                style={{
                  color: colors.brightOrange
                }}
              >
                {desc}
              </span>
            </FlexRow>
          }
          {
            viewCard &&
            <FlexRow>
              <IconContainer>
                {icons.time}
              </IconContainer>
              <span style={{ 
                padding: '0.3em' 
              }}>
                {`Posted ${new Date() - Date.parse(created)}`}
              </span>
            </FlexRow>
          }
        </FlexColumn>
      </FlexColumn>
    );
  };

  // yeah :-)
  const { createdAt, desc } = post;

  return (
    <div style={{
      borderWidth: '1px',
      borderRadius: '1em',
      padding: '0 1em 2.5em'
    }}>
      {
        viewCard && <CardMain content={content}/>
      }
      <CardFooter desc={desc} created={createdAt}/>
      <CommentList postID={id} />
    </div>
  );
};

export default Card;