import { useContext, useEffect, useState } from 'react';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
import { HeaderStyled, HeaderContainerSyled } from './styles/HeaderStyled';

const Header = () => {
  const [greeting, setGreeting] = useState('');
  const { toggleSearchBar, toggleNav, showNav, setShowNav } =
    useContext(DataContext);
  const [username, setUsername] = useState('');

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tailorname');
    window.location.reload();
  };

  useEffect(() => {
    switch (new Date().getHours()) {
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
        setGreeting('Good afternoon');
        break;
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
        setGreeting('Good evening');
        break;
      default:
        setGreeting('Good morning');
        break;
    }

    const userName = localStorage.getItem('tailorname');
    setUsername(userName);
  }, []);

  return (
    <HeaderContainerSyled>
      <HeaderStyled>
        <div className="nav-btn" onClick={toggleNav}>
          <ion-icon name="menu-sharp"></ion-icon>
        </div>
        {showNav && (
          <div className="nav-overlay" onClick={() => setShowNav(false)}>
            <div className="nav">
              <div>
                <h3>{`${greeting}, ${username} `} &#128515;</h3>
                <ul>
                  <Link to="/" onClick={toggleNav}>
                    <li>
                      All clients
                      <ion-icon name="people-circle-sharp"></ion-icon>
                    </li>
                  </Link>
                  <Link to="/add-client" onClick={toggleNav}>
                    <li>
                      Add new client
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </li>
                  </Link>
                </ul>
              </div>

              <button onClick={logOut}>
                Log out<ion-icon name="log-out-outline"></ion-icon>
              </button>
            </div>
          </div>
        )}

        <h2 className="logo">Tailor's diary</h2>
        <ion-icon name="search" onClick={toggleSearchBar}></ion-icon>
      </HeaderStyled>
    </HeaderContainerSyled>
  );
};

export default Header;
