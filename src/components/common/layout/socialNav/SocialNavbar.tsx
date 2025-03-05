import { useEffect, useState } from "react";

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
    <div className="bg-gray-900">
      <div
        className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 top-0 right-0 w-full bg-gray-900 p-3 transition-transform duration-100 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end space-x-4 pr-4">
          <span className="text-white">On Social: {" "} </span>
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
