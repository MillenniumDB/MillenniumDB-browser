import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedTextIndex, setSelectedTextIndex] = useState(null);
  const [regexSearch, setRegexSearch] = useState(false);

  useEffect(() => {
    if (regexSearch) {
      setRegexSearch(false);
    }
  }, [selectedTextIndex]);

  return (
    <UserContext.Provider value={{
      selectedTextIndex,
      setSelectedTextIndex,
      regexSearch,
      setRegexSearch,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('No UserContext found');
  }

  return context;
}
