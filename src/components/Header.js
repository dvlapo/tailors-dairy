import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [greeting, setGreeting] = useState('');
  const { toggleSearchBar, toggleNav, showNav } = useContext(DataContext);
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
          <div className="nav">
            <h3>{`${greeting}, ${username} `} &#128515;</h3>
            <ul>
              <Link to="/" onClick={toggleNav}>
                <li>
                  All clients<ion-icon name="people-circle-sharp"></ion-icon>
                </li>
              </Link>
              <Link to="/add-client" onClick={toggleNav}>
                <li>
                  Add new client<ion-icon name="add-circle-outline"></ion-icon>
                </li>
              </Link>
            </ul>

            <button onClick={logOut}>
              Log out<ion-icon name="log-out-outline"></ion-icon>
            </button>
          </div>
        )}

        <h2 className="logo">Tailor's dairy</h2>
        <ion-icon name="search" onClick={toggleSearchBar}></ion-icon>
      </HeaderStyled>
    </HeaderContainerSyled>
  );
};

export default Header;

// styled components

const HeaderContainerSyled = styled.div`
  position: fixed;
  top: 0;
  min-width: 100vw;
  background-image: var(--darkGradient);
  z-index: 100;
`;
const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  width: 90vw;
  height: 7vh;
  margin-inline: auto;

  ion-icon {
    color: var(--lightColor);
  }
  .nav-btn {
    background-color: var(--lightColor);
    display: grid;
    place-items: center;
    padding: 0.2rem;
    border-radius: 6px;
    ion-icon {
      color: var(--darkColor);
    }
  }

  .nav {
    position: absolute;
    top: 7vh;
    left: 0;
    min-width: 45vw;
    min-height: 100vh;
    padding: 1rem;
    padding-left: 0.5rem;
    background-color: var(--darkColorTrans);
    backdrop-filter: blur(0.1rem);
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
    }
    h3 {
      font-size: clamp(1rem, 1.1vw, 1.5rem);
      color: var(--bgColor);
      margin-left: 2.5vw;
    }
    ul {
      position: relative;
      padding: 0;
      margin-left: 2.5vw;
      margin-bottom: clamp(18rem, 90vh, 33rem);

      @media (max-width: 375px) {
        margin-bottom: 26rem;
      }
      @media (max-width: 320px) {
        margin-bottom: 23rem;
      }
      @media (min-height: 810px) {
        margin-bottom: 36rem;
      }
      li {
        color: var(--bgColor);
        margin-bottom: 1rem;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: clamp(0.9rem, 1vw, 1.4rem);
        font-weight: 500;
        ion-icon {
          color: inherit;
          font-size: 1.5rem;
        }
      }
    }
    button {
      margin-left: 2.5vw;
      border: none;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      font-size: clamp(1rem, 1.3vw, 1.4rem);
      background: none;
      padding: 0;
      color: red;

      ion-icon {
        color: red;
      }
    }
  }

  .logo {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    font-family: 'Montez', cursive;
    font-size: clamp(1.2rem, 1.5vw, 1.7rem);

    color: var(--lightColor);

    span {
      width: 2rem;
    }
  }
`;
