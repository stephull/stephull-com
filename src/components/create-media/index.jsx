import React, { createContext, useContext, useState } from 'react';

import { API } from 'aws-amplify';
import { API_NAME } from '../../config';

import DatePicker, { CalendarContainer } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { checkForChronologicalOrder } from '../../utils/checkForChronologicalOrder';

import colors from '../../constants/colors';
import { createBlogPost, createPicturePost } from '../../endpoints';

import { 
  TEXT_FIELD_WIDTH, 
  TEXT_FIELD_HEIGHT, 
  DATE_PICKER_WIDTH, 
  delButtonStyles,
  calendarStyles,
  calendarContainerStyles
} from '../../constants/admin';

import MarkdownText from '../markdown-text';

const PICTURE_PREVIEW_WIDTH = '480px'; 

const MediaFormContext = createContext();

const MediaFormProvider = ({ isBlog, children }) => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    uploadDate: null,
    likes: 0,
    media: [],
    paragraphs: [],
    links: []
  });

  const [currentMedia, setCurrentMedia] = useState({
    source: "", caption: "", type: ""
  });
  const [currentParagraph, setCurrentParagraph] = useState({
    text: "", markdown: false
  });
  const [currentLink, setCurrentLink] = useState({
    url: "", name: ""
  });

  const [fileUploadPreview, setFileUploadPreview] = useState(null);
  const handleFileUploadPreviewChange = (e) => {
    const file = e.target.files[0];
    if (!!file) {
      setFileUploadPreview(file);
      setCurrentMedia((media) => ({
        ...media,
        source: file,
        type: file.type
      }));
    }
  };

  const updateField = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  }

  const addMedia = () => {
    setFileUploadPreview(null);
    if (
      currentMedia.source.toString().trim() !== "" 
      && currentMedia.caption.trim() !== "" 
      && currentMedia.type.trim() !== ""
    ) {
      setFormData((prevData) => ({
        ...prevData,
        media: [...prevData.media, currentMedia]
      }));
      setCurrentMedia({
        source: "", caption: "", type: ""
      });
    }
  };

  const addParagraph = () => {
    if (currentParagraph.text.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        paragraphs: [...prevData.paragraphs, currentParagraph]
      }));
      setCurrentParagraph({
        text: "", markdown: false
      });
    }
  };

  const addLink = () => {
    if (
      currentLink.url.trim() !== "" &&
      currentLink.name.trim()
    ) {
      setFormData((prevData) => ({
        ...prevData,
        links: [...prevData.links, currentLink]
      }));
      setCurrentLink({
        url: "", name: ""
      });
    }
  };

  const removeMedia = (index) => {
    setFormData((prevData) => {
      const newMedia = [...prevData.media];
      newMedia.splice(index, 1);
      return {
        ...prevData,
        media: newMedia
      }
    });
  };

  const removeParagraph = (index) => {
    setFormData((prevData) => {
      const newParagraphs = [...prevData.paragraphs];
      newParagraphs.splice(index, 1);
      return {
        ...prevData,
        paragraphs: newParagraphs
      }
    });
  };

  const removeLink = (index) => {
    setFormData((prevData) => {
      const newLinks = [...prevData.links];
      newLinks.splice(index, 1);
      return {
        ...prevData,
        links: newLinks
      }
    });
  };

  const clearOfMissingFields = () => {
    const {
      title,
      uploadDate,
      media,
      paragraphs
    } = formData;

    if (
      title.trim() === "" || uploadDate === null
    ) {
      return false;
    }

    if (!isBlog && media.length < 1) {
      return false;
    }

    if (isBlog && paragraphs.length < 1) {
      return false;
    }

    return true;
  }

  const [submitDone, setSubmitDone] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async () => {
    if (clearOfMissingFields()) {
      const endpoint = (isBlog) ? createBlogPost : createPicturePost;
      const response = await API.post(API_NAME, endpoint, {
        body: formData, headers: {}
      });

      let responseBody = JSON.parse(response.body);
      let responseData = responseBody.data.createMediaPostComponent;

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
    currentMedia,
    setCurrentMedia,
    currentParagraph,
    setCurrentParagraph,
    currentLink,
    setCurrentLink,
    fileUploadPreview,
    setFileUploadPreview,
    handleFileUploadPreviewChange,
    updateField,
    addMedia,
    addParagraph,
    addLink,
    removeMedia,
    removeParagraph,
    removeLink,
    handleSubmit,
    submitDone,
    submitError
  };

  return (
    <MediaFormContext.Provider value={formState}>
      { children }
    </MediaFormContext.Provider>
  );
}

const CreateMediaFormComponent = ({ isBlog }) => {
  const {
    formData,
    currentMedia,
    setCurrentMedia,
    currentParagraph,
    setCurrentParagraph,
    currentLink,
    setCurrentLink,
    fileUploadPreview,
    setFileUploadPreview,
    handleFileUploadPreviewChange,
    updateField,
    addMedia,
    addParagraph,
    addLink,
    removeMedia,
    removeParagraph,
    removeLink,
    handleSubmit,
    submitDone,
    submitError
  } = useContext(MediaFormContext);

  const customizedCalendar = ({ className, children }) => {
    return (
      <div style={calendarStyles}>
        <CalendarContainer className={className}>
          <div style={calendarContainerStyles}>
            { className }
          </div>
          <div style={{ position: 'relative' }}>
            { children }
          </div>
        </CalendarContainer>
      </div>
    );
  };

  const handleUploadDateChronology = (date) => {
    if (checkForChronologicalOrder(date)) {
      updateField('uploadDate', date);
    }
  };

  const filePreviewStyles = {
    width: PICTURE_PREVIEW_WIDTH,
    height: 'fit-content'
  };

  const markdownPreviewStyles = {
    backgroundColor: 'white',
    border: `1.5px solid ${colors.brightBlue}`,
    padding: '0 0.5em',
    width: TEXT_FIELD_WIDTH
  };

  // return the following
  return (
    <div>
      <button onClick={() => {
        window.open('/admin', '_self')
      }}>
        Back to Admin Dashboard
      </button>
      <br />
      <h4>
        { isBlog ? "Create Blog Post" : "Create Picture Post" }
      </h4>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input 
          type='text'
          id="title"
          value={formData.title}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Main title for post..."
          required
          style={{ width: TEXT_FIELD_WIDTH }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="location">Location</label>
        <br />
        <input 
          type='text'
          id="location"
          value={formData.location}
          onChange={(e) => updateField('location', e.target.value)}
          placeholder="Enter location (optional) of post..."
          style={{ width: TEXT_FIELD_WIDTH }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="uploadDate">Upload Date</label>
        <br />
        <small style={{ fontWeight: 'bold' }}>
          Need to pick a date before or no later than today.
        </small>
        <br />
        <DatePicker 
          selected={formData.uploadDate}
          onChange={(date) => handleUploadDateChronology(date)}
          id='uploadDate'
          required
          placeholderText="Click for date of publication"
          style={{ width: DATE_PICKER_WIDTH }}
          calendarContainer={customizedCalendar}
        />
      </div>
      <br />
      <div>
        <label htmlFor="media">
          Media (Pictures/Videos)
        </label>
        <br />
        {
          !isBlog &&
          <>
            <small style={{ fontWeight: 'bold' }}>
              At least one picture required for media post.
            </small>
            <br />
          </>
        }
        <label htmlFor="media-media">
          <small>Media Upload</small>
        </label>
        <input 
          type='file'
          accept="image/*,video/*"
          onChange={handleFileUploadPreviewChange}
        />
        {
          fileUploadPreview &&
          fileUploadPreview.type &&
          <>
            <br/>
            <div>
              {
                fileUploadPreview.type.startsWith('image/') ? (
                  <img 
                    src={URL.createObjectURL(fileUploadPreview)} 
                    alt="Preview"
                    style={filePreviewStyles}
                  />
                ) : (
                  <video controls>
                    <source 
                      src={URL.createdObjectURL(fileUploadPreview)}
                      type={fileUploadPreview.type}
                      style={filePreviewStyles}
                    />
                    <span>
                      Your browser does not support the video tag.
                    </span>
                  </video>
                )
              }
            </div>
          </>
        }
        <br/>
        <label htmlFor="media-caption">
          <small>Caption</small>
        </label>
        <input 
          type='text'
          id="media-caption"
          value={currentMedia.caption}
          onChange={(e) => {
            setCurrentMedia({
              ...currentMedia,
              caption: e.target.value
            });
          }}
          placeholder="Add a caption..."
          required
          style={{ width: TEXT_FIELD_WIDTH }}
        /> 
        <br />
        <button onClick={addMedia}>
          Add Media (Picture/Video)
        </button>
        <br />
        <ul>
          {
            formData.media.map((m, index) => {
              let { source, caption, type } = m;
              return (
                <li key={index}>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      width: '120px',
                      height: 'auto'
                    }}>
                      <img 
                        src={URL.createObjectURL(source)} 
                        alt={caption} 
                        style={{ width: '120px', height: 'fit-content' }}
                      />
                    </div>
                    <div style={{ padding: '0 5px' }}>
                      <b>{ source ? source.name : "No file uploaded" }</b>
                      <br/>
                      <span>{ caption }</span>
                      <br/>
                      <small>{ type }</small>
                    </div>
                    <button style={delButtonStyles} onClick={() => removeMedia(index)}>
                      X
                    </button>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
      {
        isBlog &&
        <>
          <br />
            <div>
              <label htmlFor="paragraphs">
                Paragraphs
              </label>
              <br />
              {
                isBlog &&
                <>
                  <small style={{ fontWeight: 'bold' }}>
                    At least one paragraph required for blog post.
                  </small>
                  <br />
                </>
              }
              <label htmlFor="paragraph-markdown">
                <small>Markdown?</small>
              </label>
              <input 
                type='checkbox'
                id="paragraph-markdown"
                checked={currentParagraph.markdown}
                onChange={() => setCurrentParagraph({
                  ...currentParagraph, markdown: !currentParagraph.markdown
                })}
              />
              <br />
              {
                currentParagraph.markdown ? (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                  }}>
                    <textarea 
                      id=""
                      style={{ 
                        width: TEXT_FIELD_WIDTH,
                        height: TEXT_FIELD_HEIGHT,
                        marginRight: '1em'
                      }}
                      value={currentParagraph.text}
                      onChange={(e) => setCurrentParagraph({
                        ...currentParagraph, text: e.target.value
                      })}
                      required={(
                        currentParagraph.markdown && isBlog 
                        && formData.paragraphs.length < 1
                      )}
                    />
                    <div style={{ marginTop: '-1em' }}>
                      {
                        currentParagraph.text.trim() !== "" &&
                        <>
                        <span>PREVIEW</span>
                        <MarkdownText source={currentParagraph.text} edits={markdownPreviewStyles} />
                        </>
                      }
                    </div>
                  </div>
                ) : (
                  <div>
                    <textarea 
                      id=""
                      value={currentParagraph.text}
                      onChange={(e) => setCurrentParagraph({
                        ...currentParagraph, text: e.target.value
                      })}
                      style={{
                        width: TEXT_FIELD_WIDTH,
                        height: TEXT_FIELD_HEIGHT
                      }}
                      required={(
                        isBlog && formData.paragraphs.length < 1
                      )}
                    />
                  </div>
                )
              }
              <button onClick={addParagraph}>
                Add Paragraph
              </button>
              <br />
              <ul>
                {
                  formData.paragraphs.map((paragraph, index) => {
                    const { text, markdown } = paragraph;
                    return (
                      <li key={index}>
                        {
                          markdown ? 
                            <MarkdownText source={text} /> : 
                            <span>{text}</span>
                        }
                        <button style={delButtonStyles} onClick={() => removeParagraph(index)}>
                          X
                        </button>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
        </>
      }
      <br />
      <div>
        <label htmlFor="links">
          Hyperlinks (references)
        </label>
        <div>
          <input 
            type='text'
            value={currentLink.url}
            onChange={(e) => {
              setCurrentLink({
                ...currentLink, url: e.target.value
              })
            }}
            placeholder="Enter URL link here..."
            style={{ width: TEXT_FIELD_WIDTH }}
          />
          <br />
          <input 
            type='text'
            value={currentLink.name}
            onChange={(e) => {
              setCurrentLink({
                ...currentLink, name: e.target.value
              })
            }}
            placeholder="Enter the name of link..."
            style={{ width: TEXT_FIELD_WIDTH }}
          />
          <br />
          <button onClick={addLink}>
            Add Link
          </button>
          <br />
          <ul>
            {
              formData.links.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      { link.name }
                    </a>
                    <button style={delButtonStyles} onClick={() => removeLink(index)}>
                      X
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
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
      {
        submitError &&
        <span>
          Error encountered. Try again.
        </span>
      }
      {
        submitDone &&
        <span>
          Thank you for the upload!
        </span>
      }
    </div>
  );
};

const CreateMedia = ({ function: funct }) => {
  const functCondition = (funct === "/blog");
  return (
    <MediaFormProvider isBlog={functCondition}>
      <CreateMediaFormComponent isBlog={functCondition} />
    </MediaFormProvider>
  );
};

export default CreateMedia;