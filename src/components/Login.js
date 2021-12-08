import { FormStyled } from './SignUp';

const Login = () => {
  return (
    <FormStyled>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Please enter your email address" />

        <label>Password:</label>
        <input type="password" placeholder="******" />

        <button>Login</button>
      </form>
    </FormStyled>
  );
};

export default Login;
