import React, { useState, useEffect } from 'react';

import { API } from 'aws-amplify';
import { API_NAME } from '../../config';
import { combineTimeline } from '../../endpoints';

import TimelinePost from '../../components/timeline-post';
import PageContainer from "../../components/page-container";

const TimelinePage = () => {
  const [timelinePosts, setTimelinePosts] = useState([]);
  
  useEffect(() => {
    API.get(API_NAME, combineTimeline, { response: true })
      .then((res) => setTimelinePosts(res.data.body))
      .catch((err) => console.error('Timeline could not be fetched:', err));
  }, []);

  return (
    <>
      <h2>My Life</h2>
      <PageContainer>
        {
          timelinePosts.map((post, index) => {
            return (
              <TimelinePost key={index}>

              </TimelinePost>
            )
          })
        }
      </PageContainer>
    </>
  );
};

export default TimelinePage;