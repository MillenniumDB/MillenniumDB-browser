import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedTextIndex, setSelectedTextIndex] = useState(null);
  const [regexSearch, setRegexSearch] = useState(false);
  const [propertySearchName, setPropertySearchName] = useState('');

  useEffect(() => {
    setRegexSearch(false);
  }, [selectedTextIndex]);

  return (
    <UserContext.Provider value={{
      selectedTextIndex,
      setSelectedTextIndex,
      regexSearch,
      setRegexSearch,
      propertySearchName,
      setPropertySearchName,
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
