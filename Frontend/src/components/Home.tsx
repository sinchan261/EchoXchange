import { Link } from "react-router-dom";
import { FaLongArrowAltRight, FaCartPlus } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faHeadset, faCreditCard, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div 
        style={{
          backgroundImage: `url('image5.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
        }}
      >
        <div className="flex p-5">
          <div className="w-[50%] mt-40">
            <img src="image4.png" className="h-[300px]" alt="description" />
          </div>

          <div className="flex flex-col w-[50%] gap-9 justify-center mt-40">
            <div>
              <p className="text-green-400 tracking-wide">WELCOME TO ECOXCHANGE</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-4xl tracking-wider">Quality Recyclable</p>
              <p className="text-5xl tracking-wider">WASTE MATERIALS</p>
            </div>

            <Link
              to="/buyers"
              className="bg-green-500 px-10 py-6 rounded-3xl flex items-center gap-2 text-white w-[40%] mt-16"
            >
              Browse Materials <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-2 p-10 flex justify-around gap-8">
        <div className="flex flex-col items-center text-center gap-3">
          <FontAwesomeIcon icon={faTruckFast} style={{ color: "#63E6BE" }} size="2x" />
          <p className="text-2xl font-bold">Shipping</p>
          <p>Shipping With Discount</p>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <FontAwesomeIcon icon={faHeadset} style={{ color: "#63E6BE" }} size="2x" />
          <p className="text-2xl font-bold">Great Support 24/7</p>
          <p>Instant access to Contact</p>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <FontAwesomeIcon icon={faCreditCard} style={{ color: "#63E6BE" }} size="2x" />
          <p className="text-2xl font-bold">100% Secure Payment</p>
          <p>We ensure your money is safe</p>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <FontAwesomeIcon icon={faMoneyBillTransfer} style={{ color: "#63E6BE" }} size="2x" />
          <p className="text-2xl font-bold">Money-Back Guarantee</p>
          <p>30 days money-back</p>
        </div>
      </div>

      <div className="p-10">
        <div>
          <p className="text-3xl mb-6">Featured Products</p>
        </div>

        <div className="flex flex-wrap justify-between gap-10">
          <Link to="/buyers" className="flex flex-col items-center rounded-xl shadow-md p-4 w-[250px]">
            <img src="image7.png" alt="Product" className="h-[250px] w-full object-cover rounded-lg" />
            <div className="flex justify-between items-center w-full mt-4">
              <div>
                <p className="font-semibold">Motherboard</p>
                <p>Rs:850/kg</p>
              </div>
              <FaCartPlus size={25} className="text-green-500 cursor-pointer" />
            </div>
          </Link>

          <Link to="/buyers" className="flex flex-col items-center rounded-xl shadow-md p-4 w-[250px]">
            <img src="image8.png" alt="Product" className="h-[250px] w-full object-cover rounded-lg" />
            <div className="flex justify-between items-center w-full mt-4">
              <div>
                <p className="font-semibold">Motherboard</p>
                <p>Rs:850/kg</p>
              </div>
              <FaCartPlus size={25} className="text-green-500 cursor-pointer" />
            </div>
          </Link>

          <Link to="/buyers" className="flex flex-col items-center rounded-xl shadow-md p-4 w-[250px]">
            <img src="image10.png" alt="Product" className="h-[250px] w-full object-cover rounded-lg" />
            <div className="flex justify-between items-center w-full mt-4">
              <div>
                <p className="font-semibold">Motherboard</p>
                <p>Rs:850/kg</p>
              </div>
              <FaCartPlus size={25} className="text-green-500 cursor-pointer" />
            </div>
          </Link>

          <Link to="/buyers" className="flex flex-col items-center rounded-xl shadow-md p-4 w-[250px]">
            <img src="image9.png" alt="Product" className="h-[250px] w-full object-cover rounded-lg" />
            <div className="flex justify-between items-center w-full mt-4">
              <div>
                <p className="font-semibold">Motherboard</p>
                <p>Rs:850/kg</p>
              </div>
              <FaCartPlus size={25} className="text-green-500 cursor-pointer" />
            </div>
          </Link>
        </div>
      </div>

      <div className="p-10 w-full">
        <p className="text-3xl mb-6">Shop by Categories</p>

        <div className="flex justify-around flex-wrap gap-8">
          <Link to="/buyers" className="flex flex-col items-center p-5 rounded-xl shadow-md w-[200px]">
            <img src="image11.png" alt="Industrial waste" className="h-24 object-contain mb-3" />
            <p className="text-xl text-green-500 font-semibold">Industrial Waste</p>
            <p>165 Products</p>
          </Link>

          <Link to="/buyers" className="flex flex-col items-center p-5 rounded-xl shadow-md w-[200px]">
            <img src="image12.png" alt="Electronic Waste" className="h-24 object-contain mb-3" />
            <p className="text-xl text-green-500 font-semibold">Agricultar Waste</p>
            <p>120 Products</p>
          </Link>

          <Link to="/buyers" className="flex flex-col items-center p-5 rounded-xl shadow-md w-[200px]">
            <img src="image13.png" alt="Plastic Waste" className="h-24 object-contain mb-3" />
            <p className="text-xl text-green-500 font-semibold"> Electronic Waste</p>
            <p>198 Products</p>
          </Link>

          <Link to="/buyers" className="flex flex-col items-center p-5 rounded-xl shadow-md w-[200px]">
            <img src="image14.png" alt="Metal Scrap" className="h-24 object-contain mb-3" />
            <p className="text-xl text-green-500 font-semibold">  Biomediacl Waste</p>
            <p>74 Products</p>
          </Link>

          <Link to="/buyers" className="flex flex-col items-center p-5 rounded-xl shadow-md w-[200px]">
            <img src="image15.png" alt="Metal Scrap" className="h-24 object-contain mb-3" />
            <p className="text-xl text-green-500 font-semibold">commercial Waste</p>
            <p>74 Products</p>
          </Link>

          <Link to="/buyers" className="flex flex-col items-center p-5 rounded-xl shadow-md w-[200px]">
            <img src="image16.png" alt="Metal Scrap" className="h-24 object-contain mb-3" />
            <p className="text-xl text-green-500 font-semibold">Food Waste</p>
            <p>74 Products</p>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Home;
