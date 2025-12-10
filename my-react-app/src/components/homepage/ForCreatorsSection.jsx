import { useNavigate } from 'react-router-dom';
import './ForCreatorsSection.css';

function ForCreatorsSection() {
    const navigate = useNavigate();

    const valueProps = [
        {
            id: 1,
            icon: '⚡',
            title: 'Set up your channel in minutes',
            description: 'Simple onboarding process to get you started'
        },
        {
            id: 2,
            icon: '📦',
            title: 'Upload any digital format',
            description: 'Videos, PDFs, code, models, and more'
        },
        {
            id: 3,
            icon: '💰',
            title: 'Get paid with simple payouts',
            description: 'Direct deposits with transparent pricing'
        }
    ];

    return (
        <section className="section for-creators-section">
            <div className="container">
                <h2 className="section-title">For creators</h2>

                <div className="value-props-grid">
                    {valueProps.map((prop) => (
                        <div key={prop.id} className="value-prop-card">
                            <div className="value-prop-icon">{prop.icon}</div>
                            <h3 className="value-prop-title">{prop.title}</h3>
                            <p className="value-prop-description">{prop.description}</p>
                        </div>
                    ))}
                </div>

                <div className="for-creators-cta">
                    <button
                        className="btn-primary btn-large"
                        onClick={() => navigate('/creator/onboarding')}
                    >
                        Become a creator
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ForCreatorsSection;
