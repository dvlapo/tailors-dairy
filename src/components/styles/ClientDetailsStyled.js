import styled from 'styled-components';

const ClientDetailsStyled = styled.div`
  background-color: var(--bgColor);
  backdrop-filter: blur(0.1rem);
  width: 95vw;
  margin-inline: auto;
  padding: 5rem 2rem;
  padding-bottom: 2rem;
  min-height: 100vh;

  @media (min-width: 650px) {
    max-width: 50vw;
  }

  h1,
  .loading {
    font-size: clamp(1.3rem, 2vw, 3rem);
    color: var(--darkColor);
    text-align: center;
    margin-bottom: 1rem;
  }

  .loading {
    font-size: clamp(1rem, 1.3vw, 2rem);
    color: var(--darkColorTrans);
  }

  h3 {
    font-size: clamp(1rem, 1.6vw, 2.5rem);
    margin-bottom: 0.6rem;
    color: var(--darkColor);
    font-weight: 700;
    text-align: center;
  }
  .measurements {
    border-radius: 6px;
    background-color: #faf8ff;
  }
  .single-measurement {
    font-size: clamp(0.9rem, 1.5vw, 2.5rem);
    margin-bottom: 0.4rem;
    color: var(--darkColorTrans);
    padding: 0.5rem;
    border-bottom: 1px solid var(--darkColorTrans);
    display: flex;
    justify-content: space-between;

    span {
      color: var(--darkColor);
      font-weight: 500;
    }
  }
  .single-measurement:last-child {
    border: none;
  }

  .actions {
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
    }
    div,
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding-block: 0.3rem;

      ion-icon {
        color: #fff;
      }
    }

    .edit-client-btn {
      background-color: var(--darkColorTrans);
      border-bottom-left-radius: 6px;
    }

    .delete-client-btn {
      background-color: crimson;
      border-bottom-right-radius: 6px;
    }

    p {
      font-size: clamp(0.8rem, 1.4vw, 2.3rem);
      color: #fff;
    }
  }

  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    min-height: 100vh;
    inset: 0 -5%;
    z-index: 1;
  }
  .modal {
    position: relative;
    top: 40vh;
    width: 85%;
    margin-inline: auto;
    border-radius: 8px;
    background-color: #fff;
    padding: 2rem;

    h1 {
      font-size: clamp(1.3rem, 2vw, 3rem);
    }

    /* modal buttons */
    .btns {
      display: flex;
      justify-content: space-around;

      button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 6px;
        font-size: clamp(0.9rem, 1.5vw, 2.5rem);
        font-weight: 500;
        color: var(--darkColor);
      }

      .delete-btn {
        background-color: crimson;
        color: #fff;
      }
    }
  }
`;

export default ClientDetailsStyled;
