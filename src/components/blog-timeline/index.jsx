import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import awsconfig from '../../aws-exports';
import { BlogTimelineItem, Content } from '../../models';
import Blog from '../blog';
import PageContainer from '../page-container/index.jsx';

const BlogTimeline = () => {
  Amplify.configure(awsconfig);

  const [timeline, setTimeline] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getTimeline = async () => {
      const timelineData = await DataStore.query(BlogTimelineItem);
      const newContent = await DataStore.query(Content);
      setTimeline(
        timelineData.map(i => i).reverse()
      );
      setContent(
        newContent.map(i => i).reverse()
      );
    };
    getTimeline();
  }, []);

  return (
    <>
      {
        timeline.map((post, index) => {
          return (
            <PageContainer key={index}>
              <Blog
                key={post.id}
                post={post}
                content={
                  content.filter((c) => post.id === c.blogtimelineID)[0]
                }
              />
            </PageContainer>
          )
        })
      }
    </>
  );
};

export default BlogTimeline;