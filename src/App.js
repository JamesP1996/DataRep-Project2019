import React from 'react';
import './App.css';
import { ReadGame } from "./components/readgame";
import { CreateGame } from "./components/creategame";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home';
import icon from './Assets/navIcon.png';
import EditGame from './components/editgame';


function App() {
  return (
    <Router>
      <div className="App">

        {/* Setup Navbar with a Css Value in this case maroon */}
        <Navbar id="navbar-custom" variant="dark">
          <Nav className="mr-auto">
            {/* Navbar Image and Links for Pages*/}
            <img src={icon} alt="Game Icon" height="40" width="40"></img>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/readgame">Read Reviews</Nav.Link>
            <Nav.Link href="/creategame">Create Reviews</Nav.Link>



          </Nav>
        </Navbar>
        {/* Set up Routing using Switch and 
         Router Modules that will make routes to each Component*/}
        <Switch>

          <Route path='/' component={Home} exact />
          <Route exact path='/creategame' component={CreateGame} />
          <Route path='/readgame' component={ReadGame} />
          <Route path="/edit/:id" component={EditGame} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
