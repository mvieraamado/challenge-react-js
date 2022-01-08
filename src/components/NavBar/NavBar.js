import { Container, Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavBar = ()=>{
    const logout = ()=>{
        localStorage.removeItem('token');
    }
    return(
    <>
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home" className="pt-1 fw-bold text-info">Superhero-Alkemy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink to="/" className="nav-link pt-2">Home</NavLink>
                <NavLink to="/search" className="nav-link pt-2">Search</NavLink>
                <NavLink to={'/login'} onClick={()=>logout()} className="nav-link pt-2 text-decoration-none">Log out</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
};
export default MyNavBar;