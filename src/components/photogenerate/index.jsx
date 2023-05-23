import React, { useEffect, useState } from 'react';
import { createApi } from "unsplash-js";
import colors from '../../constants/colors';
import FlexColumn from '../flex-column';
import { apiKeyUnsplash } from '../../utils/envConfig';

const api = createApi({
  accessKey: apiKeyUnsplash
});

const PhotoRender = ({ resp }) => {
  return (
    <FlexColumn edits={{ maxWidth: '200px' }}>
      <img 
        style={{
          position: 'relative',
          maxHeight: '300px',
          maxWidth: '200px',
          border: `1px solid ${colors.jetBlack}`
        }} 
        src={resp.urls.small} 
      />
      <a
        style={{
          fontSize: '14px',
          lineHeight: '15px',
          textDecoration: 'underline',
          color: colors.jetBlack,
        }}
        target="_blank"
        href={`https://unsplash.com/@${resp.user.username}`}
      >
        Taken by {resp.user.name}
      </a>
      <small style={{ fontSize: '12px', color: colors.jetBlack }}>
        Courtesy of <a target='_blank' href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>
      </small>
    </FlexColumn>
  )
};

const PhotoGenerate = ({query, color}) => {
  const [photoResponse, setPhotoResponse] = useState(null);

  useEffect(() => {
    api.photos.getRandom({
      query: query
    })
      .then((res) => {
        console.log(res);
        setPhotoResponse(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return photoResponse === null 
    ? <div>Loading...</div>
    : photoResponse.errors 
      ? (
        <div>
          <div>{photoResponse.errors[0]}</div>
          <div>Make sure to set access token!</div>
        </div>
      ) : (
        <div style={{
          backgroundColor: color,
          border: '1px solid black',
          width: '240px',
          height: '360px',
          marginTop: '1em',
          fontWeight: 'bold',
          paddingLeft: '1em',
          paddingTop: '1em',
          marginLeft: '1em'
        }}>
          <div>{query}</div>
          {
            <PhotoRender resp={photoResponse.response} />
          }
        </div>
      )
};

export default PhotoGenerate;