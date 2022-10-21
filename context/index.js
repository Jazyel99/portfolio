import { createContext } from 'react';

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const context = {}
  return <AppContext.Provider value={ context }>{children}</AppContext.Provider>
}
