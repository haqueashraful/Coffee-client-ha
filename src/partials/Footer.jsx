import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import "../assets/css/footer.css";

import logo from "../assets/images/more/logo1.png";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="contain footer-section">
        <div className="footer-left ">
          <img className=" w-28 h-28" src={logo} alt="" />
          <div className=" space-y-3">
            <h1 className=" font-rancho font-bold text-5xl text-[#331A15]">
              Espresso Emporium
            </h1>
            <p>
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
          </div>
          <div className="flex justify-start items-center gap-5 my-6">
            <FaFacebook className="text-[#331A15] text-5xl" />
            <FaTwitter className="text-[#331A15] text-5xl" />
            <FaInstagram className="text-[#331A15] text-5xl" />
            <FaLinkedin className="text-[#331A15] text-5xl" />
          </div>
          <div>
            <h1 className=" font-rancho text-5xl font-bold text-[#331A15] my-5">
              Get in touch
            </h1>
            <div className=" space-y-2">
              <div className=" flex items-center gap-2">
                <FaPhoneAlt className="text-2xl text-[#331A15]" />
                <span className="text-xl text-[#1B1A1A]">
                  +880 123 456 789
                </span>
              </div>
              <div className=" flex items-center gap-2">
                <FaEnvelope className="text-2xl text-[#331A15]" />
                <span className="text-xl text-[#1B1A1A]">
                  1yQK@example.com
                </span>
              </div>
              <div className=" flex items-center gap-2">
                <FaLocationDot className="text-2xl text-[#331A15]" />
                <span className="text-xl text-[#1B1A1A]">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <h1 className=" font-rancho text-5xl font-bold text-[#331A15] my-5">
            Connect with Us
          </h1>
          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Name</span>
              <input
                type="text"
                placeholder="Name"
                className="input-coffee-rn"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="Email"
                className="input-coffee-rn"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea rows="3" className="input-coffee-rn"></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-600 text-gray-50 focus:ring-violet-600 hover:ring-violet-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <h1 className=" font-rancho text-xl py-5 text-center text-white">Copyright Espresso Emporium ! All Rights Reserved</h1>
      </div>
    </>
  );
};

export default Footer;
