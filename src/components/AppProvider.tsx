import type { ReactNode } from 'react';
import { AppContext } from './AppContext';

interface AppProviderProps {
    children: ReactNode;
    title: string;
    menuItems: {
        sectionName: string;
        sectionTitle: string;
        shortcutText: string;
    }[];
    year: number;
}

export function AppProvider({
    children,
    title,
    menuItems,
    year,
}: AppProviderProps) {
    return (
        <AppContext.Provider value={{ title, menuItems, year }}>
            {children}
        </AppContext.Provider>
    );
}
