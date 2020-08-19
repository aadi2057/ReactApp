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
              <CardTitle><h4>{dish.name}</h4></CardTitle>
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
        const comments = dish.comments.map((comment) => {
          return(
            <div key={comment.id} >
                <p>{comment.comment}</p>
              <div >
                <p >-- {comment.author}, {comment.date}</p>
              </div>
          </div>
          );
          
        });

        return(
          <div className="text-left">
            <h3>Comments</h3>
            {comments}
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
                {this.renderDish(this.props.selectedDish)}
              </div>
              <div className="col-md-5 m-1">
                {this.renderComments(this.props.selectedDish)}
              </div>
            </div>
          </div>
        );
      }
}

export default Detail;