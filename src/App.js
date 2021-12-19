import './global.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import ClientList from './components/ClientList';
import { useEffect, useState } from 'react';
import { DataProvider } from './context/DataContext';
import AddClient from './components/AddClient';
import EditClient from './components/EditClient';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClientDetails from './components/ClientDetails';

function App() {
  // states
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginPage, setLoginPage] = useState(true);
  const [signUpPage, setSignUpPage] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    token ? setLoginSuccess(true) : setLoginSuccess(false);
  }, []);

  return (
    <div className="App">
      <Router>
        <DataProvider>
          {signUpPage && (
            <SignUp setSignUpPage={setSignUpPage} setLoginPage={setLoginPage} />
          )}
          {!loginSuccess && loginPage && (
            <Login
              setLoginSuccess={setLoginSuccess}
              setSignUpPage={setSignUpPage}
              setLoginPage={setLoginPage}
            />
          )}
          {loginSuccess && (
            <>
              <Header />
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
                <Route path="/edit-client/:id">
                  <EditClient />
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
