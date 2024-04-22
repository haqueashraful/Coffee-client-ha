import PopularProductCard from "./PopularProductCard";
import leftImg from '../assets/images/more/4.png'
import rightImg from '../assets/images/more/5.png'
const PopularSection = () => {
  return (
    <div className="relative">
    <div className="absolute left-0 top-0">
        <img src={leftImg} alt="" />
    </div>
    <div className="absolute right-0 bottom-0">
        <img src={rightImg} alt="" />
    </div>
    <div className="contain">
      <div className="text-center space-y-5">
        <p>--- Sip & Savor ---</p>
        <h1 className="text-5xl font-rancho text-[#331A15]">
          Our Popular Products
        </h1>
        <div className="flex justify-center items-center">
        <button className="bg-[#E3B577] px-5 py-2 text-white flex items-center gap-2">
          <span>Add Coffee</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-coffee"
          >
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        </button>
        </div>
      </div>
      <div className="lg:grid grid-cols-2 justify-center items-center gap-5">
        <PopularProductCard />
        <PopularProductCard />
        <PopularProductCard />
        <PopularProductCard />
        <PopularProductCard />
        <PopularProductCard />
      </div>
    </div>
    </div>
  );
};

export default PopularSection;
