import { useNavigate } from 'react-router-dom';
import { mockCategories } from '../../data/mockData';
import './TopCategoriesSection.css';

function TopCategoriesSection() {
    const navigate = useNavigate();

    const handleCategoryClick = (slug) => {
        navigate(`/explore?category=${slug}`);
    };

    return (
        <section className="section top-categories-section">
            <div className="container">
                <h2 className="section-title">Browse by category</h2>

                <div className="categories-grid">
                    {mockCategories.map((category) => (
                        <button
                            key={category.id}
                            className="category-pill"
                            onClick={() => handleCategoryClick(category.slug)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopCategoriesSection;
