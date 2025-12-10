import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <Link to="/about" className="footer-link">About</Link>
                    <Link to="/faq" className="footer-link">FAQ</Link>
                    <Link to="/docs" className="footer-link">Docs</Link>
                    <Link to="/contact" className="footer-link">Contact</Link>
                    <Link to="/terms" className="footer-link">Terms</Link>
                    <Link to="/privacy" className="footer-link">Privacy</Link>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {currentYear} Ofshore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
