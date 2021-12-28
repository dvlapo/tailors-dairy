import styled from 'styled-components';

const ClientListContainerStyled = styled.main`
  max-width: 90vw;
  margin-inline: auto;
  margin-top: 20%;

  @media (min-width: 435px) {
    margin-top: 8%;
  }

  @media (min-width: 650px) {
    max-width: 50vw;
  }

  .search-bar {
    border: 1px solid var(--lightColor);
    border-radius: 10px;
    font-size: clamp(0.8rem, 0.8vw, 1.4rem);
    font-weight: 500;
    padding: 0.2rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:focus-within {
      border: 2px solid var(--lightColor);
      outline: none;
    }

    ion-icon {
      color: var(--lightColor);
      z-index: -1;
    }

    a {
      text-decoration: none;
    }

    input {
      border: none;
      width: 100%;
      color: var(--darkColor);
      caret-color: var(--lightColor);
      background-color: var(--bgColor);

      &:focus {
        outline: none;
      }
    }
  }
  h3,
  h2 {
    text-align: center;
    margin-block: 0.8rem;
    color: var(--darkColor);
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    ion-icon {
      font-size: 1.3rem;
    }
  }
  .add-client-link {
    text-decoration: none;
  }
  .no-clients,
  p {
    font-size: clamp(1rem, 0.9vw, 1.4rem);
    color: var(--darkColor);
  }
  ul {
    padding: 0;

    li {
      background-color: #fff;
      padding: 0.3rem 0.8rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 7px;
      font-size: clamp(0.9rem, 0.8vw, 1.4rem);
      color: var(--darkColor);
      font-weight: 500;
      box-shadow: 0 2px 3px -2px var(--lightColor);
      cursor: pointer;

      ion-icon {
        font-size: clamp(1.5rem, 0.8vw, 1.4rem);
      }
      a {
        text-decoration: none;
        color: inherit;
        width: 90%;
        display: flex;
        justify-items: left;
      }
    }
  }
`;

export default ClientListContainerStyled;
