import React, { useEffect, useState } from 'react';
import { createApi } from "unsplash-js";
import { apiKeyUnsplash } from '../../utils/envConfig';
import FlexColumn from '../flex-column';
import colors from '../../constants/colors';

const api = createApi({
  accessKey: apiKeyUnsplash
});

const PhotoRender = ({ resp, complementary }) => {
  return (
    <FlexColumn edits={{ maxWidth: '200px' }}>
      <img 
        style={{
          position: 'relative',
          maxHeight: '250px',
          maxWidth: '200px',
          border: `1px solid ${complementary}`
        }} 
        src={resp.urls.small} 
      />
      <a
        style={{
          fontSize: '14px',
          lineHeight: '15px',
          textDecoration: 'underline',
          color: complementary,
          marginTop: '0.25em'
        }}
        target="_blank"
        href={`https://unsplash.com/@${resp.user.username}`}
      >
        Taken by {resp.user.name}
      </a>
      
    </FlexColumn>
  )
};

const PhotoGenerate = ({info: { name, primary, complementary }}) => {
  const [photoResponse, setPhotoResponse] = useState(null);

  useEffect(() => {
    api.photos.getRandom({
      query: name
    })
      .then((res) => {
        console.log(res);
        setPhotoResponse(res.response);
      })
      .catch((err) => console.error(err));
  }, [name]);

  return photoResponse === null 
    ? <div>Loading...</div>
    : photoResponse.errors 
      ? (
        <>
          <div>{photoResponse.errors[0]}</div>
          <div>Make sure to set access token!</div>
        </>
      ) : (
        <FlexColumn>
          <div style={{
            backgroundColor: primary,
            border: '1px solid black',
            width: '240px',
            height: '315px',
            margin: '0em 1em',
            padding: '1em 1em 0 1em',
            fontWeight: 'bold'
          }}>
            <div style={{ color: complementary }}>
              { name }
            </div>
            <br />
            {
              <PhotoRender resp={photoResponse} complementary={complementary} />
            }
          </div>
          <small style={{ 
            fontSize: '12px', 
            color: colors.jetBlack,
            marginLeft: '1.25em',
            marginTop: '0.5em'
          }}>
            Courtesy of <a target='_blank' href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>
          </small>
        </FlexColumn>
      )
};

export default PhotoGenerate;