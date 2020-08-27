import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, Label, ModalBody, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';

  
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

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => !(val) || (val.length >= len);

    class CommentForm extends Component{

      constructor(props) {
        super(props);

        this.state = {
          isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      toggleModal(){
        this.setState({isModalOpen: !this.state.isModalOpen});
      }

      handleSubmit(values){
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        // console.log("Current State: "+ JSON.stringify(values));
        // alert("Current State: "+ JSON.stringify(values));
    }

      render(){
        return(
          <div>
            <Button outline onClick={this.toggleModal}><i className="fa fa-pencil fa-lg"></i> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
              <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                      <Label for="rating" md={12}>Rating</Label>
                      <Col md={12}>
                        <Control.select model=".rating" id="rating" className="form-control" name="rating">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Control.select>
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label md={12} htmlFor="author">Your Name</Label>
                      <Col md={12}>
                        <Control.text id="author" name="author" className="form-control" model=".author"
                        validators={{
                          required, minLength: minLength(3), maxLength: maxLength(15)
                        }} name="authorName" placeholder="Your Name"/>
                        <Errors model=".authorName" show="touched" className="text-danger"
                        messages={{
                            required: '*Required',
                            minLength: "Must be atleast 3 characters",
                            maxLength: "Must be 15 characters or less"
                        }}/>
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label md={12} htmlFor="comment">Comment</Label>
                      <Col md={12}>
                        <Control.textarea model=".comment" name="comment" rows="5" className="form-control"/>
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Col md={12} >
                      <Button type="submit" color="primary">Submit</Button>
                      </Col>
                    </Row>
                </LocalForm>
              </ModalBody>
            </Modal>
          </div>
          
        );
      }

    }

    function RenderComments({comments, addComment, dishId}){
      
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
            <CommentForm dishId={dishId} addComment={addComment}>

            </CommentForm>
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
              <RenderComments comments={props.comments} 
               addComment={props.addComment}
               dishId={props.dish.id}></RenderComments>
            </div>
          </div>
        </div>
      );
   
    }
        
export default Detail;