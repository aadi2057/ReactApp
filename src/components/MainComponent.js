import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Detail from './DishDetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS} from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Switch, Redirect, Route } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state ={
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      
    };
  }
   

  render(){
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}></Home>
        
      )
    }

    const DishWithId = ({match}) => {
      return(
        <Detail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}></Detail>
      );
    }

    return (

      <div className=" text-left" expand="lg">
        <Header></Header>
        <Switch>
          <Route path='/home' component={HomePage}></Route>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to='/home' />
        </Switch>
        <Footer></Footer>
      </div>
      
    );
  }
  
}

export default Main;
