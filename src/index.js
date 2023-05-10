import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './components/ContactForm/contactForm.css';
import './components/ContactList/contactList.css';
import './components/Filter/filter.css';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
