import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex justify-center items-center p-4 shadow-md ">
        <div className="flex items-center gap-2 mr-10 w-[40%]">
          <img src="image1.png" alt="EcoXchange Logo" className="h-8 w-8" />
          <p className="font-bold text-lg">EcoXchange</p>
        </div>
        <div className="flex gap-15 w-[60%]">
          <Link to="/" className="text-green-400">Home</Link>
          <Link to="/checkout" className="text-green-400">Cart</Link>
          <Link to="/wishlist" className="text-green-400">wishlist</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
