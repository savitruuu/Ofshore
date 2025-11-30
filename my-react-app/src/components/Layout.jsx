import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <main className="main-content">
                {/* Outlet renders the matched child route */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
