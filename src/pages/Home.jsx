import Banner from '../Component/Banner';
import BannerBottom from '../Component/BannerBottom';
import MoreCoffeeSection from '../Component/MoreCoffeeSection';
import PopularSection from '../Component/PopularSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <BannerBottom />

            <PopularSection />

            <MoreCoffeeSection />
        </div>
    );
};

export default Home;