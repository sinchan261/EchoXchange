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
import Validation from "./components/Validation.tsx";
import Errorpage from "./components/Errorpage.tsx";
import Validation2 from "./components/validation2.tsx";
import { Suspense } from "react";
import Loader from "./components/Spinner.tsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* <Navbar /> */}

      <div className="flex-grow">
        <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<EcoLaunch />} />
          <Route path="/landingpage" element={<LandingPage />} />
          
          {/* Apply validation to all routes except login and signup */}
          <Route path="/home" element={<Validation><Home /></Validation>} />
          <Route path="/wishlist" element={<Validation><Wishlist /></Validation>} />
          <Route path="/navbar1" element={<Validation><Navbar1 /></Validation>} />
          <Route path="/checkout" element={<Validation><Checkout /></Validation>} />
          <Route path="/buyers" element={<Validation><Buyer_page /></Validation>} />
          <Route path="/contact" element={<Validation><Contact /></Validation>} />
          <Route path="/error" element={<Validation><Errorpage /></Validation>} />
          <Route path="/loader" element={<Loader/>} />
          {/* Do not apply validation for login or signup */}
          <Route path="/signup" element={<EcoXchangeLogin/>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes> 
        </Suspense>

      </div>

      <Footer />
    </div>
  );
}

export default App;
