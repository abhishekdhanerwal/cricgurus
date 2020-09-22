import './public/favicon.ico';
// import './assets/common/styles/styles.css';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'typeface-roboto';

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
