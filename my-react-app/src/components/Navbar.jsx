import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    // Simulate auth state (can be replaced with actual auth context later)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/explore?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setShowDropdown(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    Ofshore
                </Link>

                {/* Search Bar */}
                <form className="navbar-search" onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search creators, videos, PDFs, models…"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-button" aria-label="Search">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </form>

                {/* Right Side - Auth Buttons or User Menu */}
                <div className="navbar-actions">
                    {!isLoggedIn ? (
                        <>
                            <button className="btn-ghost navbar-btn" onClick={() => setIsLoggedIn(true)}>
                                Sign in
                            </button>
                            <button className="btn-primary navbar-btn">
                                Sign up
                            </button>
                        </>
                    ) : (
                        <div className="user-menu">
                            <button
                                className="user-avatar"
                                onClick={() => setShowDropdown(!showDropdown)}
                                aria-label="User menu"
                            >
                                <span className="avatar-text">U</span>
                            </button>

                            {showDropdown && (
                                <div className="dropdown-menu">
                                    <Link to="/dashboard" className="dropdown-item">
                                        Dashboard
                                    </Link>
                                    <Link to="/library" className="dropdown-item">
                                        My Library
                                    </Link>
                                    <hr className="dropdown-divider" />
                                    <button className="dropdown-item" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
