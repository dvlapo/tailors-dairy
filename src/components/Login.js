import { useState } from 'react';
import { FormStyled } from './SignUp';
import axios from 'axios';

const Login = ({
  setLoginSuccess,
  setUserName,
  setSignUpPage,
  setLoginPage,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'https://measure-client-api.herokuapp.com/api/v1/auth/login',
        { email, password }
      );
      console.log(data, data.user.username, data.token);

      localStorage.setItem('token', data.token);
      setLoginSuccess(true);
      setUserName(data.user.username);
    } catch (error) {
      console.log(error);
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
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />

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
