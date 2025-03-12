import { useEffect, useState } from "react";
import "./SocialNavbar.scss";

const SocialNavbar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide on scroll up
      } else {
        setVisible(true); // Show on scroll down
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full text-white z-50 transition-transform duration-100 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`social-navbar mx-auto container px-2 sm:px-6 lg:px-8 top-0 right-0 w-full bg-gray-900`}
      >
        <div className="flex justify-end space-x-4 pr-4 p-1">
          <span className="text-white">On Social: </span>
          <a href="#" target="_blank" className="text-white hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank" className="text-white hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" className="text-white hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" className="text-white hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialNavbar;
