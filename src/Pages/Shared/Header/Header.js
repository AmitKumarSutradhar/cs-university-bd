import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button } from 'bootstrap';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='bg-primary text-white' variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/'><Image src='logo.png'></Image></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link ><Link className='text-white ' to='/courses'>Courses</Link></Nav.Link>
                            <Nav.Link ><Link className='text-white ' to='/faq'>FAQ</Link></Nav.Link>
                            <Nav.Link ><Link className='text-white ' to='blog'>Blog</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <button>Toggle</button>
                        </Nav>
                        <Nav>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <button><Link to='/login'>Login</Link></button>
                                        </>
                                }


                            </>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;