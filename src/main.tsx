import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './assets/css/colors.scss';
import './assets/css/styles.css';
import './assets/js/scripts.js';
import { AppProvider } from './components/AppProvider.tsx';
import data from './data/data.json' with { type: 'json' };
import { type DataJson } from './models/DataJsonTypes.ts';

const appData = data as DataJson;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProvider data={appData}>
            <App />
        </AppProvider>
    </StrictMode>,
);
