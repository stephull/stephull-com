import React, { useState, useEffect } from 'react';

import { Amplify, API } from "aws-amplify";
import awsmobile from "../../aws-exports";

import { 
  ADDITIONAL_TEXT_PROPS, 
  INITIAL_TEXT_PROPS 
} from '../../declaratives/text.index';

const EditableText = ({ function: funct }) => {
  Amplify.configure(awsmobile);
  const API_NAME = awsmobile.aws_cloud_logic_custom[0].name;

  const [defaultTextComponent, setDefaultTextComponent] = useState(INITIAL_TEXT_PROPS);
  const [additionalTextProps, setAdditionalTextProps] = useState(ADDITIONAL_TEXT_PROPS);

  const [editingState, setEditingState] = useState(false);

  useEffect(() => {
    API.get(API_NAME, funct)
      .then((res) => setText(res.text))
      .catch((err) => console.error(err));
  }, [funct]);

  const saveNewText = () => {
    const params = { body: { text }}
    API.post(API_NAME, funct, params)
      .then((res) => {
        console.log('Text successfully updated');
        setEditingState(false);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <span>Edit Text</span>
      {
        editingState ?
          (
            <>
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={10}
                cols={50}
              />
              <button onClick={saveNewText}>Save</button>
            </>
          ) :
          (
            <>
              <span>{text}</span>
              <button onClick={() => setEditingState(true)}>
                Edit Text
              </button>
            </>
          )
      }
    </div>
  );
};

export default EditableText;