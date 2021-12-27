import styled from 'styled-components';

export const HeaderContainerStyled = styled.div`
  position: fixed;
  top: 0;
  min-width: 100vw;
  background-image: var(--darkGradient);
  z-index: 100;
`;
export const HeaderStyled = styled.header`
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

  .nav-overlay {
    min-width: 100vw;
    height: 93vh;
    position: absolute;
    top: 7vh;
    left: 0;
  }

  .nav {
    width: 55vw;
    height: 93vh;
    padding: 1rem;
    padding-left: 0.5rem;
    background-color: var(--darkColorTrans);
    backdrop-filter: blur(0.1rem);
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    button {
      margin-left: 2.5vw;
      border: none;
      background: crimson;
      padding: 0;
      color: #fff;
      padding-block: 0.5rem;
      border-radius: 4px;

      a {
        color: #fff;
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        align-items: center;
        font-size: clamp(1rem, 1.3vw, 1.4rem);
      }

      ion-icon {
        color: #fff;
        font-size: 1.5rem;
      }
    }
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

      li {
        color: var(--bgColor);
        margin-bottom: 1rem;
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        font-size: clamp(0.9rem, 1vw, 1.4rem);
        font-weight: 500;
        padding-block: 0.5rem;
        border-radius: 4px;
        background-color: var(--darkColor);

        ion-icon {
          color: inherit;
          font-size: 1.5rem;
        }
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
