import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useGlobalStore from "../../../../store/globals";
import { TypeaheadSearch } from "../../../../features/TypeaheadSearch/TypeaheadSearch";
import logo from "./../../../../assets/img/brand/haschem_bharat_logo.svg";
import logo_white from "./../../../../assets/img/brand/logo_white.svg";
import { getCategories } from "../../../../services/utilities";
import "./Header.scss";

const HeaderNavbar = () => {
  const [visible, setVisible] = useState(true);
  const [isProductsMenu, setIsProductsMenu] = useState(false);
  const [isServicesMenu, setIsServicesMenu] = useState(false);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const uniqueCategories = getCategories();
  // Push 'All' category to the beginning of the
  uniqueCategories.unshift("All");

  const updateSearchText = useGlobalStore(
    (state: any) => state.updateSearchText
  );
  const updateSelectedProductsCategory = useGlobalStore(
    (state: any) => state.updateSelectedProductsCategory
  );

  const handleChange = (inputText: string) => {
    setSearchQuery(inputText);
  };

  const productSelectionChange = (inputText: string) => {
    setSearchQuery(inputText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery) {
      updateSearchText(searchQuery);
      navigate(`/products`);
    }
  };

  const getLinkClass = (path: string, classes: string) => {
    return location.pathname === path
      ? `${classes} nav-active text-orange`
      : classes;
  };

  const navigateToProducts = (section: string) => {
    updateSelectedProductsCategory([section]);
    navigate("/products");
  };

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

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`fixed left-0 w-full text-white z-50 transition-transform duration-100 ${
          visible ? "translate-y-8" : "translate-y-0"
        }`}
      >
        <div className="haschem-navbar mx-auto lg:container px-2 sm:px-3 lg:px-8">
          <div className="fixed w-full relative flex items-center justify-between whitespace-nowrap">
            <div className="absolute inset-y-0 right-0 z-1 flex items-center sm:hidden toggle-menu">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-gray-500 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset toggle-menu"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center hb-logo">
              <Link
                to="/"
                className="text-lg font-bold h-16 flex items-center min-w-[100px]"
              >
                <img src={logo} alt="Logo" width="113px" />
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end navbar-wrapper">
              <div className="hidden sm:ml-2 sm:block nav-items">
                <div className="flex sm:space-x-0 space-x-4">
                  <Link
                    to="/"
                    aria-current="page"
                    className={getLinkClass(
                      "/",
                      "text-gray-700 h-16 flex items-center px-3 py-2 text-sm font-medium hover:text-orange"
                    )}
                  >
                    Home
                  </Link>
                  <div className="relative group">
                    <button
                      type="button"
                      className={getLinkClass(
                        "/products",
                        "relative inline-flex w-full justify-center gap-x-1.5 h-16 flex items-center text-gray-700 hover:text-orange px-3 py-2 text-sm font-medium"
                      )}
                      // className="relative inline-flex w-full justify-center gap-x-1.5 h-16 flex items-center text-gray-700 hover:text-orange px-3 py-2 text-sm font-medium"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Products
                      <svg
                        className="-mr-1 size-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div className="hb-dropdown absolute hidden group-hover:block bg-white shadow-md mt-0 py-2 z-10">
                      {uniqueCategories.map((category) => (
                        <Link
                          key={category}
                          to="/products"
                          className="block px-4 py-2 text-gray-700 hover:text-orange"
                          onClick={() => navigateToProducts(category)}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="relative group">
                    <button
                      type="button"
                      className={getLinkClass(
                        "/services",
                        "relative inline-flex w-full justify-center gap-x-1.5 h-16 flex items-center text-gray-700 hover:text-orange px-3 py-2 text-sm font-medium"
                      )}
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Services
                      <svg
                        className="-mr-1 size-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div className="small hb-dropdown absolute hidden group-hover:block bg-white shadow-md mt-0 py-2 w-56 z-10">
                      {[
                        "API Impurities",
                        "Custom Synthesis",
                        "CRO CDMO services",
                        "Chemical Sourcing",
                      ].map((item) => (
                        <Link
                          key={item}
                          to={`/services#${item.replace(/\s+/g, "")}`}
                          className="block px-4 py-2 text-gray-700 hover:text-orange"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/about-us"
                    className={getLinkClass(
                      "/about-us",
                      "text-gray-700 hover:text-orange h-16 flex items-center px-3 py-2 text-sm font-medium"
                    )}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact-us"
                    className={getLinkClass(
                      "/contact-us",
                      "text-gray-700 hover:text-orange h-16 flex items-center px-3 py-2 text-sm font-medium"
                    )}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            {/* Search Bar */}
            <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-3 sm:pr-0 hb-gbl-search">
              <form
                className="flex items-center border hb-border-primary rounded-md hb-border-primary-focus"
                onSubmit={handleSubmit}
              >
                <TypeaheadSearch
                  onSubmit={(text: string) => {
                    productSelectionChange(text);
                  }}
                  onInputChange={handleChange}
                />
                {/* TODO */}
                <button
                  type="submit"
                  className="hb-bg-primary text-white px-4 py-2"
                >
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="flex items-center justify-between hb-logo pl-5">
            <Link to="/" className="text-lg font-bold h-16 flex items-center">
              <img src={logo_white} alt="Logo" />
            </Link>
            <button
              type="button"
              onClick={toggleMenu}
              className="rounded-full text-white hover:bg-gray-200 text-5xl cursor-pointer close"
            >
              &times;
            </button>
          </div>

          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="/"
              onClick={() => {
                setIsOpen(false);
                setIsProductsMenu(false);
                setIsServicesMenu(false);
              }}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-orange"
            >
              Home
            </Link>
            {/* Dropdown for Products */}
            <div className="relative">
              <button
                type="button"
                className={getLinkClass(
                  "/products",
                  `relative inline-flex w-full justify-start gap-x-1.5 text-base block font-medium flex items-center text-gray-300 hover:text-orange px-3 py-2 hover:bg-gray-700 ${
                    isProductsMenu ? "show bg-gray-700" : ""
                  }`
                )}
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setIsProductsMenu(!isProductsMenu)}
              >
                Products
                <svg
                  className="-mr-1 size-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className={`hb-dropdown relative group-hover:block bg-white shadow-md mt-0 py-2 z-10 ${
                  isProductsMenu ? "" : "hidden"
                }`}
              >
                {uniqueCategories.map((category) => (
                  <Link
                    key={category}
                    to="/products"
                    className="block px-4 py-2 text-gray-700 hover:text-orange"
                    onClick={() => {
                      navigateToProducts(category);
                      setIsOpen(false);
                      setIsProductsMenu(false);
                      setIsServicesMenu(false);
                    }}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
              <button
                type="button"
                className={getLinkClass(
                  "/services",
                  `relative inline-flex w-full justify-start gap-x-1.5 text-base block font-medium flex items-center text-gray-300 hover:text-orange px-3 py-2 hover:bg-gray-700 ${
                    isServicesMenu ? "show bg-gray-700" : ""
                  }`
                )}
                onClick={() => setIsServicesMenu(!isServicesMenu)}
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Services
                <svg
                  className="-mr-1 size-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className={`small hb-dropdown relative group-hover:block bg-white shadow-md mt-0 py-2 z-10 ${
                  isServicesMenu ? "" : "hidden"
                }`}
              >
                {[
                  "APIImpurities",
                  "CustomSynthesis",
                  "CROCDMOservices",
                  "ChemicalSourcing",
                ].map((item) => (
                  <Link
                    key={item}
                    to={`/services#${item.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-700 hover:text-orange"
                    onClick={() => {
                      setIsOpen(false);
                      setIsProductsMenu(false);
                      setIsServicesMenu(false);
                    }}
                  >
                    {item.replace(/([A-Z])/g, " $1").trim()}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/about-us"
              onClick={() => {
                setIsOpen(false);
                setIsProductsMenu(false);
                setIsServicesMenu(false);
              }}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-orange"
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              onClick={() => {
                setIsOpen(false);
                setIsProductsMenu(false);
                setIsServicesMenu(false);
              }}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-orange"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* End of Mobile Menu */}
      </nav>
    </>
  );
};

export default HeaderNavbar;
