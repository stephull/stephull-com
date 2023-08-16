import React, { useState, useEffect } from 'react';

import { API } from 'aws-amplify';
import { API_NAME } from '../../config';
import { ping } from '../../endpoints';

const ApiPingRequest = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    API.get(API_NAME, ping, { response: true })
      .then((res) => setData(res.data))
      .catch((err) => console.error('Error fetching test API request:', err))
  }, []);

  return (
    <span>
      {
        data.statusCode == 200 
          ? `Message: ${data.body.message}` 
          : `API is not working. Try again.`
      }
    </span>
  )
};

export default ApiPingRequest;