import React from 'react';
import './App.css';
import { Header } from "./Components/header";
import { Footer } from "./Components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Components/home';
import icon from './Assets/navIcon.png'


function App() {
  return (
    <Router>
      <div className="App">


        <Navbar id="navbar-custom" variant="dark">
          <Nav className="mr-auto">
            <img src={icon} height="40" width="40"></img>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>



          </Nav>
        </Navbar>

        <Switch>

          <Route path='/' component={Home} exact />
          <Route exact path='/create' component={Footer} />
          <Route path='/read' component={Header} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
