import { Link, useMatch, useResolvedPath, NavLink} from "react-router-dom";
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem 
} from "reactstrap";
import { useState } from "react";

export default function NewNavbar() {
    const [menuOpen, setMenuOpen ] = useState(false)
    return (
        <Navbar dark className="nav justify-content-md-evenly" expand='md' sticky='top' >
            <Link to="/" className="site-title">
                Password Manager
            </Link>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
            <div className='ms-auto' navbar sm={3}>
            <ul>
                <CustomLink to="/add">Add</CustomLink>
                <CustomLink to="/get">Retrieve</CustomLink>
                <CustomLink to="/delete">Delete</CustomLink>
            </ul>
            </div>
            </Collapse>
        </Navbar>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}