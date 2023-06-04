import React, { useState } from 'react';
import axios from 'axios';

import FlexRow from '../../components/flex-row';
import PageContainer from '../../components/page-container';
import colors from '../../constants/colors';

const ContactPage = () => {
  const [submitDone, setSubmitDone] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, emailAddress, howYouFound, inquiry } = e.target.elements;
    let confirm = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: emailAddress.value,
      howYouFound: howYouFound.value,
      inquiry: inquiry.value
    };
    submitForm(confirm);
  }

  const submitForm = (confirmation) => {
    try {
      axios.post('', confirmation)
        .then((res) => {
          res.status === 200 && setSubmitDone(true);
          res.status !== 200 && setSubmitError(true);
        })
        .catch((err) => console.error(err));
    } catch (err) {
      setSubmitError(true);
      console.error(err);
    }
  };

  const ContactForm = () => {
    const labelStyle = { 
      marginRight: '1em',
      display: 'flex',
      flexDirection: 'row',
      color: colors.jetBlack
    };

    const redAsterisk = (
      <div style={{ 
        color: colors.cherryRed, 
        marginLeft: '0.25em',
        fontSize: '16px'
      }}> * </div>
    );

    return (
      <form 
        id="contact-form" 
        onSubmit={onSubmit}
        style={{ marginLeft: '0.75em' }}
      >
        <FlexRow>
          <div className="form-group" style={{ marginRight: '1em' }}>
            <label 
              htmlFor="firstName"
              style={labelStyle}
            >
              <FlexRow>
                First name
                {redAsterisk}
              </FlexRow>
            </label>
            <input 
              type='text' 
              id="firstName"
              className="form-control" 
              required
              style={{ width: '240px' }}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="lastName"
              style={labelStyle}
            >
              Last name
            </label>
            <input 
              type='text'
              id="lastName"
              className="form-control"
              style={{ width: '240px' }}
            />
          </div>
        </FlexRow>
        <br />
        <FlexRow>
          <div className="form-group" style={{ marginRight: '1em' }}>
            <label
              htmlFor="emailAddress"
              style={labelStyle}
            >
              <FlexRow>
                Email address
                {redAsterisk}
              </FlexRow>
            </label>
            <input 
              type='email'
              id="emailAddress"
              className="form-control"
              required
              style={{ width: '240px' }}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="howYouFound"
              style={labelStyle}
            >
              How did you find us?
            </label>
            <input 
              type='text'
              id="howYouFound"
              className="form-control"
              style={{ width: '240px' }}
            />
          </div>
        </FlexRow>
        <br />
        <div className="form-group">
          <label
            htmlFor="inquiry"
            style={labelStyle}
          >
            <FlexRow>
              Message
              { redAsterisk }
            </FlexRow>
          </label>
          <textarea 
            required
            className="form-control"
            id="inquiry"
            style={{
              height: 'auto',
              width: '505px',
              minWidth: '505px',
              maxWidth: '505px',
              height: '150px',
              minHeight: '50px',
              maxHeight: '300px'
            }}
          />
        </div>
        <br />
        <button type='submit' className="btn btn-primary">
          Submit
        </button>
        <br />
        {
          submitDone &&
          <div style={{ color: colors.jadedGreen }}>
            Thank you for your submission. We'll get back to you sometime soon.
          </div>
        }
        {
          submitError &&
          <div style={{ color: colors.cherryRed }}>
            We have detected an error. Please try again later.
          </div>
        }
      </form>
    );
  };

  return (
    <>
      <h2 style={{
        color: colors.jetBlack,
        marginLeft: '0.5em'
      }}>
        Contact
      </h2>
      <PageContainer indent>
        <p style={{ 
          marginTop: '-0.125em', 
          maxWidth: '540px', 
          marginLeft: '0.75em' 
        }}>
          Feel free to leave some comments/suggestions, or make an inquiry if you're interested in working or connecting with me! <b>Thanks in advance.</b>
        </p>
        <ContactForm />
      </PageContainer>
    </>
  );
};

export default ContactPage;