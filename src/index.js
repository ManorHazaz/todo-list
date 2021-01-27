import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core' //allows later to just use icon name to render-them
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faTimes, faPlusCircle, faFolder, faMusic, faBriefcase, faBriefcaseMedical, faUtensils, faChild, faLock } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faArrowLeft, faTimes, faPlusCircle, faFolder, faMusic, faBriefcase, faBriefcaseMedical, faUtensils, faChild, faLock)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
