'use client';

import { createContext, useState, ReactNode, useContext } from 'react';

interface DataContextType {
    data: any;
    setData: (data: any) => void;
    moveTo: string | null;
    setMoveTo: (moveTo: string | null) => void;

}

const DataContext = createContext<DataContextType>('' as any);

export const DataProvider = ({children}:{children:ReactNode}) => {
    const [data,setData] = useState<DataContextType>('' as any);
    const [moveTo,setMoveTo] = useState<string | null>(null);
    return (
      <DataContext.Provider value={{data,setData,moveTo,setMoveTo}}>
        {children}
      </DataContext.Provider>
    );  
    
}

export const useDataContext = () => useContext(DataContext);