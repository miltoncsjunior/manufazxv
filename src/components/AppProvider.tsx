import type { ReactNode } from 'react';
import type { DataJson } from '../models/DataJsonTypes';
import { AppContext } from './AppContext';

interface AppProviderProps {
    data: DataJson;
    children: ReactNode;
}

export function AppProvider({ data, children }: AppProviderProps) {
    return (
        <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>
    );
}
