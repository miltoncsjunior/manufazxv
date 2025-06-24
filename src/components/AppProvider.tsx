import type { ReactNode } from 'react';
import { AppContext } from './AppContext';

interface AppProviderProps {
    children: ReactNode;
    title: string;
    menuItems: { section: string; description: string }[];
    year: number;
}

export function AppProvider({ children, title, menuItems, year }: AppProviderProps) {
    return (
        <AppContext.Provider value={{ title, menuItems, year }}>
            {children}
        </AppContext.Provider>
    );
}
