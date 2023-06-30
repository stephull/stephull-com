import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import awsconfig from '../../aws-exports';
import { Blog as BlogModel, Media } from '../../models';
import Blog from '../blog';
import PageContainer from '../page-container/index.jsx';

const BlogTimeline = () => {
  Amplify.configure(awsconfig);

  const [blog, setBlog] = useState([]);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const getTimeline = async () => {
      const newBlog = await DataStore.query(BlogModel);
      const newMedia = await DataStore.query(Media);
      setBlog(
        newBlog.map(i => i).reverse()
      );
      setMedia(
        newMedia.map(i => i).reverse()
      );
    };
    getTimeline();
  }, []);

  return (
    <>
      {
        blog.map((b, i) => {
          return (
            <PageContainer key={i}>
              <Blog
                key={post.id}
                post={post}
                content={
                  media.filter((m) => b.id === m.blogID)[0]
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