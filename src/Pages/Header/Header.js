import React, { useContext, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";
import { AuthContext } from '../../contexts/UserContext';
import './Header.css'

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='nav-bg'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/'><Image src='logo.png'></Image></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                            <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
                            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <DarkModeToggle
                                className='mx-3'
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={80}
                            />

                        </Nav>
                        <Nav>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <Link className='ms-4' to="/profile">
                                                {user?.photoURL ?
                                                    <Image
                                                        style={{ height: '30px' }}
                                                        roundedCircle
                                                        src={user?.photoURL}>
                                                    </Image>
                                                    : <>User</>
                                                }
                                            </Link>
                                            <Button className='ms-3' variant="light" onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'>Login</Link>
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