// 1) Import the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp, {myMessage} from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell Reat to take control of that element
const root = ReactDOM.createRoot(el);

// 5) show the component on the screen
root.render(<MyApp />);