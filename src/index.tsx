import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import {Provider} from 'react-redux';
import Amplify from 'aws-amplify';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/configureStore';
import config from './aws-exports';

dotenv.config();
Amplify.configure(config);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
