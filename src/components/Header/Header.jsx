import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">

                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/tshirt">TShirt</Link>
                    <Link to="/order">Order</Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;