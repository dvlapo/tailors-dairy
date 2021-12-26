import styled from 'styled-components';

const FormStyled = styled.div`
  max-width: 90vw;
  margin-inline: auto;
  margin-top: 30%;

  @media (min-width: 425px) {
    margin-top: 10%;
  }

  h1 {
    font-size: clamp(1.2rem, 2vw, 3rem);
    color: var(--darkColor);
    text-align: center;
  }

  label {
    color: var(--darkColor);
    font-size: clamp(0.8rem, 1vw, 2.5rem);
    font-weight: 500;

    span {
      color: #000;
      font-size: clamp(0.6rem, 0.8vw, 1rem);
    }
  }
  input {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid var(--lightColor);
    border-radius: 5px;
    font-size: clamp(0.8rem, 1vw, 2.5rem);
    caret-color: var(--darkColor);

    &:focus {
      border: 2px solid var(--darkColorTrans);
      outline: none;
    }
  }
  .input {
    position: relative;
    ion-icon {
      position: absolute;
      right: 0.7rem;
      top: 0.6rem;
      color: var(--darkColor);
    }
  }

  p {
    text-align: center;
    font-size: clamp(0.8rem, 0.7vw, 0.9rem);
    margin-block: 1rem;

    span {
      color: var(--darkColor);
      cursor: pointer;
    }
  }
  p.error {
    color: crimson;
    margin-block: 0;
  }

  button {
    width: 100%;
    background-color: var(--darkColorTrans);
    padding: 0.6rem;
    margin-top: 0.5rem;
    font-size: clamp(1rem, 1.6vw, 3rem);
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }

  // loading animation
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 20px;
    bottom: 1.5rem;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--darkColorTrans);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export default FormStyled;
