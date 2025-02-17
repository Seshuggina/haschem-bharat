import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <img
                src="https://haschembharat.com/utilities/frontend/images/logo2.png"
                alt="Haschem Bharat"
                className="h-12"
              />
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
              href="#"
              className="inline-block mt-4 text-primary font-semibold hover:underline"
            >
              Get Directions →
            </a>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://twitter.com/creativetim"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="https://www.facebook.com/creativetim"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="https://dribbble.com/creativetim"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://haschembharat.com/"
            className="text-primary hover:underline"
          >
            HASCHEM BHARAT
          </a>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
