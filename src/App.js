import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/login';
// import Homepage from './components/Home/Homepage';
import Body from './routes/routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import { LoginContextProvider } from './utils/LoginContext';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import LandingPage from './components/Landing/Landing';

function App() {

  return (
    <LoginContextProvider >
      <Router>
      <div className="App">
      <div className="appContainer">
        <Nav />

          <Switch>

            <Route exact path='/'>
              <LandingPage />
            </Route>

            <ProtectedRoute exact path='/home'>
              <Body />
            </ProtectedRoute>
            <ProtectedRoute exact path='/post/:blogId'>
              <Body />
            </ProtectedRoute>

            <Route path='/register'>
              <Register />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

          </Switch>

        <Footer />
      </div>
    </div>
    </Router>
    </LoginContextProvider>
  );
}

export default App;