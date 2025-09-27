import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import './global_styles/index.ts';
import App from './App';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
  </StrictMode>
);
