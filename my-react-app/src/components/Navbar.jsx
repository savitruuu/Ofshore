import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="nav-logo">My React App</h1>
                <ul className="nav-menu">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
