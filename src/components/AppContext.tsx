import { createContext, useContext } from 'react';
import type { DataJson } from '../models/DataJsonTypes';

interface AppContextProps {
    data: DataJson;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context)
        throw new Error('useAppContext deve ser usado dentro do AppProvider');
    return context;
}
