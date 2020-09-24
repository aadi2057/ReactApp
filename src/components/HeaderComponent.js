import React, { Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem,
            Button, Modal, ModalBody, ModalHeader, Form, Label, FormGroup, Input } from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component{

    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    toggleNav(){
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    toggleModal(){
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    handleLogin( event){
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value + "Remember: " + this.remember.checked);

        event.preventDefault();
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark fixed expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/" className="mr-auto">
                            <img src="assets/images/logo.png" height="50" width="45" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg"></i> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg"></i> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <i className="fa fa-list fa-lg"></i> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg"></i> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav dark className="ml-auto" navbar>
                                <NavItem>
                                    <Button className="text-light" outline onClick={this.toggleModal}>
                                        <i className="fa fa-sign-in "></i> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristornate Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. 
                                    Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input innerRef={(input) => this.username = input} type="text" id="username" name="username"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input innerRef={(input) => this.password = input} type="password" id="password" name="password"/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input innerRef={(input) => this.remember = input} type="checkbox" name="remember" />Remember me?
                                </Label>
                                
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" value="submit" type="submit" id="submit">Login</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;