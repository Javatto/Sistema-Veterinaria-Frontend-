import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.render(
    <Auth0Provider domain="ipn-escom-veterinery.us.auth0.com" clientId="DDzQmFHZYAtMJ7iVWjaxCgonFfgfWm6U" redirectUri={window.location.origin}>
        <App />
    </Auth0Provider >,
    document.getElementById('root')
);

