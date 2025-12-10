import { useNavigate } from 'react-router-dom';
import { mockProducts } from '../../data/mockData';
import './TrendingSection.css';

function TrendingSection() {
    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleCreatorClick = (e, creatorId) => {
        e.stopPropagation(); // Prevent product click when clicking creator name
        navigate(`/creator/${creatorId}`);
    };

    const formatPrice = (price) => {
        return price === 0 ? 'Free' : `₹${price}`;
    };

    return (
        <section className="section trending-section">
            <div className="container">
                <h2 className="section-title">Trending drops</h2>

                <div className="products-grid">
                    {mockProducts.map((product) => (
                        <div
                            key={product.id}
                            className="product-card"
                            onClick={() => handleProductClick(product.id)}
                        >
                            <div className="product-thumbnail">
                                <span className="thumbnail-icon">{product.thumbnail}</span>
                                <span className="product-type">{product.type}</span>
                            </div>

                            <div className="product-info">
                                <h3 className="product-title">{product.title}</h3>
                                <p
                                    className="product-creator"
                                    onClick={(e) => handleCreatorClick(e, product.creatorId)}
                                >
                                    {product.creatorName}
                                </p>
                                <p className="product-price">{formatPrice(product.price)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrendingSection;
