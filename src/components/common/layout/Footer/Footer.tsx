import { Link } from "react-router-dom";
import FooterBand from "../../FooterBand/FooterBand";
import logoWhite from "./../../../../assets/img/brand/logo_white.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-4">
      <div className="container mx-auto px-6">
        <FooterBand></FooterBand>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <Link to="/">
                <img src={logoWhite} alt="Haschem Bharat" className="h-12" />
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              Our Genesis In 2023, HASCHEM Bharat was born in the heart of
              Hyderabad, a city renowned for its pharmaceutical prowess.
            </p>
            <a
              href="/contact-us"
              className="inline-block mt-4 text-primary font-semibold hover:underline"
            >
              Contact Us →
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Contacts</h3>
            <p className="text-gray-400 text-sm">
              If you have any questions or need help:
            </p>
            <div className="flex items-center mt-4">
              <i className="fas fa-phone text-primary mr-3"></i>
              <h4>
                <a href="tel:+917816003510" className="hover:text-white">
                  +91 7816 00 3510
                </a>
              </h4>
            </div>
            <p className="text-gray-400 mt-2">
              #Ameerpet, Hyderabad, TS - 5000032
            </p>
            <a
              target="_blank"
              href="https://www.google.com/maps/dir//Ramesh+Towers+3-82,+Nizampet+Rd+near+Karur+Vysya+Bank+Hyderabad-Nizampet,+Nizampet+Hyderabad,+Telangana+500090/@17.513181,78.3843927,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb91ff87d2ff8b:0x5d24e1360d47efff!2m2!1d78.3843927!2d17.513181?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D"
              className="inline-block mt-4 text-primary font-semibold hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row lg:justify-between gap-8 border-t border-gray-700 mt-8 pt-3 text-sm text-gray-500">
          <div className="text-center md:text-left flex-1 justify-center md:justify-end">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://haschembharat.com/"
              className="text-primary hover:underline"
            >
              HASCHEM BHARAT
            </a>
            . All rights reserved.
          </div>

          <div className="flex flex-1 flex-wrap justify-center md:justify-end sm:flex-nowrap space-x-4 sm:w-auto">
            <a
              href="https://www.facebook.com/creativetim"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=8121333007"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
