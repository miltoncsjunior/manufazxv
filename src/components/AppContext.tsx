import { createContext, useContext } from 'react';

interface AppContextProps {
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
        sectionContent?: React.ReactNode;
    }[];
    year: number;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context)
        throw new Error('useAppContext deve ser usado dentro do AppProvider');
    return context;
}
