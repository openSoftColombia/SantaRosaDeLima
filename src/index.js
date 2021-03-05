import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, container);
