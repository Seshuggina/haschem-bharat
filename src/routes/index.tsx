import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import { Services } from "../pages/Services/Services";
// import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { Products } from "../pages/Products/Products";
// import other pages as needed

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      
      <Route path="/products" element={<Products />} />
      {/* <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/career" element={<Career />} /> */}
      
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
