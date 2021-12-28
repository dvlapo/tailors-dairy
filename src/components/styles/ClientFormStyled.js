import styled from 'styled-components';

const ClientFormStyled = styled.div`
  background-color: var(--bgColor);
  backdrop-filter: blur(0.1rem);
  width: 85%;
  margin-inline: auto;
  margin-bottom: 4rem;
  padding: 5rem 1rem;
  height: 100vh;
  color: var(--darkColor);
  z-index: 2;

  @media (min-width: 650px) {
    max-width: 50vw;
  }

  h2 {
    font-size: clamp(1.2rem, 2vw, 3rem);
    color: var(--darkColor);
    text-align: center;
    margin-bottom: 1rem;
  }
  .name-field {
    border-bottom: 1px solid var(--darkColorTrans);
    padding-bottom: 0.6rem;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.6rem;

    input {
      margin-right: 0;
      font-size: 1.3rem;
    }
  }
  .name-input,
  .measurement-input {
    margin-right: 1rem;
    border: 1px solid var(--lightColor);
    border-radius: 5px;
    margin-right: auto;
    padding: 0.2rem 0.5rem;
    color: var(--darkColor);

    &:focus {
      border: 2px solid var(--darkColor);
      outline: none;
    }
  }
  .name-input {
    width: 80%;
  }
  .measurement-input {
    width: 40%;
  }
  label {
    font-weight: 500;
    font-size: clamp(0.9rem, 1vw, 1.1rem);
  }

  button {
    width: 100%;
    background-color: var(--darkColorTrans);
    padding: 0.5rem 0.5rem;
    font-size: clamp(1.3rem, 1.6vw, 3rem);
    margin-block: 2rem;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
`;

export default ClientFormStyled;
