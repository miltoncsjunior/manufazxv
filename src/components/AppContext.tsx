import { createContext, useContext } from 'react';

interface AppContextProps {
    title: string;
    menuItems: { section: string; description: string }[];
    year: number;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context)
        throw new Error('useAppContext deve ser usado dentro do AppProvider');
    return context;
}
