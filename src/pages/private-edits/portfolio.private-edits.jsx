import React, { useState, useEffect } from 'react';

import { Amplify, API } from 'aws-amplify';
import awsmobile from '../../aws-exports';

const PortfolioPage = () => {
  Amplify.configure(awsmobile);
  const API_NAME = awsmobile.aws_cloud_logic_custom[0].name;
  const API_FUNCTION = "/portfolio";

  const [editingState, setEditingState] = useState(false);

  useEffect(() => {
    API.get(API_NAME, API_FUNCTION)
      .then((res) => {

      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <span>Edit Portfolio</span>
      {
        editingState ?
          (
            <>
            </>
          ) :
          (
            <>
              <button onClick={() => setEditingState(true)}>
                Edit Portfolio
              </button>
            </>
          )
      }
    </div>
  )
};

export default PortfolioPage;