import React, { useState, useEffect } from 'react';

import { API } from "aws-amplify";
import { API_NAME } from '../../config';
import { updateProjectText, updateResumeText } from '../../endpoints';

import { 
  ADDITIONAL_TEXT_PROPS, 
  INITIAL_TEXT_PROPS 
} from '../../declaratives/text.index';

import colors from '../../constants/colors';

const EditableText = ({ function: funct }) => {
  const IS_PROJECTS = (funct === 'project');

  const [defaultTextComponent, setDefaultTextComponent] = useState(INITIAL_TEXT_PROPS);
  const [additionalTextProps, setAdditionalTextProps] = useState(ADDITIONAL_TEXT_PROPS);

  const [editingState, setEditingState] = useState(false);

  useEffect(() => {
    API.get(API_NAME, () => {
      switch(funct) {
        case "project":
          return updateProjectText
        case "resume":
          return updateResumeText
        default:
          return;
      }
    })
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
    <>
      <b>

      </b>
      <form>
        <br />
        <button
          type='submit'
          className="btn btn-primary"
          style={{
            fontWeight: 'bold',
            fontSize: "18px",
            padding: "0.5em 1em",
            backgroundColor: colors.goldenYellow,
            color: colors.jetBlack,
            borderColor: colors.jetBlack
          }}
        >
          Update Post
        </button>
      </form>
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
                Edit Contents
              </button>
            </>
          )
      }
    </>
  );
};

export default EditableText;