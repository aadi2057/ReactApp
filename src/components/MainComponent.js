import React, { Component } from 'react';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Detail from './DishDetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())}


});

class Main extends Component {

  constructor(props) {
    super(props);

  
  }
  componentDidMount() {
    this.props.fetchDishes();
  }
   

  render(){
    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}></Home>
        
      )
    }

    const DishWithId = ({match}) => {
      return(
        <Detail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
              comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
              addComment={this.props.addComment}></Detail>
      );
    }

    return (

      <div className=" text-left" expand="lg">
        <Header></Header>
        <Switch>
          <Route path='/home' component={HomePage}></Route>
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to='/home' />
        </Switch>
        <Footer></Footer>
      </div>
      
    );
  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
