import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Detail from './DishDetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Redirect, Route } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state ={
      dishes: DISHES,
     
    };
  }
  

  render(){
    const HomePage = () => {
      return(
        <Home></Home>
        
      )
    }
    return (

      <div className=" text-left" expand="lg">
        <Header></Header>
        <Switch>
          <Route path='/home' component={HomePage}></Route>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Redirect to='/home' />
        </Switch>
        <Footer></Footer>
      </div>
      
    );
  }
  
}

export default Main;
