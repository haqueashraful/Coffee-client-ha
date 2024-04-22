import Swal from 'sweetalert2';
import Banner from '../Component/Banner';
import BannerBottom from '../Component/BannerBottom';
import MoreCoffeeSection from '../Component/MoreCoffeeSection';
import PopularSection from '../Component/PopularSection';

const Home = () => {

    const handleClick = () => {
        
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
    return (
        <div>
            <Banner />
            <BannerBottom />
            <button onClick={handleClick}>click</button>
            <PopularSection />
            <MoreCoffeeSection />
        </div>
    );
};

export default Home;