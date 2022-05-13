import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';
import Logo from '../../img/benexlogo.png';

function Header(){
    let user = JSON.parse(localStorage.getItem('user_info'));
    const navigate = useNavigate();
    function logOut(){
        localStorage.clear();
        navigate("/");
    }
    return(
        <div>
            <Navbar className={"landing_nav fixed-top"} expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to={'/'}>
                            <img
                                src={Logo}
                                width="100"
                                height="22"
                                className="d-inline-block align-top"
                                alt="Benex Logo"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 navbar_links_left"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {
                                localStorage.getItem('user_info') ?
                                    <>
                                        <Link to="/">Dashboard</Link>
                                    </>
                                    :
                                    <>
                                        <Link to="/support">Support</Link>
                                        <Link to="/about">About</Link>
                                    </>
                            }
                        </Nav>
                        <Nav>
                            {
                                localStorage.getItem('user_info') ?
                                    <>
                                        <Link to="/profile" className="main_login_link">
                                            {user && user.name}
                                        </Link>
                                        <Link to="/register" onClick={logOut()} className={"main_register_link"}>Logout</Link>
                                    </>
                                    :
                                    <>
                                        <Link to="/login" className="main_login_link">
                                            Sign In
                                        </Link>
                                        <Link to="/register" className={"main_register_link"}>Create Account</Link>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;