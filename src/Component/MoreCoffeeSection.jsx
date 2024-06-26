import cup1 from '../assets/images/cups/Rectangle 9.png'
import cup2 from '../assets/images/cups/Rectangle 10.png'
import cup3 from '../assets/images/cups/Rectangle 11.png'
import cup4 from '../assets/images/cups/Rectangle 12.png'
import cup5 from '../assets/images/cups/Rectangle 13.png'
import cup6 from '../assets/images/cups/Rectangle 14.png'
import cup7 from '../assets/images/cups/Rectangle 15.png'
import cup8 from '../assets/images/cups/Rectangle 16.png'
const MoreCoffeeSection = () => {


    return (
        <div className="contain my-16">
            <div className="text-center">
                <p>Follow Us Now</p>
                <h1 className="text-5xl font-rancho text-[#331A15]">Follow on Instagram</h1>
            </div>

            <div className="grid grid-cols-4 gap-5 my-10">
                <img src={cup1} alt="" />
                <img src={cup2} alt="" />
                <img src={cup3} alt="" />
                <img src={cup4} alt="" />
                <img src={cup5} alt="" />
                <img src={cup6} alt="" />
                <img src={cup7} alt="" />
                <img src={cup8} alt="" />
            </div>
        </div>
    );
};

export default MoreCoffeeSection;