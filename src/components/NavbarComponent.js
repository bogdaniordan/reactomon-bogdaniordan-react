import React, {Component, useContext} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeContext} from "./ThemeContext";


const NavbarComponent = props => {
    const [theme, setTheme] = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme==='#E0FFFF'?'#2F4F4F':'#E0FFFF');
    };

        return (
            <div>
                <Navbar  bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/pokemons">List</Navbar.Brand>
                        <Navbar.Brand href="/caught-pokemons">Caught pokemons</Navbar.Brand>
                        <Navbar.Brand href="/types">Types</Navbar.Brand>
                        <Navbar.Brand>    <div className="custom-control custom-switch" style={{ marginLeft: '160px', fontSize: 'large' }}>
                            <input type="checkbox" className="custom-control-input" id="darkSwitch"/>
                            <label className="custom-control-label" htmlFor="darkSwitch" onClick={() => toggleTheme()}>🌓</label>
                        </div></Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        );
}

export default NavbarComponent;