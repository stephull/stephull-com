import { Auth } from 'aws-amplify';

Auth.configure({
    cookieStorage: { expires: 1 }
});

const storeSessionTokens = async () => {
    const session = await Auth.currentSession();

    const accessToken = session.getAccessToken().getJwtToken();
    const idToken = session.getIdToken().getJwtToken();
    const refreshToken = session.getRefreshToken().getToken();

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('refreshToken', refreshToken);
};

const checkSessionTokens = async () => {
    const pulledAccessToken = localStorage.getItem('accessToken');
    const pulledIdToken = localStorage.getItem('idToken');
    const pulledRefreshToken = localStorage.getItem('refreshToken');

    const allClear = pulledAccessToken && pulledIdToken && pulledRefreshToken;
    if (allClear) {
        try {
            // await Auth.signInWithCredentials({accessToken, idToken});
            await Auth.currentSession();
        } catch (err) {
            console.error(err);
        }
    } else {
        // ?!?
        try {
            await storeSessionTokens();
        } catch (err) {
            console.error(err);
        }
    }
};

const clearSessionTokens = async () => {
    await Auth.signOut();

    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
};

export {
    storeSessionTokens,
    checkSessionTokens,
    clearSessionTokens
}