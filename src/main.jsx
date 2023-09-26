/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '../App.jsx';
import './index.css';
import { worker } from './mocks/browser';

if (process.env.NODE_ENV === 'development') worker.start();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
