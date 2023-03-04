import React, { createContext } from "react";
import { useSearch } from "../hooks/useSearch";
import Header from "./Header";

export const SearchContext = createContext(null);

function Layout({ children }) {
  const { search, setSearch, error } = useSearch();

  return (
    <SearchContext.Provider value={{search, setSearch, error}}>
      <div>
        <Header />
        {children}
      </div>
    </SearchContext.Provider>
  );
}

export default Layout;
