import React from 'react';
import './App.css';
import {  Read } from "./components/read";
import { Create } from "./components/create";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home';
import icon from './Assets/navIcon.png'


function App() {
  return (
    <Router>
      <div className="App">


        <Navbar id="navbar-custom" variant="dark">
          <Nav className="mr-auto">
            <img src={icon} alt="Game Icon"height="40" width="40"></img>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>



          </Nav>
        </Navbar>

        <Switch>

          <Route path='/' component={Home} exact />
          <Route exact path='/create' component={Create} />
          <Route path='/read' component={Read} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
