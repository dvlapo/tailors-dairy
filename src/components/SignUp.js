import styled from 'styled-components';

const SignUp = ({ setSignUpPage, setLoginPage }) => {
  const goToLogin = () => {
    setSignUpPage(false);
    setLoginPage(true);
  };
  return (
    <FormStyled>
      <h1>Sign Up For Free</h1>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Please enter your email address" />
        <label>Username:</label>
        <input type="text" placeholder="Enter a username" />
        <label>Password:</label>
        <input type="password" placeholder="******" />
        <label>Confirm password:</label>
        <input type="password" placeholder="******" />

        <p>
          Already have an account? <span onClick={goToLogin}>Login </span>
          instead.
        </p>

        <button>Sign Up</button>
      </form>
    </FormStyled>
  );
};

export default SignUp;

// styled components

export const FormStyled = styled.div`
  max-width: 80vw;
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
    margin-block: 0.5rem;

    span {
      color: var(--darkColor);
      cursor: pointer;
    }
  }

  button {
    width: 100%;
    background-color: var(--darkColorTrans);
    padding: 0.3rem 0.5rem;
    font-size: clamp(1.2rem, 2vw, 3rem);
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
`;
