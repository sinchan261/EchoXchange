import Navbar from "./components/Navbar.tsx";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.tsx";
import Home from "./components/Home.tsx";
import Footer from "./components/Footer.tsx";
import Wishlist from "./components/Wishlist.tsx";
import Navbar1 from "./components/Navbar1.tsx";
import Checkout from "./components/Checkout.tsx";
import Buyer_page from "./components/Buyer_page.tsx";
import EcoLaunch from "./components/Ecolunch.tsx";
import EcoXchangeLogin from "./components/Signup.tsx";
import LoginPage from "./components/Login.tsx";
import Contact from "./components/Contact.tsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* <Navbar /> */}
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<EcoLaunch />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/navbar1" element={<Navbar1 />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/buyers" element={<Buyer_page />} />
          <Route path="/signup" element={<EcoXchangeLogin />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<Contact></Contact>}></Route>
          {/* Remove footer route, it's now global */}
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
