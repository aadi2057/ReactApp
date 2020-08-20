import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav, NavbarToggler, Collapse } from 'reactstrap';
import Menu from './components/MenuComponent';
// import Detail from './components/dishDetailComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state ={
      dishes: DISHES,
      
    };
  }

  render(){
    return (
      <div className="App" expand="lg">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/" className="mr-auto">Ristornate Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes= {this.state.dishes} ></Menu>
        
      </div>
      
    );
  }
  
}

export default App;
