import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports.js';

Amplify.configure(awsconfig);

const rootElement = document.getElementById('root');
const created = createElement(App, null);

const root = createRoot(rootElement);
root.render(created);

module.hot.accept();