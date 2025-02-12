import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize template scripts after React mounts
function initializeTemplateScripts() {
  // @ts-ignore
  if (window.WOW) {
    // @ts-ignore
    new window.WOW().init();
  }

  // Hide spinner
  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.classList.remove('show');
    }, 1);
  }
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Initialize after a short delay to ensure DOM is ready
setTimeout(initializeTemplateScripts, 100);