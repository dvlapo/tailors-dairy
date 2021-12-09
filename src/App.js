import './globals.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import ClientList from './components/ClientList';
import { useEffect, useState } from 'react';
// import ClientDetails from './components/ClientDetails';
// import axios from 'axios';

function App() {
  // states
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginPage, setLoginPage] = useState(true);
  const [signUpPage, setSignUpPage] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    token ? setLoginSuccess(true) : setLoginSuccess(false);
  }, []);

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
      {signUpPage && (
        <SignUp
          setSignUpPage={setSignUpPage}
          setLoginPage={setLoginPage}
          setLoginSuccess={setLoginSuccess}
          setUserName={setUserName}
        />
      )}
      {!loginSuccess && loginPage && (
        <Login
          setLoginSuccess={setLoginSuccess}
          setUserName={setUserName}
          setSignUpPage={setSignUpPage}
          setLoginPage={setLoginPage}
        />
      )}
      {loginSuccess && (
        <>
          <Header
            toggleSearchBar={toggleSearchBar}
            toggleNav={toggleNav}
            showNav={showNav}
            userName={userName}
          />
          <ClientList showSearchBar={showSearchBar} />
        </>
      )}

      {/* <ClientDetails /> */}
    </div>
  );
}

export default App;
