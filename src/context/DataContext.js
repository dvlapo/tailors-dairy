import { createContext, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // states
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
    setShowNav(false);
    window.scrollTo(0, 0);
  };

  return (
    <DataContext.Provider
      value={{
        showSearchBar,
        setShowSearchBar,
        showNav,
        setShowNav,
        toggleNav,
        toggleSearchBar,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
