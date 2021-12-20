import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const SignUp = ({
  setSignUpPage,
  setLoginPage,
  setLoginSuccess,
  setUserName,
}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordUnmatch, setPasswordUnmatch] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const [loading, setLoading] = useState(false);

  const goToLogin = () => {
    setSignUpPage(false);
    setLoginPage(true);
  };

  const login = async () => {
    try {
      const { data } = await axios.post(
        'https://measure-client-api.herokuapp.com/api/v1/auth/login',
        { email, password }
      );
      if (data) {
        setLoginSuccess(true);
        setSignUpPage(false);
        setUserName(data.user.username);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setLoading(true);
      try {
        const { data } = await axios.post(
          'https://measure-client-api.herokuapp.com/api/v1/auth/register',
          { username, email, password }
        );
        setSignUpPage(false);
        localStorage.setItem('token', data.token);
        localStorage.setItem('tailorname', data.user.username);
        login();
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
      setPasswordUnmatch(false);
    } else if (email === '' || password === '' || confirmPassword === '') {
      setEmptyFields(true);
    } else {
      setPasswordUnmatch(true);
    }
  };

  return (
    <FormStyled>
      <h1>Sign Up For Free</h1>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          placeholder="Please enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
            setPasswordUnmatch(false);
            setEmptyFields(false);
            setLoading(false);
          }}
        />

        <label>
          Username: <span>(must be more than 3 chars)</span>
        </label>
        <input
          type="text"
          value={username}
          placeholder="Enter a username"
          onChange={(e) => {
            setUsername(e.target.value);
            setPasswordUnmatch(false);
            setEmptyFields(false);
            setLoading(false);
          }}
        />

        <label>
          Password: <span>(must be more than 5 chars)</span>
        </label>
        <input
          type="password"
          value={password}
          placeholder="******"
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordUnmatch(false);
            setEmptyFields(false);
            setLoading(false);
          }}
        />

        <label>Confirm password:</label>
        <input
          type="password"
          value={confirmPassword}
          placeholder="******"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setPasswordUnmatch(false);
            setEmptyFields(false);
            setLoading(false);
          }}
        />
        {passwordUnmatch && (
          <p className="error">Passwords do not match, try again.</p>
        )}
        {emptyFields && (
          <p className="error">Fields cannot be empty, check again.</p>
        )}

        {loading && (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}

        <p>
          Already have an account? <span onClick={goToLogin}>Login </span>
          instead.
        </p>

        <button onClick={signup}>Sign Up</button>
      </form>
    </FormStyled>
  );
};

export default SignUp;

// styled components

export const FormStyled = styled.div`
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
    padding: 0.3rem 0.5rem;
    border: 1px solid var(--lightColor);
    border-radius: 5px;
    font-size: clamp(0.8rem, 1vw, 2.5rem);
    caret-color: var(--darkColor);

    &:focus {
      border: 2px solid var(--darkColorTrans);
      outline: none;
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
    padding: 0.3rem 0.5rem;
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
