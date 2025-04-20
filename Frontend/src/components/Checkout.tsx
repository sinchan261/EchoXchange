import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

function Checkout() {
  const summary = [
    { items: "Rotten Grains", price: "200", pic: "image4.png" },
    { items: "Rotten Grains", price: "200", pic: "image4.png" }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-4 shadow-md bg-white">
        <div className="flex items-center gap-2">
          <img
            src="image1.png"
            alt="EcoXchange"
            className="h-10 w-10 object-cover"
          />
          <p className="text-xl font-semibold text-green-700">EcoXchange</p>
        </div>

        <div className="flex items-center w-[60%] md:w-[40%]">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="px-8 py-2 border border-amber-50 border-b-green-200 rounded w-full outline-none"
            />
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-r-xl hover:bg-green-600 cursor-pointer">
            Search
          </button>
        </div>

        <div className="flex items-center gap-4">
          <FaHeart className="text-xl text-gray-700 cursor-pointer hover:text-green-600" />
          <div className="h-6 border-l border-black"></div>
          <FaShoppingCart className="text-xl text-gray-700 cursor-pointer hover:text-green-600" />
        </div>
      </nav>

      {/* Body Section */}
      <div className="flex flex-col md:flex-row justify-center p-4 md:p-8 gap-8 md:gap-10">
        {/* Left Side: Billing Info */}
        <div className="w-full md:w-[60%] bg-white shadow p-4 md:p-8 rounded">
          <p className="text-2xl mb-5 font-semibold">Billing Information</p>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col w-full">
              <label>First Name</label>
              <input
                placeholder="Your first name"
                className="border border-gray-200 rounded py-2 px-4 mt-1"
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Last Name</label>
              <input
                placeholder="Your last name"
                className="border border-gray-200 rounded py-2 px-4 mt-1"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label>Company Name (Optional)</label>
            <input
              placeholder="Company name"
              className="border border-gray-200 rounded py-2 px-4 mt-1"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label>Street Address</label>
            <input
              placeholder="Address"
              className="border border-gray-200 rounded py-2 px-4 mt-1"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col w-full">
              <label>Country/Region</label>
              <input
                placeholder="Country"
                className="border border-gray-200 rounded py-2 px-4 mt-1"
              />
            </div>
            <div className="flex flex-col w-full">
              <label>States</label>
              <input
                placeholder="States"
                className="border border-gray-200 rounded py-2 px-4 mt-1"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col w-full">
              <label>Email</label>
              <input
                placeholder="Your Email"
                className="border border-gray-200 rounded py-2 px-4 mt-1"
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Phone</label>
              <input
                placeholder="Your Phone No."
                className="border border-gray-200 rounded py-2 px-4 mt-1"
              />
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold mt-6 mb-2">Additional Info</p>
            <p>Order Notes (Optional)</p>
            <textarea
              className="border border-gray-200 rounded py-2 px-4 w-full mt-1"
             
            ></textarea>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full md:w-[35%] bg-white shadow p-4 md:p-8 rounded">
          <p className="text-lg font-semibold mb-4">Order Summary</p>

          {summary.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-6 border-b pb-2"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.pic}
                  alt={item.items}
                  className="h-12 w-12 object-cover rounded"
                />
                <p className="text-gray-700 font-medium">{item.items}</p>
              </div>
              <p className="text-green-700 font-semibold">₹{item.price}</p>
            </div>
          ))}

          <div className="flex justify-between mb-2">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-800 font-medium">₹400</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-800 font-medium">₹50</p>
          </div>

          <div className="border-b border-gray-300 mb-4"></div>

          <div className="flex justify-between mb-4">
            <p className="text-xl font-semibold">Total</p>
            <p className="text-xl font-semibold text-green-700">₹450</p>
          </div>

          <div className="mb-4">
            <p className="text-lg font-semibold mb-2">Payment Method</p>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" value="cod" defaultChecked />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" value="online" />
                Online Payment
              </label>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <button className="bg-green-500 text-white py-2 rounded-2xl w-[40%] hover:bg-green-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
