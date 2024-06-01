import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './head.css'

function Payhead1(prop) {
    return (
        <>
            <Navbar expand="lg" className="bg-light shadow  pt-3 pb-3">
                <Container className='ms-4'>
                    <Link to={'/'} className='text-decoration-none'>
                        <Navbar.Brand className='me-4' >Fashion <span className='bg-warning badge text-dark'>Store</span></Navbar.Brand>


                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <Nav className="">
                            <Nav.Link >
                                <h4>
                                    {
                                        prop.con ?
                                            <div>

                                                <span >cart</span> ------- <span className='bg-success badge bold p-2'>Address</span>------- <span>Payment</span>


                                            </div>

                                            : prop.car ?
                                                <div>

                                                    <span className='bg-success badge bold p-2'>cart</span>------- <span>Address</span>------- <span>Payment</span>


                                                </div> :
                                                <div>

                                                    <span >cart</span>------- <span>Address</span>------- <span className='bg-success badge bold p-2'>Payment</span>


                                                </div>


                                    }

                                </h4>
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Payhead1