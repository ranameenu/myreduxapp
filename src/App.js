import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/edit/:id" component={EditUser} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
