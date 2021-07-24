import React, {Component} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/pokemons">List</Navbar.Brand>
                        <Navbar.Brand href="/types">Types</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;