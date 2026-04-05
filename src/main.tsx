import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

window.addEventListener('error', (event) => {
  const errorDisplay = document.createElement('div');
  errorDisplay.style.position = 'fixed';
  errorDisplay.style.top = '0';
  errorDisplay.style.left = '0';
  errorDisplay.style.width = '100%';
  errorDisplay.style.height = '100%';
  errorDisplay.style.backgroundColor = 'red';
  errorDisplay.style.color = 'white';
  errorDisplay.style.padding = '20px';
  errorDisplay.style.zIndex = '9999';
  errorDisplay.innerHTML = `<h1>Runtime Error</h1><pre>${event.error?.stack || event.message}</pre>`;
  document.body.appendChild(errorDisplay);
});

try {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (error: any) {
  const errorDisplay = document.createElement('div');
  errorDisplay.style.position = 'fixed';
  errorDisplay.style.top = '0';
  errorDisplay.style.left = '0';
  errorDisplay.style.width = '100%';
  errorDisplay.style.height = '100%';
  errorDisplay.style.backgroundColor = 'darkred';
  errorDisplay.style.color = 'white';
  errorDisplay.style.padding = '20px';
  errorDisplay.style.zIndex = '9999';
  errorDisplay.innerHTML = `<h1>Render Error</h1><pre>${error?.stack || error}</pre>`;
  document.body.appendChild(errorDisplay);
}
