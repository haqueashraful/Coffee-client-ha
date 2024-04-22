import '../assets/css/banner.css'

import img1 from "../assets/images/icons/1.png"
import img2 from "../assets/images/icons/2.png"
import img3 from "../assets/images/icons/3.png"
import img4 from "../assets/images/icons/4.png"
const BannerBottom = () => {
    return (
        <div className='banner-bottom contain'>
            <div>
                <img className='banner-bottom-img' src={img1} alt="" />
                <h1 className='banner-bottom-title'>Awesome Aroma</h1>
                <p className='banner-bottom-des'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img className='banner-bottom-img' src={img2} alt="" />
                <h1 className='banner-bottom-title'>High Quality</h1>
                <p className='banner-bottom-des'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img className='banner-bottom-img' src={img3} alt="" />
                <h1 className='banner-bottom-title'>Pure Grades</h1>
                <p className='banner-bottom-des'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img className='banner-bottom-img' src={img4} alt="" />
                <h1 className='banner-bottom-title'>Proper Roasting</h1>
                <p className='banner-bottom-des'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
        </div>
    );
};

export default BannerBottom;