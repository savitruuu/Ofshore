import { useNavigate } from 'react-router-dom';
import './HeroStrip.css';

function HeroStrip() {
    const navigate = useNavigate();

    return (
        <section className="hero-strip">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Creator-first marketplace for digital work.</h1>
                    <p className="hero-subtitle">
                        Sell videos, PDFs, models, code and more from one simple channel page.
                    </p>
                </div>
                <div className="hero-actions">
                    <button className="btn-primary" onClick={() => navigate('/creator/onboarding')}>
                        Start selling
                    </button>
                    <button className="btn-secondary" onClick={() => navigate('/explore')}>
                        Explore creators
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroStrip;
