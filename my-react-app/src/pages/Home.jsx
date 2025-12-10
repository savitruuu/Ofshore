import HeroStrip from '../components/homepage/HeroStrip';
import TopCreatorsSection from '../components/homepage/TopCreatorsSection';
import TopCategoriesSection from '../components/homepage/TopCategoriesSection';
import TrendingSection from '../components/homepage/TrendingSection';
import ForCreatorsSection from '../components/homepage/ForCreatorsSection';
import './Home.css';

function Home() {
    return (
        <div className="home-page">
            {/* Hero strip with main value proposition */}
            <HeroStrip />

            {/* Top creators horizontal scroll section */}
            <TopCreatorsSection />

            {/* Category browsing section */}
            <TopCategoriesSection />

            {/* Trending products grid */}
            <TrendingSection />

            {/* For creators value props and CTA */}
            <ForCreatorsSection />
        </div>
    );
}

export default Home;
