import React, { useState, useEffect } from 'react';
import axios from "axios";

import TimelinePost from '../../components/timeline-post';
import PageContainer from "../../components/page-container";

import { apiKeyApiGateway, lambdaMergeTimeline } from "../../envConfig";

const TimelinePage = () => {
  const [timelinePosts, setTimelinePosts] = useState([]);
  
  useEffect(() => {
    const fetchTimelinePosts = async () => {
      try {
        const res = await axios.get(
          lambdaMergeTimeline,
          {
            headers: { 'x-api-key': apiKeyApiGateway }
          }
        );
        setTimelinePosts(res.data.body);
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