import { useNavigate } from 'react-router-dom';
import { mockCreators } from '../../data/mockData';
import './TopCreatorsSection.css';

function TopCreatorsSection() {
    const navigate = useNavigate();

    const handleCreatorClick = (creatorId) => {
        navigate(`/creator/${creatorId}`);
    };

    return (
        <section className="section top-creators-section">
            <div className="container">
                <h2 className="section-title">Top creators</h2>

                <div className="creators-scroll">
                    {mockCreators.map((creator) => (
                        <div
                            key={creator.id}
                            className="creator-card"
                            onClick={() => handleCreatorClick(creator.id)}
                        >
                            <div className="creator-avatar">{creator.avatar}</div>
                            <h3 className="creator-name">{creator.name}</h3>
                            <p className="creator-tagline">{creator.tagline}</p>
                            <p className="creator-stats">
                                {creator.products} products · {(creator.downloads / 1000).toFixed(1)}K downloads
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopCreatorsSection;
