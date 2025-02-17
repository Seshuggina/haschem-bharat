import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalStore from "./../../../store/globals";
import { TypeaheadSearch } from "../../../features/TypeaheadSearch/TypeaheadSearch";
import "./Header.scss";

const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const updateProductsCategory = useGlobalStore(
    (state: any) => state.updateProductsCategory
  );
  const updateSearchText = useGlobalStore(
    (state: any) => state.updateSearchText
  );

  const handleChange = (inputText: string) => {
    setSearchQuery(inputText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery) {
      updateSearchText(searchQuery);
      navigate(`/products`);
    }
  };

  //   const handleNavigation = (section) => {
  //     navigate("/services");
  //     setTimeout(() => {
  //       scroller.scrollTo(section, {
  //         duration: 500,
  //         delay: 0,
  //         smooth: "easeInOutQuart",
  //       });
  //     }, 500);
  //   };

  //   const navigateToProducts = (section) => {
  //     updateProductsCategory([section]);
  //     navigate("/products");
  //   };

  return (
    <>
      {/* <header className="bg-white shadow-md fixed w-full z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link to="/" className="text-lg font-bold">
            <img
              src="/assets/img/brand/logo2.png"
              alt="Logo"
              className="h-10"
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600">
                Products
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-40">
                {[
                  "APIs",
                  "Impurities",
                  "Metabolites",
                  "Nitrosamines",
                  "Building blocks",
                ].map((item) => (
                  <Link
                    key={item}
                    to="/products"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600">
                Services
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-56">
                {[
                  "APIImpurities",
                  "CustomSynthesis",
                  "CROCDMOservices",
                  "ChemicalSourcing",
                ].map((item) => (
                  <Link
                    key={item}
                    to="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    
                    {item.replace(/([A-Z])/g, " $1").trim()}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/about-us" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-700 hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>
          <form className="flex items-center" onSubmit={handleSubmit}>
            <TypeaheadSearch
              onSubmit={(text: string) => {
                updateSearchText(text);
                navigate(`/products`);
              }}
              onInputChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
            >
              <i className="fa fa-search" />
            </button>
          </form>
        </nav>
      </header> */}

      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
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
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Link to="/" className="text-lg font-bold">
                  <img
                    src="/assets/img/brand/logo2.png"
                    alt="Logo"
                    className="h-10"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    aria-current="page"
                    className="text-gray-700 hover:text-blue-600 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  >
                    Home
                  </Link>
                  <div className="relative group">
                    <button
                      type="button"
                      className="relative inline-flex w-full justify-center gap-x-1.5 text-gray-700 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium text-white"
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

                    <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-40">
                      {[
                        "APIs",
                        "Impurities",
                        "Metabolites",
                        "Nitrosamines",
                        "Building blocks",
                      ].map((item) => (
                        <Link
                          key={item}
                          to="/products"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="relative group">
                    <button
                      type="button"
                      className="relative inline-flex w-full justify-center gap-x-1.5 text-gray-700 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium text-white"
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

                    <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-56">
                      {[
                        "APIImpurities",
                        "CustomSynthesis",
                        "CROCDMOservices",
                        "ChemicalSourcing",
                      ].map((item) => (
                        <Link
                          key={item}
                          to="/services"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {item.replace(/([A-Z])/g, " $1").trim()}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/about-us"
                    className="text-gray-700 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium text-white"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact-us"
                    className="text-gray-700 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium text-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="size-6"
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
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>

              <form
                className="flex items-center bg-gray-800 rounded-md overflow-hidden"
                onSubmit={handleSubmit}
              >
                <TypeaheadSearch
                  onSubmit={(text: string) => {
                    handleChange(text);
                    navigate(`/products`);
                  }}
                  onInputChange={handleChange}
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
                >
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderNavbar;
