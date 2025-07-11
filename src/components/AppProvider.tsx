import type { ReactNode } from 'react';
import type { DataJson } from '../types/dataJson';
import { AppContext } from './appContext';

interface AppProviderProps {
    data: DataJson;
    children: ReactNode;
}

export function AppProvider({ data, children }: AppProviderProps) {
    return (
        <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>
    );
}
