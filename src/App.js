import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotMatch from './components/NotMatch/NotMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
            <Home/>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/friend/:friendId">
            <FriendDetail/>
        </Route>
        <Route  path="*">
           <NotMatch></NotMatch>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
