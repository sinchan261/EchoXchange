import { Link } from "react-router-dom";

const EcoLaunch = () => {
  return (
    <div className="font-[Montserrat] text-[#222] m-0 p-0 bg-white">

      <header className="flex justify-between items-center p-[15px_40px] bg-white border-b border-[#eee]">
        <div className="flex items-center ">
          <img src="image1.png" alt="EcoXchange Logo" className="h-[50px] mr-3" />
          <h1 className="text-2xl font-bold ">EcoXchange</h1>
        </div>

        <nav>
          <ul className="flex gap-[30px] list-none m-0 p-0">
            <li className="">
              <a href="/contact" className="text-green-600">Contact Us</a>
             <h3 className="font-bold text-xl">Welcome to EcoXchange</h3>
            </li>

          </ul>
        </nav>
      </header>

      <main className="flex flex-wrap p-[130px_60px] bg-[#fafafa] relative bg-[url('https://img.freepik.com/premium-photo/green-planet-with-green-background_832479-5069.jpg?ga=GA1.1.1144923271.1713171046&semt=ais_hybrid&w=740')] bg-cover bg-center bg-no-repeat h-[620px]">
        <div className="flex-1 min-w-[350px] z-[2]">
          <h3 className="font-semibold text-[27px] mb-2 uppercase text-black leading-[1.6]">
            WELCOME! LET’S GIVE E-WASTE A SECOND LIFE—<br />
            BUY, SELL, AND MAKE A DIFFERENCE TOGETHER.
          </h3>
          <h1 className="text-[60px] font-extrabold my-2 tracking-tight text-black">
            Eco<span className=" text-[70px] text-green-400">X</span>change
          </h1>
          <p className="my-5 text-[24px] text-black">
            Step in and be part of a cleaner future—where e-waste meets purpose.
          </p>

          <div className="flex gap-5 mt-[25px]">
            <Link to="/signup" className="bg-[#f7c948] py-[12px] px-[22px] rounded-full font-bold text-white no-underline hover:bg-[#f0b429] transition">SELL HERE</Link>
            <Link to="/signup" className="bg-[#f7c948] py-[12px] px-[22px] rounded-full font-bold text-white no-underline hover:bg-[#f0b429] transition">BUY HERE</Link>
          </div>
        </div>
      </main>

    </div>
  );
};

export default EcoLaunch;
