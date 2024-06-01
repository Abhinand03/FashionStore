import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './head.css'

function Payhead1(prop) {
    return (
        <>
            <Navbar expand="lg" className="bg-light shadow  pt-3 pb-3">
                <Container className='ms-4'>
                    <Navbar.Brand className='me-4' href="#home">Fashion <span className='bg-warning badge text-dark'>Store</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <Nav className="">
                            <Nav.Link >
                                <h5>
                                    {
                                        prop.con?
                                        <div>

                                        <span >cart</span> ------- <span className='text-success bold'>Address</span>------- <span>Payment</span>
    
    
                                        </div>
    
                                        :prop.car?
                                        <div>

                                    <span className='text-success bold'>cart</span>------- <span>Address</span>------- <span>Payment</span>


                                    </div>:
                                     <div>

                                     <span >cart</span>------- <span>Address</span>------- <span className='text-success bold'>Payment</span>
 
 
                                     </div>


                                    }

                                </h5>
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Payhead1