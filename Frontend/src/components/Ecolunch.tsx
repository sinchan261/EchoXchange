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
            <li className="border-b-[3px] border-[#72c267] text-[#72c267]">
              <a href="#" className="text-[#72c267]">Home</a>
            </li>
            <li>
              <a href="#" className="text-[#666] font-medium text-[16px] hover:text-black transition-colors">About</a>
            </li>
            <li>
              <a href="#" className="text-[#666] font-medium text-[16px] hover:text-black transition-colors">Partners</a>
            </li>
            <li>
              <a href="#" className="text-[#666] font-medium text-[16px] hover:text-black transition-colors">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-wrap p-[130px_60px] bg-[#fafafa] relative bg-[url('https://cdn.pixabay.com/photo/2017/04/02/19/23/environment-2196690_1280.jpg')] bg-cover bg-center bg-no-repeat h-[620px]">
        <div className="flex-1 min-w-[350px] z-[2]">
          <h3 className="font-semibold text-[27px] mb-2 uppercase text-white leading-[1.6]">
            WELCOME! LET’S GIVE E-WASTE A SECOND LIFE—<br />
            BUY, SELL, AND MAKE A DIFFERENCE TOGETHER.
          </h3>
          <h1 className="text-[60px] font-extrabold my-2 tracking-tight text-white">
            Eco<span className=" text-[70px] text-green-400">X</span>change
          </h1>
          <p className="my-5 text-[18px] text-white">
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
