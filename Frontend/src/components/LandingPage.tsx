import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div 
        className="h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(https://evreka.co/wp-content/uploads/2021/04/Why-solid-waste-matter-2048x1365.jpeg)` }}
      >
        <div className="w-[50%] flex flex-col gap-8 p-5 text-white drop-shadow-lg">
          
          <div className="text-2xl font-semibold leading-relaxed">
            <p>WELCOME! <span className="text-green-300 font-bold">LET'S GIVE E-WASTE A SECOND LIFE</span></p>
            <p>BUY, SELL, AND MAKE A DIFFERENCE TOGETHER</p>
          </div>

          <div className="flex items-center text-green-300 tracking-widest">
            <span className="text-6xl font-bold">ECO</span>
            <span className="text-9xl mx-3 font-extrabold drop-shadow-xl text-white">X</span>
            <span className="text-6xl font-bold">CHANGE</span>
          </div>

          <div className="leading-snug">
            <p className="text-4xl text-green-400 ">Step in and be part of a cleaner future — </p>
            <p className="text-4xl text-green-400 ">where e-waste meets purpose...</p>
          </div>

          <div>
            <div className="flex gap-5">
              <Link 
                to="/signup" 
                className="p-5 bg-orange-600 text-white rounded-3xl font-semibold shadow-md hover:bg-orange-700 transition duration-300"
              >
                SELL HERE
              </Link>

              <Link 
                to="/signup" 
                className="p-5 bg-green-700 text-white rounded-3xl font-semibold shadow-md hover:bg-green-900 transition duration-300"
              >
                BUY HERE
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default LandingPage;
