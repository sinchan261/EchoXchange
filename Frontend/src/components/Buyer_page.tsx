
import { FaArrowRight, FaTruck, FaLock, FaTags, FaUndo } from "react-icons/fa";
import Navbar1 from "./Navbar1";

function Buyer_page() {
  return (
    <div>
      <Navbar1 />

      {/* Body Section */}
      <div className="flex h-screen p-6 gap-6 mt-4">
        {/* Left Image Part */}
        <div
          className="w-[60%] bg-cover bg-center rounded-xl shadow-lg flex flex-col justify-between p-10"
          style={{ backgroundImage: `url('image21.png')` }}
        >
          <div>
            <div>
              <span className="text-6xl font-bold">Eco</span>
              <span className="text-amber-400 text-8xl font-bold">X</span>
              <span className="text-6xl font-bold">Change</span>
            </div>

            <div className="flex items-start gap-4 mt-8 border-l-4 border-green-500 pl-4">
              <div className="flex flex-col">
                <span className="text-lg text-white">Sale up to</span>
                <span className="bg-amber-500 text-white py-1 px-5 rounded-2xl text-lg mt-2">30% OFF</span>
                <p className="text-white text-base mt-2">Free shipping on your first order</p>
              </div>
            </div>

            <div className="mt-12">
              <button className="flex items-center gap-2 text-green-600 px-6 py-2 text-lg font-semibold bg-white rounded-xl hover:bg-green-50 shadow-md">
                Shop now <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Part */}
        <div className="w-[40%] flex flex-col gap-6 pt-4">
          <div
            className="flex-1 bg-cover bg-center rounded-xl shadow-lg flex flex-col justify-between p-6"
            style={{ backgroundImage: `url('image22.png')` }}
          >
            <div className="text-white">
              <p className="text-2xl font-semibold">Summer Sale</p>
              <p className="font-bold text-3xl mt-2">75% OFF</p>
              <p className="text-lg mt-1">Only on E-waste</p>
            </div>
            <button className="mt-4 px-8 py-2 bg-green-200 rounded-xl flex items-center gap-2 self-start hover:bg-green-300">
              Shop Now <FaArrowRight />
            </button>
          </div>

          <div
            className="flex-1 bg-cover bg-center rounded-xl shadow-lg flex flex-col justify-between p-6"
            style={{ backgroundImage: `url('image23.png')` }}
          >
            <div>
              <p className="text-2xl font-semibold">Best Deal</p>
              <p className="font-bold text-3xl mt-2">Deal Of The Month</p>
            </div>
            <button className="mt-4 px-8 py-2 bg-green-200 rounded-xl flex items-center gap-2 self-start hover:bg-green-300">
              Shop Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="mt-10 px-6">
        <div className="flex justify-between items-center gap-6">
          <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
            <FaTruck className="text-3xl text-green-600" />
            <div>
              <p className="font-bold text-lg">Shipping</p>
              <p className="text-gray-600">Shipping with discount on all your orders</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
            <FaLock className="text-3xl text-green-600" />
            <div>
              <p className="font-bold text-lg">Secure Payment</p>
              <p className="text-gray-600">Safe and encrypted transactions</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
            <FaTags className="text-3xl text-green-600" />
            <div>
              <p className="font-bold text-lg">Best Offers</p>
              <p className="text-gray-600">Exciting deals and discounts</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
            <FaUndo className="text-3xl text-green-600" />
            <div>
              <p className="font-bold text-lg">Easy Return</p>
              <p className="text-gray-600">Hassle-free return policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mt-16 px-6">
        <p className="text-2xl font-bold mb-6">Popular Categories</p>
        <div className="grid grid-cols-6 gap-6">
          {[
            "Furniture Waste", "Plastic Waste", "Electronic Waste", "Metal Waste",
            "Glass Waste", "Paper Waste", "Batteries", "Appliance Waste",
            "Organic Waste", "Clothing Waste", "Tyres & Rubber", "Construction Waste"
          ].map((category, i) => (
            <div key={i} className="flex flex-col items-center p-4 border rounded-lg hover:border-green-500 transition-all">
              <img src="image25.png" className="h-20 mb-2" alt={category} />
              <p>{category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="mt-16 px-6">
        <p className="text-2xl font-bold mb-6">Popular Products</p>
        <div className="grid grid-cols-5 gap-6">
          {[
            { name: "Broken Printer", price: "$100", img: "image26.png" },
            { name: "Old Monitor", price: "$150", img: "image27.png" },
            { name: "Metal Scrap", price: "$70", img: "image28.png" },
            { name: "Plastic Bottles", price: "$50", img: "image29.png" },
            { name: "Glass Waste", price: "$90", img: "image30.png" },
            { name: "Copper Wires", price: "$120", img: "image31.png" },
            { name: "Old CPU", price: "$200", img: "image32.png" },
            { name: "Old Laptop", price: "$300", img: "image33.png" },
            { name: "Wood Waste", price: "$85", img: "image34.png" },
            { name: "Battery Pack", price: "$60", img: "image35.png" }
          ].map((product, i) => (
            <div key={i} className="flex flex-col items-center p-4 border rounded-lg hover:border-green-500 transition-all">
              <img src={product.img} className="h-40 mb-2" alt={product.name} />
              <p className="font-semibold">{product.name}</p>
              <div className="flex items-center justify-between w-full mt-2">
                <p className="text-green-600 font-bold">{product.price}</p>
                <span>🛒</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 px-6">
  {/* Grid with 3 cards in one row */}
  <div className="grid grid-cols-3 gap-6">
    {/* Card 1 */}
    <div
  className="flex flex-col justify-between p-4 border rounded-lg hover:border-green-500 transition-all h-72 w-full bg-cover bg-center"
  style={{ backgroundImage: `url('image35.png')` }}
>
  {/* Text Section Over Image */}
  <div>
    <p className="font-semibold text-white text-lg">Fabric & Textile Scrap</p>
    <p className="text-white text-sm">From just ₹350/bundle — perfect for upcycling</p>
  </div>

  {/* Button Section */}
  <div className="flex justify-center">
    <button className="bg-white text-green-600 py-2 px-5 rounded-lg font-semibold hover:bg-green-100">
      Shop Now
    </button>
  </div>
</div>


    {/* Card 2 */}
    <div
  className="flex flex-col justify-between p-4 border rounded-lg hover:border-green-500 transition-all h-72 w-full bg-cover bg-center"
  style={{ backgroundImage: `url('image35.png')` }}
>
  {/* Text Section Over Image */}
  <div>
    <p className="font-semibold text-white text-lg">100%Organic Waste</p>
    <p className="text-white text-sm">Upto 60% of an bulk agri /food waste</p>
  </div>

  {/* Button Section */}
  <div className="flex justify-center">
    <button className="bg-white text-green-600 py-2 px-5 rounded-lg font-semibold hover:bg-green-100">
      Shop Now
    </button>
  </div>
</div>


    {/* Card 3 */}
    <div
  className="flex flex-col justify-between p-4 border rounded-lg hover:border-green-500 transition-all h-72 w-full bg-cover bg-center"
  style={{ backgroundImage: `url('image35.png')` }}
>
  {/* Text Section Over Image */}
  <div>
    <p className="font-semibold text-white text-lg">Fabric & Textile Scrap</p>
    <p className="text-white text-sm">From just ₹350/bundle — perfect for upcycling</p>
  </div>

  {/* Button Section */}
  <div className="flex justify-center">
    <button className="bg-white text-green-600 py-2 px-5 rounded-lg font-semibold hover:bg-green-100">
      Shop Now
    </button>
  </div>
</div>

  </div>
</div>


    </div>
  );
}

export default Buyer_page;
