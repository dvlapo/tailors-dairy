import './globals.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import ClientList from './components/ClientList';
import { useState } from 'react';
import ClientDetails from './components/ClientDetails';

function App() {
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
    <div>
      <Header
        toggleSearchBar={toggleSearchBar}
        toggleNav={toggleNav}
        showNav={showNav}
      />
      <ClientList showSearchBar={showSearchBar} />
      {/* <ClientDetails /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
