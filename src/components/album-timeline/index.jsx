import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { DataStore } from '@aws-amplify/datastore';
import { Album, Media } from '../../models';
import Card from '../card';

import PageContainer from "../page-container/index.jsx";

const AlbumTimeline = () => {
  Amplify.configure(awsconfig);

  const [album, setAlbum] = useState([]);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const getTimeline = async () => {
      const newAlbum = await DataStore.query(Album);
      const newMedia = await DataStore.query(Media);
      setAlbum(
        newAlbum.map((item) => item).reverse()
      );
      setMedia(
        newMedia.map((item) => item).reverse()
      );

      console.log(newAlbum);
      console.log(newMedia);
    }
    getTimeline();
  }, []);

  return (
    <>
      { 
        // this code only returns 1 content, change it in the
        // future to get more than one based on post ID
        album.map((a, i) => {
          return (
            <PageContainer key={i}>
              <Card 
                id={post.id} 
                post={post}
                content={
                  media.filter((m) => a.id === m.albumID)[0]
                } 
              />
            </PageContainer>
          )
        })
      }
    </>
  );
};

export default AlbumTimeline;