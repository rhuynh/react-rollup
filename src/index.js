import React from "react";
import ReactDomClient from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
const appRoot = ReactDomClient.createRoot(root);

appRoot.render(<App />);