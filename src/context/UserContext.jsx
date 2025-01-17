import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedTextIndex, setSelectedTextIndex] = useState(null);
  const [selectedSearchBy, setSelectedSearchBy] = useState(null);
  const [regexSearch, setRegexSearch] = useState(false);
  const [propertySearchName, setPropertySearchName] = useState('');

  return (
    <UserContext.Provider value={{
      selectedTextIndex,
      setSelectedTextIndex,
      selectedSearchBy,
      setSelectedSearchBy,
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
