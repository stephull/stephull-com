import React, { useEffect, useState } from 'react';
import { createApi } from "unsplash-js";
import { apiKeyUnsplash } from '../../envConfig';

import FlexColumn from '../flex-column';
import colors from '../../constants/colors';

import LoadingPictureError from '../loading-picture-error';

const api = createApi({ accessKey: apiKeyUnsplash });

const PhotoRender = ({ resp, dimensions, complementary = null, onClick = null }) => {
  const [hover, setHover] = useState(false);
  
  return (
    <FlexColumn edits={{ maxWidth: '200px' }}>
      <img
        style={{
          position: 'relative',
          maxHeight: dimensions.frameHeight,
          maxWidth: dimensions.frameWidth,
          border: `1px solid ${complementary ?? colors.jetBlack}`,
          cursor: hover && 'pointer'
        }}
        src={resp.urls.small}
        onClick={onClick ?? (() => {})}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </FlexColumn>
  )
};

const PhotoGenerate = ({ info, error }) => {
  const { name, dimensions, colorScheme = null } = info;
  const [photoResponse, setPhotoResponse] = useState(null);

  useEffect(() => {
    api.photos.getRandom({ query: name })
      .then((res) => setPhotoResponse(res.response))
      .catch((err) => console.error(err));
    // note, check query property on resume text for words that return a 404 error...
  }, [name]);

  return photoResponse === null
    ? (error)
      ? <LoadingPictureError />
      : <div>Loading...</div>
    : photoResponse.errors
      ? (
        <>
          <div>{photoResponse.errors[0]}</div>
          <div>Access to Unsplash unavailable!!!</div>
        </>
      )
      : (
        <FlexColumn>
          {(colorScheme)
            ? (
              // for Color Scheme
              <FlexColumn>
                <div style={{
                  backgroundColor: colorScheme.primary,
                  border: '1px solid black',
                  width: dimensions.frameWidth,
                  height: '400px',
                  margin: '0em 1em',
                  padding: '1em 1em 0 1em',
                  fontWeight: 'bold'
                }}>
                  <div style={{ color: colorScheme.complementary }}>
                    {name}
                  </div>
                  <br />
                  {
                    <>
                      <PhotoRender
                        resp={photoResponse}
                        dimensions={dimensions}
                        complementary={colorScheme.complementary}
                      />
                      <a
                        style={{
                          fontSize: '14px',
                          lineHeight: '15px',
                          textDecoration: 'underline',
                          color: colorScheme.complementary,
                          marginTop: '0.25em'
                        }}
                        target="_blank"
                        href={`https://unsplash.com/@${photoResponse.user.username}`}
                      >
                        Taken by {photoResponse.user.name}
                      </a>
                      <br/>
                      <small style={{ fontSize: '12px' }}>
                        <a 
                          target='_blank' 
                          href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"
                          style={{ color: colorScheme.complementary }}
                        >
                          Courtesy of Unsplash
                        </a>
                      </small>
                    </>
                  }
                </div>
              </FlexColumn>
            )
            : (
              // all other components using Unsplash
              <FlexColumn edits={{ width: '135px' }}>
                <PhotoRender
                  resp={photoResponse}
                  dimensions={dimensions}
                />
                <small style={{ color: colors.snowWhite }}>
                  Taken by {photoResponse.user.name}
                </small>
                <br/>
                <small style={{ fontSize: '10px' }}>
                  <a 
                    style={{ color: colors.snowWhite }}
                    target='_blank' 
                    href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"
                  >
                    Courtesy of Unsplash
                  </a>
                </small>
              </FlexColumn>
            )}
        </FlexColumn>
      )
};

export default PhotoGenerate;