import React, { useState } from 'react';
import axios from 'axios';

import FlexRow from '../../components/flex-row';
import PageContainer from '../../components/page-container';
import colors from '../../constants/colors';

import { graphqlApi } from "../../envConfig";
import awsmobile from '../../aws-exports';

const ContactPage = () => {
  const [submitDone, setSubmitDone] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // when user immediately clicks 'Submit'
  // call function to POST endpoint to send contact data
  const onSubmit = async (e) => {
    const { firstName, lastName, emailAddress, howYouFound, inquiry } = e.target.elements;
    try {
      e.preventDefault();

      const sendData = {
        firstName: firstName.value, 
        lastName: lastName.value,
        emailAddress: emailAddress.value,
        howYouFound: howYouFound.value,
        inquiry: inquiry.value
      };

      const graphqlQuery = `
        mutation CreateFormContact($input: ContactFormInput!) {
          createFormContact(input: $input) {
            id
            success
            message
          }
        }
      `;

      const response = await axios.post(
        graphqlApi, {
          query: graphqlQuery,
          variables: { input: sendData }
        }, {
          headers: { 
            'Content-Type': 'application/json',
            'x-api-key': awsmobile.aws_appsync_apiKey
          },
        }
      );

      console.log(response);

      response.status === 200 && setSubmitDone(true)
    } catch (err) {
      setSubmitError(true);
      console.error(err);
    }
  }

  // contact form component
  const ContactForm = () => {
    const labelStyle = {
      marginRight: '1em',
      display: 'flex',
      flexDirection: 'row',
      color: colors.snowWhite,
      fontWeight: '400',
      fontSize: '17px'
    }, textFieldStyle = {
      width: '240px',
      height: '24px'
    };

    const asterisk = (
      <div style={{
        color: colors.brightOrange,
        marginLeft: '0.25em',
        fontSize: '18px'
      }}>
        {" * "}
      </div>
    );

    return (
      <form
        id="contact-form"
        onSubmit={onSubmit}
        style={{
          marginLeft: '0.75em',
        }}
      >
        <div style={{
          backgroundColor: colors.brightBlue,
          padding: '0.5em 1em'
        }}>
          <FlexRow>
            <div className="form-group" style={{ marginRight: '1em' }}>
              <label
                htmlFor="firstName"
                style={labelStyle}
              >
                <FlexRow>
                  First name
                  {asterisk}
                </FlexRow>
              </label>
              <input
                type='text'
                id="firstName"
                className="form-control"
                required
                style={textFieldStyle}
                key="firstName"
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
                style={textFieldStyle}
                key="lastName"
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
                  {asterisk}
                </FlexRow>
              </label>
              <input
                type='email'
                id="emailAddress"
                className="form-control"
                required
                style={textFieldStyle}
                key="emailAddress"
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
                style={textFieldStyle}
                key="howYouFound"
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
                {asterisk}
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
                maxHeight: '300px',
              }}
              key="inquiry"
            />
          </div>
        </div>
        <br />
        <button
          type='submit'
          className="btn btn-primary"
          style={{
            fontSize: '18px',
            padding: '0.5em 1em',
            backgroundColor: colors.brightBlue,
            color: colors.snowWhite,
            borderColor: colors.snowWhite,
          }}
        >
          Submit
        </button>
        <br />
        {
          submitDone &&
          <div style={{ color: colors.skyBlue }}>
            Thank you for your submission. We'll get back to you sometime soon.
          </div>
        }
        {
          submitError &&
          <div style={{ color: colors.lightOrange }}>
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
          Feel free to leave some comments/suggestions, or make an inquiry if you're interested in working or connecting with me! 
          A response email will be made whenever readily available. {'\n'}
          <b>Thanks in advance.</b>
        </p>
        <ContactForm />
      </PageContainer>
    </>
  );
};

export default ContactPage;