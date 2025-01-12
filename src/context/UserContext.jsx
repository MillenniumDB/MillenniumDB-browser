import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedTextIndex, setSelectedTextIndex] = useState(null);
  const [regexSearch, setRegexSearch] = useState(false);
  const modelString = useLoaderData();

  const [propertySearchName, setPropertySearchName] = useState(
    modelString === 'rdf' ? 'rdfs:label' : 'label'
  );

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
