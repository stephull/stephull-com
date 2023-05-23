import { Auth } from 'aws-amplify';
import * as session from './sessionTokenHandlers';

const signIn = async (user, pass) => {
    try {
        const u = await Auth.signIn(user, pass);
        console.log(u, "signed in successfully");

        await session.checkSessionTokens();
    } catch (err) {
        console.error("Sign in error:", err);
    }
};

const signOut = async () => {
    try {
        await session.clearSessionTokens();
        window.location.href = '/';
        console.log("Sign out successful");
    } catch (err) {
        console.log("Sign out error:", err);
    }
};

export {
    signIn,
    signOut
};