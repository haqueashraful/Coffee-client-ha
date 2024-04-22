import img from "../assets/images/5.png";
import "../assets/css/CoffeDetailsSection.css";
// import { useHistory } from 'react-router-dom';

const CoffeeDetails = () => {

    // const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

  return (
    <div className="coffee-details contain py-24">
      <button onClick={goBack} className=" font-rancho text-[#331A15] flex items-center gap-2">
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
          className="feather feather-arrow-left"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
       <span className=" text-3xl"> Go Back</span>
      </button>
      <div className="detailsCard">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h1 className="text-[#331A15] font-rancho text-left text-5xl">
            Niceties
          </h1>
          <div className=" text-left space-y-2">
            <h1 className=" text-base-content text-lg">
              <span className="text-black text-lg font-bold">Name:</span>{" "}
              Americano Coffee
            </h1>
            <h1 className=" text-base-content text-lg">
              <span className="text-black text-lg font-bold">Chef:</span> Mr.
              Matin Paul
            </h1>
            <h1 className=" text-base-content text-lg">
              <span className="text-black text-lg font-bold">Supplier:</span>{" "}
              Cappu Authorizer
            </h1>
            <h1 className=" text-base-content text-lg">
              <span className="text-black text-lg font-bold">Taste:</span> Sweet
              and hot
            </h1>
            <h1 className=" text-base-content text-lg">
              <span className="text-black text-lg font-bold">Category:</span>{" "}
              Americano
            </h1>
            <h1 className=" text-base-content text-lg">
              <span className="text-black text-lg font-bold">Details:</span>{" "}
              Espresso with hot water
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
