import React, { Component } from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';

class BarraNavegacao extends Component {
    render() {
        return (
            <header>
               <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">SpringApp</Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/produtos">Produtos</Nav.Link>
                            </Nav>
                    </Container>
                </Navbar>
                </>
            </header>
        );
    }
}

export default BarraNavegacao;