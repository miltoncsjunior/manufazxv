import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import './assets/css/colors.scss';
import './assets/css/styles.css';
import { AppProvider } from './components/AppProvider.tsx';
import type { DataJson } from './types/dataJson';

import data from './data/data.json' with { type: 'json' };

const appData = data as DataJson;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AppProvider data={appData}>
                <App />
            </AppProvider>
        </BrowserRouter>
    </StrictMode>,
);
