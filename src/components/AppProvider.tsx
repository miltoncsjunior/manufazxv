import type { ReactNode } from 'react';
import { AppContext } from './AppContext';

interface AppProviderProps {
    children: ReactNode;
    title: string;
    headerItems: {
        tags: string[];
        title: string;
        subtitle: string;
    };
    sectionItems: {
        sectionName: string;
        shortcutText: string;
        sectionTitle: string;
        sectionSubtitle?: string;
        sectionContent?: React.ReactNode;
    }[];
    year: number;
}

export function AppProvider({
    children,
    title,
    headerItems,
    sectionItems,
    year,
}: AppProviderProps) {
    return (
        <AppContext.Provider value={{ title, headerItems, sectionItems, year }}>
            {children}
        </AppContext.Provider>
    );
}
