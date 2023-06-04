import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { randomRoute as r } from '../../envConfig';
import FlexColumn from '../../components/flex-column';

const PrivateAdminSigninPage = () => {
  const [creds, setCreds] = useState({
    username: "", password: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    name === 'username' && setCreds({
      ...creds, username: value
    });
    name === 'password' && setCreds({
      ...creds, password: value
    });
  };

  const formSubmission = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(username, password);
      const session = await Auth.currentSession();
      const accessToken = session.getAccessToken().getJwtToken();

      sessionStorage.setItem('token', accessToken);
      window.open(`/${r}`, "_self");
    } catch (err) {
      console.log('Login error:', err);
      // other error stuff
    }
  };

  const SignInForm = () => {
    return (
      <form onSubmit={formSubmission}>
        <input
          type='text'
          name='username'
          value={creds.username}
          onChange={handleOnChange}
          placeholder="Username/email"
        />
        <br/>
        <input
          type='password'
          name='password'
          value={creds.password}
          onChange={handleOnChange}
          placeholder="Password"
        />
        <br/>
        <button type="submit">
          Login
        </button>
      </form>
    )
  }

  return (
    <FlexColumn>
      <small>Testing page...</small>
      <br/>
      <SignInForm />
    </FlexColumn>
  );
};

export default PrivateAdminSigninPage;