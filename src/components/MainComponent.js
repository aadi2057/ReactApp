import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav, NavbarToggler, Collapse } from 'reactstrap';
import Menu from './MenuComponent';
import Detail from './dishDetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state ={
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId) {
    this.setState({selectedDish: dishId})
  }

  render(){
    return (
      <div className="App" expand="lg">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/" className="mr-auto">Ristornate Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes= {this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}></Menu>
        <Detail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]}></Detail>
      </div>
      
    );
  }
  
}

export default Main;
