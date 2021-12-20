import { useState } from 'react';
import { FormStyled } from './SignUp';
import axios from 'axios';

const Login = ({ setLoginSuccess, setSignUpPage, setLoginPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [someError, setSomeError] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        'https://measure-client-api.herokuapp.com/api/v1/auth/login',
        { email, password }
      );
      localStorage.setItem('token', data.token);
      localStorage.setItem('tailorname', data.user.username);
      setLoginSuccess(true);
    } catch (error) {
      console.log(error);
      setSomeError(true);
    }
  };

  const goToSignUp = () => {
    setSignUpPage(true);
    setLoginPage(false);
  };

  return (
    <FormStyled>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          placeholder="Please enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
            setSomeError(false);
            setLoading(false);
          }}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          placeholder="******"
          onChange={(e) => {
            setPassword(e.target.value);
            setSomeError(false);
            setLoading(false);
          }}
        />
        {someError && <p className="error">Invalid email or password</p>}

        {loading && !someError && (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <p>
          Don't have an account? <span onClick={goToSignUp}>Sign up </span>
          instead.
        </p>
        <button onClick={login}>Login</button>
      </form>
    </FormStyled>
  );
};

export default Login;
