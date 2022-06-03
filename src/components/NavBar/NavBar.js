import { Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavBar = ()=>{
    return(
    <>
    <Navbar bg="light" expand="lg" className="px-3">
        <Navbar.Brand href="/" className="fw-bold text-secondary">SUPERHERO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-lg-end">
        <Nav>
            <NavLink to="/" className="nav-link">Search</NavLink>
            <NavLink to="/my-heroes" className="nav-link text-dark">My heroes</NavLink>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
    )
};

export default MyNavBar;