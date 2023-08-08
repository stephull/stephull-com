import React, { useState, useEffect } from 'react';
import axios from "axios";

import TimelinePost from '../../components/timeline-post';
import { lambdaMergeTimeline } from "../../envConfig";

const TimelinePage = () => {
  const [timelinePosts, setTimelinePosts] = useState(false);
  
  useEffect(() => {
    const fetchTimelinePosts = async () => {
      try {
        const res = await axios.get(lambdaMergeTimeline);
        setTimelinePosts(res.data);
      } catch (err) {
        console.error('Timeline could not be fetched:', err);
      }
    };
    fetchTimelinePosts();
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