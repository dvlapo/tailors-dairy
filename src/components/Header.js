import styled from 'styled-components';

const Header = ({ toggleSearchBar, toggleNav, showNav }) => {
  return (
    <HeaderContainerSyled>
      <HeaderStyled>
        <div className="nav-btn" onClick={toggleNav}>
          <ion-icon name="grid-sharp"></ion-icon>
        </div>
        {showNav && (
          <div className="nav">
            <ul>
              <li>
                All clients<ion-icon name="people-circle-sharp"></ion-icon>
              </li>
              <li>
                Add new client<ion-icon name="add-circle-outline"></ion-icon>
              </li>
            </ul>

            <button>
              Log out<ion-icon name="log-out-outline"></ion-icon>
            </button>
          </div>
        )}

        <h2 className="logo">Measure</h2>
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
  /* background-color: var(--darkColor); */
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
    border-radius: 5px;
    ion-icon {
      color: var(--darkColor);
    }
  }

  .nav {
    position: absolute;
    top: 7.1vh;
    left: 0;
    min-width: 45vw;
    min-height: 100vh;
    padding: 1rem;
    padding-left: 0.5rem;
    background-color: var(--darkColorTrans);
    backdrop-filter: blur(0.1rem);
    display: flex;
    flex-direction: column;

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
      font-size: clamp(0.9rem, 1vw, 1.4rem);
      background: none;
      padding: 0;
      color: crimson;
    }
  }

  .logo {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    font-family: 'Montez', cursive;
    color: var(--lightColor);

    span {
      width: 2rem;
    }
  }
`;
