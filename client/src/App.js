import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import FetchUser from './components/FetchUser';
import UserForm from './components/UserForm'
import ProtectedRoute from './components/ProtectedRoute'
import FinCalculator from './components/FinCalculator'

const App = () => (
  <div>
    <NavBar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/userform" component={UserForm} />
        <Route path="/fincalculator" component={FinCalculator} />
        <Route path="/register" render={ (props) => <Auth {...props} title="Register" /> } />
        <Route path="/login" render={ (props) => <Auth {...props} title="Login" /> } />
        <ProtectedRoute path="/dashboard" component={Dashboard} />

     </Switch>
   </FetchUser>
  </div>
);

export default App;