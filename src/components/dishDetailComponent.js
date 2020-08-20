import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody} from 'reactstrap';

class Detail extends Component{
    constructor(props){
      super(props);

      this.state = {
        // selectedDish: this.props.selectedDish
      }
    }
      
    renderDish(dish){
      if(dish != null){
        return(
          <Card className="text-left">
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle><h4>{dish.name} <span className="badge badge-danger">{dish.label}</span></h4> </CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        
          
        );
      }
      else{
        return(
          <div></div>
        );
      }
    }
    renderComments(dish){
      
      if(dish != null) {
        const commentsList = dish.comments.map((comment) => {
          return(
            
            <li key={comment.id} >
                <p>{comment.comment}</p>
                
                <p >-- {comment.author}, {
                            new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                
              </li>
          );
          
        });

        return(
          <div className="text-left">
            
            <h3>Comments</h3>
            <ul className="list-unstyled">
            {commentsList}
            </ul>
          </div>
        );
      }
      else{
        return(
          <div></div>
        );
      }
    }


    render() {
        return(
          <div className="container">
            <div className="row">
            
              <div className="col-md-5 m-1">
                {this.renderDish(this.props.dish)}
              </div>
              <div className="col-md-5 m-1 d-flex">
                {this.renderComments(this.props.dish)}
              </div>
            </div>
          </div>
        );
      }
}

export default Detail;