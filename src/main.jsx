import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/auth-ui-formik" future={{ v7_startTransition: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
