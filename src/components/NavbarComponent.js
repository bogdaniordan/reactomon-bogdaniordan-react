import React, {Component, useContext} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavbarComponent = props => {
        return (
            <div>
                {/*<img height="100px" width="200px" src="https://i.pinimg.com/originals/fd/18/c6/fd18c6d26d4d9d26a0bd9d1a2fb2bd04.png" alt="pokemon-logo"/>*/}
                <Navbar  bg="dark" variant="dark">
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