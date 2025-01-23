import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Node search bar
  const [selectedTextIndex, setSelectedTextIndex] = useState(null);
  const [selectedSearchBy, setSelectedSearchBy] = useState(null);
  const [regexSearch, setRegexSearch] = useState(false);
  const [propertySearchName, setPropertySearchName] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  // Graph settings
  const FORCE_RANGES = {
    linkDistance: {
      min: 10.0,
      step: 1.0,
      max: 250.0,
      default: 60.0,
    },
    linkStrength: {
      min: 0.0,
      max: 1.0,
      step: 0.01,
      default: 0.5,
    },
    chargeStrength: {
      min: 0.0,
      max: 1000.0,
      step: 50.0,
      default: 300.0,
    },
    center: {
      default: 0.01,
    },
  };

  const [graphForceLinkDistance, setGraphForceLinkDistance] = useState(
    FORCE_RANGES.linkDistance.default
  );
  const [graphForceLinkStrength, setGraphForceLinkStrength] = useState(
    FORCE_RANGES.linkStrength.default
  );
  const [graphForceChargeStrength, setGraphForceChargeStrength] = useState(
    FORCE_RANGES.chargeStrength.default
  );
  const [showGrid, setShowGrid] = useState(true);
  const [showNodeLabels, setShowNodeLabels] = useState(false);

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
      isDrawerOpen,
      setIsDrawerOpen,
      FORCE_RANGES,
      graphForceLinkDistance,
      setGraphForceLinkDistance,
      graphForceLinkStrength,
      setGraphForceLinkStrength,
      graphForceChargeStrength,
      setGraphForceChargeStrength,
      showGrid,
      setShowGrid,
      showNodeLabels,
      setShowNodeLabels,
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
