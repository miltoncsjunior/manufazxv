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
                {
                    sectionName: 'about',
                    sectionTitle: 'Lorem ipsum',
                    shortcutText: 'Manuela',
                },
                {
                    sectionName: 'event',
                    sectionTitle: 'Lorem ipsum dolor imet',
                    shortcutText: 'Evento',
                },
                {
                    sectionName: 'rsvp',
                    sectionTitle: 'Lorem',
                    shortcutText: 'Confirmação',
                },
            ]}
            year={2025}
        >
            <App />
        </AppProvider>
    </StrictMode>,
);
