import React, { createContext, useContext, useState } from "react";

interface SearchContextType {
  searchCriteria: string;
  setSearchCriteria: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider= ({ children }: { children: React.ReactNode }) => {
  const [searchCriteria, setSearchCriteria] = useState("");

  return (
    <SearchContext.Provider value={{ searchCriteria, setSearchCriteria }}>
      {children}
    </SearchContext.Provider>
  );
};
