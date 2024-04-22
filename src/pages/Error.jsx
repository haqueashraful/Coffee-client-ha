import img from "../assets/images/404/404.gif";
const Error = () => {
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="contain flex flex-col justify-center items-center">
      <button
        onClick={goBack}
        className=" font-rancho text-[#331A15] flex items-center gap-2"
      >
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

      <div className=" w-full h-full flex justify-center items-center">
        <img className=" w-2/3 h-1/2" src={img} alt="" />
      </div>
    </div>
  );
};

export default Error;
