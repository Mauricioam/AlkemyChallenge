import React from 'react';
import Header from './Header';
import { useSearch } from '../hooks/useSearch';

function Layout({children}) {


  return (
    <div>
        <Header  />
        {children}
    </div>
  )
}

export default Layout;