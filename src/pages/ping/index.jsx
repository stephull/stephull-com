import React, { useState, useEffect } from 'react';
import axios from "axios";

import { apiKeyApiGateway, lambdaApiPing } from '../../envConfig';

const ApiPingRequest = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          lambdaApiPing,
          {
            headers: { 'x-api-key': apiKeyApiGateway }
          }
        );
        setData(res.data);
        console.log(res.data);
      } catch (err) {
        console.error('Error fetching API request for ping:', err);
      }
    }
    fetch();
  }, []);

  return (
    <span>
      {data.statusCode == 200 ? `Message: ${data.body.message}` : `API is not working. Try again.`}
    </span>
  )
};

export default ApiPingRequest;