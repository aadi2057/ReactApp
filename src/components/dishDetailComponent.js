import React from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

  
    function RenderDish({dish}){
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
    function RenderComments({comments}){
      
      if(comments != null) {
        const commentsList = comments.map((comment) => {
          return(
            
            <li key={comment.dishId} >
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


    const Detail = (props) => {
      return(
        <div className="container">
          <div className="row">
            <Breadcrumb>
              
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr/>
            </div>
          </div>
          <div className="row">
          
            <div className="col-md-5 m-1">
              <RenderDish dish={props.dish}></RenderDish>
            </div>
            <div className="col-md-5 m-1 d-flex">
              <RenderComments comments={props.comments}></RenderComments>
            </div>
          </div>
        </div>
      );
   
    }
        
export default Detail;