import React from 'react';
import {BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import PostDetails from './components/PostDetails';
import Login from './components/Login';
import NotFound from './components/NotFound';
import './App.css';




function App() {

  fetch("/api/questions/test")
  .then(res => res.json())
  .then(data => console.log(data));

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/thread" exact component={PostDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
