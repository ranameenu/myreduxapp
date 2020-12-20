import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import AddUser from './components/users/AddUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/add" component={AddUser} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
