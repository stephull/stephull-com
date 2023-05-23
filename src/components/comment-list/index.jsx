import React, { useState, useEffect } from 'react';
import FlexRow from '../flex-row';

import { DataStore } from '@aws-amplify/datastore';

import icons from '../../assets/icons';

const CommentList = ({ postID }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const postComments = await DataStore.query(Comment);
      setComments(postComments);
    };
    getComments();
  }, []);

  return (
    <>
      {
        comments.filter((x) => x.id === postID).map((comment) => {
          const { id, body, anonymous, stars, poster } = comment;
          console.log('comment:', comment);
          <div key={id}>
            <span>{ anonymous ? poster : "Anonymous" }</span>
            <span>{body}</span>
            <FlexRow>
              <IconContainer 
                interact 
                event={() => {
                  // stars
                }}
              >
                {icons.star}
              </IconContainer>
              <span>
                {stars}
              </span>
            </FlexRow>
          </div>
        })
      }
    </>
  );
};

export default CommentList;