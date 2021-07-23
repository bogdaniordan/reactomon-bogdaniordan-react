import React, {Component} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/pokemon-list">Pokemon list</Navbar.Brand>
                        <Navbar.Brand href="#home">Pokemon detail</Navbar.Brand>

                        {/*<Nav className="me-auto">*/}
                        {/*    <Nav.Link href="#home">Home</Nav.Link>*/}
                        {/*    <Nav.Link href="#features">Features</Nav.Link>*/}
                        {/*    <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                        {/*</Nav>*/}
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;