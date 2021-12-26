import FormStyled from './styles/FormStyled';
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

        <button onClick={signup}>Sign Up</button>

        <p>
          Already have an account? <span onClick={goToLogin}>Login </span>
          instead.
        </p>
      </form>
    </FormStyled>
  );
};

export default SignUp;
