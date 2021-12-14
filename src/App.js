import './globals.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import ClientList from './components/ClientList';
import { useEffect, useState } from 'react';
import { DataProvider } from './context/DataContext';
import AddClient from './components/AddClient';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClientDetails from './components/ClientDetails';

function App() {
  // states
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginPage, setLoginPage] = useState(true);
  const [signUpPage, setSignUpPage] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    token ? setLoginSuccess(true) : setLoginSuccess(false);
  }, []);

  return (
    <div>
      <Router>
        <DataProvider>
          {signUpPage && (
            <SignUp setSignUpPage={setSignUpPage} setLoginPage={setLoginPage} />
          )}
          {!loginSuccess && loginPage && (
            <Login
              setLoginSuccess={setLoginSuccess}
              setUserName={setUserName}
              setSignUpPage={setSignUpPage}
              setLoginPage={setLoginPage}
            />
          )}
          {loginSuccess && (
            <>
              <Header userName={userName} />
              <Switch>
                <Route exact path="/">
                  <ClientList />
                </Route>
                <Route path="/add-client">
                  <AddClient />
                </Route>
                <Route path="/clients/:id">
                  <ClientDetails />
                </Route>
              </Switch>
            </>
          )}
        </DataProvider>
      </Router>
    </div>
  );
}

export default App;
