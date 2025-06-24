import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AppProvider } from './components/AppProvider.tsx';
import './css/colors.scss';
import './css/styles.css';
import './js/scripts.js';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProvider
            title="Manu faz XV"
            menuItems={[
                { section: 'about', description: 'Manuela' },
                { section: 'event', description: 'Evento' },
                { section: 'rsvp', description: 'Confirmação' },
            ]}
            year={2025}
        >
            <App />
        </AppProvider>
    </StrictMode>,
);
