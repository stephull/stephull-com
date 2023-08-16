import React, { useState } from 'react';

import { API } from 'aws-amplify';
import { API_NAME } from '../../config';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CreateText = ({ function: funct }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const isProject = (funct === "/projects");
  const [includeProjectProps, setIncludeProjectProps] = useState(isProject);
  
  const [completedCreation, setCompletedCreation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { elements } = e.target;
    const params = {
      title: elements.title.value,
      subtitle: elements.subtitle.value,
      dates: {
        start: elements.startDate.value,
        end: elements.endDate.value
      },
      bullets: [],
      links: [],
    };

    if (includeProjectProps) {
      params['ongoing'] = elements.ongoing.value;
      params['complete'] = elements.complete.value;
      params['description'] = elements.projectDescrption.value;
    }

    API.post(API_NAME, funct, )
  }

  return (
    <>
      <form
        id="create-text-form"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="title"
          >
            Title
          </label>
          <input 
            type="text"
            id="title"
            key="title"
            required
          />
        </div>
        <div>
          <label 
            htmlFor="subtitle"
          >
            Subtitle
          </label>
          <input 
            type='text'
            id='subtitle'
            key='subtitle'
            required
            placeholder="Company for resume, course/other for projects"
          />
        </div>
        <div>
          <label 
            htmlFor="startDate"
          >
            Start Date
          </label>
          <DatePicker 
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            id="startDate"
          />
        </div>
        <div>
          <label 
            htmlFor='endDate'
          >
            End Date
          </label>
          <DatePicker 
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            id="endDate"
          />
        </div>
      </form>
      {
        completedCreation &&
        <span>
          Thank you for the new post! Your work here is done. 
        </span>
      }
    </>
  )
}

export default CreateText;