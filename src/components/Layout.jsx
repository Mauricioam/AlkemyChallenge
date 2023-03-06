import React, { createContext } from "react";
import { useMovies } from "../hooks/useMovies";
import { useSearch } from "../hooks/useSearch";
import Header from "./Header";



function Layout({ children }) {
  

  return (
    <div>
        <Header />
        {children}
      </div>
  );
}

export default Layout;
