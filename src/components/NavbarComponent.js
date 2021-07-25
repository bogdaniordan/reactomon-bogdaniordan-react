import React, {Component, useContext} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavbarComponent = props => {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/pokemons">List</Navbar.Brand>
                        <Navbar.Brand href="/caught-pokemons">Caught pokemons</Navbar.Brand>
                        <Navbar.Brand href="/types">Types</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        );
}

export default NavbarComponent;