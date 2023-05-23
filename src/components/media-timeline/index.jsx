import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { DataStore } from '@aws-amplify/datastore';
import { MediaTimelineItem, Content } from '../../models';
import Card from '../card';

import PageContainer from "../page-container/index.jsx";

const MediaTimeline = () => {
  Amplify.configure(awsconfig);

  const [timeline, setTimeline] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getTimeline = async () => {
      const timelineData = await DataStore.query(MediaTimelineItem);
      const newContent = await DataStore.query(Content);
      setTimeline(
        timelineData.map((item) => item).reverse()
      );
      setContent(
        newContent.map((item) => item).reverse()
      );

      console.log(timelineData);
      console.log(newContent);
    }
    getTimeline();
  }, []);

  return (
    <>
      { 
        // this code only returns 1 content, change it in the
        // future to get more than one based on post ID
        timeline.map((post, index) => {
          return (
            <PageContainer key={index}>
              <Card 
                id={post.id} 
                post={post}
                content={
                  content.filter((c) => post.id === c.mediatimelineitemID)[0]
                } 
              />
            </PageContainer>
          )
        })
      }
    </>
  );
};

export default MediaTimeline;