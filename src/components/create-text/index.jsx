import React, { createContext, useContext, useState } from 'react';

import { API } from 'aws-amplify';
import { API_NAME } from '../../config';

import DatePicker, { CalendarContainer } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { checkForChronologicalOrder } from '../../utils/checkForChronologicalOrder';
import colors from '../../constants/colors';
import { createProjectText, createResumeText } from '../../endpoints';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    startDate: null,
    endDate: null,
    bullets: [],
    hyperlinks: [],
    ongoing: false,
    complete: false,
    description: ""
  });

  const [currentBullet, setCurrentBullet] = useState("");
  const [currentHyperlink, setCurrentHyperlink] = useState({
    url: "", name: ""
  });

  const updateField = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };

  const addBullet = () => {
    if (currentBullet.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        bullets: [...prevData.bullets, currentBullet]
      }));
      setCurrentBullet("");
    }
  };

  const addHyperlink = () => {
    if (
      currentHyperlink.url.trim() !== "" &&
      currentHyperlink.name.trim() !== ""
    ) {
      setFormData((prevData) => ({
        ...prevData,
        hyperlinks: [...prevData.hyperlinks, currentHyperlink]
      }));
      setCurrentHyperlink({ url: "", name: "" });
    }
  };

  const removeBullet = (index) => {
    setFormData((prevData) => {
      const newBullets = [...prevData.bullets];
      newBullets.splice(index, 1);
      return {
        ...prevData,
        bullets: newBullets
      };
    });
  };

  const removeHyperlink = (index) => {
    setFormData((prevData) => {
      const newHyperlinks = [...prevData.hyperlinks];
      newHyperlinks.splice(index, 1);
      return {
        ...prevData,
        hyperlinks: newHyperlinks
      };
    });
  };

  const clearOfMissingFields = () => {
    const {
      title,
      subtitle,
      startDate,
      endDate,
      bullets
    } = formData;

    if (
      title.trim() === "" || subtitle.trim() === "" ||
      startDate === null || endDate === null
    ) {
      return false;
    }

    if (bullets.length < 1) {
      return false;
    }

    return true;
  }

  const handleSubmit = async () => {
    if (clearOfMissingFields()) {
      const endpoint = (isProjects) ? createProjectText : createResumeText;
      const response = await API.post(API_NAME, endpoint, {
        body: formData, headers: {}
      });

      let responseBody = JSON.parse(response.body);
      let responseData = responseBody.data.createTextComponent;
      if (responseData.success) {
        setSubmitDone(true);
        console.log(responseData);
      } else {
        setSubmitError(true);
      }
    }
  }

  const formState = {
    formData,
    currentBullet,
    setCurrentBullet,
    currentHyperlink,
    setCurrentHyperlink,
    updateField,
    addBullet,
    addHyperlink,
    removeBullet,
    removeHyperlink,
    handleSubmit
  };

  return (
    <FormContext.Provider value={formState}>
      { children }
    </FormContext.Provider>
  );
}

const CreateTextFormComponent = ({ isProjects }) => {
  const {
    formData,
    currentBullet,
    setCurrentBullet,
    currentHyperlink,
    setCurrentHyperlink,
    updateField,
    addBullet,
    addHyperlink,
    removeBullet,
    removeHyperlink,
    handleSubmit
  } = useContext(FormContext);

  const TEXT_FIELD_WIDTH = '300px';
  const TEXT_FIELD_HEIGHT = '100px';
  const DATE_PICKER_WIDTH = '240px';

  const delButtonStyles = {
    backgroundColor: colors.brightOrange,
    color: colors.jetBlack,
    fontWeight: 'bold',
    padding: '2px',
    marginLeft: '1em'
  };

  const customizedCalendar = ({ className, children }) => {
    const calendarStyles = {
      padding: '3px', 
      background: colors.brightBlue,
      color: colors.snowWhite
    };
    
    return (
      <div style={calendarStyles}>
        <CalendarContainer className={className}>
          <div style={{ 
            background: colors.brightBlue,
            color: colors.snowWhite,
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '3px',
            border: 'none'
          }}>
            { className }
          </div>
          <div style={{ position: "relative" }}>
            { children }
          </div>
        </CalendarContainer>
      </div>
    )
  };

  const handleStartDateChronology = (date) => {
    if (checkForChronologicalOrder(date)) {
      updateField('startDate', date);
    }
  };
  const handleEndDateChronology = (date) => {
    if (checkForChronologicalOrder(date)) {
      updateField('endDate', date);
    } 
  };

  // return the following
  return (
    <div>
      <h4>
        { isProjects ? "Create Project" : "Create Resume" }
      </h4>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input 
          type='text'
          id="title"
          value={formData.title}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Job position for resume, project name for project"
          required
          style={{ width: TEXT_FIELD_WIDTH }}
        />
      </div>
      <div>
        <label htmlFor="subtitle">Subtitle</label>
        <br />
        <input 
          type='text'
          id="subtitle"
          value={formData.subtitle}
          onChange={(e) => updateField('subtitle', e.target.value)}
          placeholder="Company for resume, course/other for projects"
          required
          style={{ width: TEXT_FIELD_WIDTH }}
        />
      </div>
      <div>
        <label htmlFor="startDate">
          Start Date
        </label>
        <br />
        <small style={{ fontWeight: 'bold' }}>
            Need to pick a date before or no later than today.
          </small>
        <br/>
        <DatePicker 
          selected={formData.startDate}
          onChange={(date) => handleStartDateChronology(date)}
          id="startDate"
          required
          placeholderText="Click to select start date"
          style={{
            width: DATE_PICKER_WIDTH
          }}
          calendarContainer={customizedCalendar}
        />
      </div>
      <div>
        <label htmlFor="endDate">
          End Date
        </label>
        <br />
        <small style={{ fontWeight: 'bold' }}>
            Need to pick a date before or no later than today.
          </small>
        <br/>
        <DatePicker 
          selected={formData.endDate}
          onChange={(date) => handleEndDateChronology(date)}
          id="endDate"
          placeholderText="Optional end date"
          style={{
            width: DATE_PICKER_WIDTH
          }}
          calendarContainer={customizedCalendar}
        />
      </div>
      <div>
        <label htmlFor="bullets">
          Bullet points
        </label>
        <div>
          <small style={{ fontWeight: 'bold' }}>
            At least one bullet point is required.
          </small>
          <br />
          <textarea 
            value={currentBullet}
            onChange={(e) => setCurrentBullet(e.target.value)}
            placeholder="Enter a bullet point..."
            style={{
              width: TEXT_FIELD_WIDTH,
              height: TEXT_FIELD_HEIGHT,
              resize: 'none'
            }}
            required={(formData.bullets.length < 1)}
          />
          <button onClick={addBullet}>
            Add Bullet
          </button>
          <br />
          <ul>
            {
              formData.bullets.map((bullet, index) => (
                <li key={index}>
                  <span>{ bullet }</span>
                  <button style={delButtonStyles} onClick={() => removeBullet(index)}>
                    X
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div>
        <label htmlFor="links">
          Hyperlinks (references)
        </label>
        <div>
          <input 
            type="text"
            value={currentHyperlink.url}
            onChange={(e) => {
              setCurrentHyperlink({
                ...currentHyperlink, url: e.target.value
              })
            }}
            placeholder="Enter URL link here..."
            style={{ width: TEXT_FIELD_WIDTH }}
          />
          <br />
          <input 
            type="text"
            value={currentHyperlink.name}
            onChange={(e) => {
              setCurrentHyperlink({
                ...currentHyperlink, name: e.target.value
              })
            }}
            placeholder="Enter the name of link..."
            style={{ width: TEXT_FIELD_WIDTH }}
          />
          <button onClick={addHyperlink}>
            Add Hyperlink
          </button>
          <br />
          <ul>
            {
              formData.hyperlinks.map((hyperlink, index) => {
                const { url, name } = hyperlink;
                return (
                  <li key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      { name }
                    </a>
                    <button style={delButtonStyles} onClick={() => removeHyperlink(index)}>
                      X
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      {
        isProjects &&
        <>
          <span style={{ fontSize: '18px' }}>
            Additional Project Properties
          </span>
          <br />
          <div>
            <label htmlFor="projectOngoing">
              Ongoing?
            </label>
            <br />
            <input 
              type="checkbox"
              id="projectOngoing"
              checked={formData.ongoing}
              onChange={() => updateField('ongoing', !formData.ongoing)}
            />
          </div>
          <div>
            <label htmlFor="projectComplete">
              Complete?
            </label>
            <br />
            <input 
              type="checkbox"
              id="projectComplete"
              checked={formData.complete}
              onChange={() => updateField('complete', !formData.complete)}
            />
          </div>
          <div>
            <label htmlFor="projectDescription">
              Project Description
            </label>
            <br />
            <textarea 
              id="projectDescription"
              value={formData.description}
              onChange={(e) => updateField('description', e.target.value)}
              placeholder="Enter project description (what it's about)..."
              style={{
                width: TEXT_FIELD_WIDTH,
                height: TEXT_FIELD_HEIGHT,
                resize: 'none'
              }}
            />
          </div>
        </>
      }
      <br />
      <button
        onClick={handleSubmit}
        style={{
          fontWeight: 'bold',
          fontSize: "18px",
          padding: "0.5em 1em",
          backgroundColor: colors.brightBlue,
          color: colors.snowWhite,
          borderColor: colors.snowWhite
        }}
      >
        Submit New Post
      </button>
    </div>
  );
}

const CreateText = ({ function: funct }) => {
  const functCondition = (funct === "/projects")
  return (
    <FormProvider>
      <CreateTextFormComponent isProjects={functCondition} />
    </FormProvider>
  );
};

export default CreateText;