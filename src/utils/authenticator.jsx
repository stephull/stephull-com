import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';

const Authenticator = (ProtectedComponent) => {
  const WithAuthentication = (props) => {
    useEffect(() => {
      const checkAuth = async () => {
        try {
          const session = await Auth.currentSession();
          const accessToken = session.getAccessToken();
          const accessJwt = accessToken.getJwtToken();

          const expiry = accessJwt.getExpiration() * 1000;
          const currTime = new Date().getTime();

          if (expiry < currTime) {
            window.location.href = '/signin';
          } else {
            // ???
          }
        } catch (err) {
          console.error('Authentication error:', err);
          window.open('/signin', '_self');
        }
      }

      checkAuth();
    }, []);

    return <ProtectedComponent {...props} />
  };

  return WithAuthentication;
};

export default Authenticator;