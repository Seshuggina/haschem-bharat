import React from "react";
// import HeaderNavbar from "components/Navbars/Header";
// import CustomCarousel from "components/Carousel/Carousel";
// import { Product } from "components/product/product";
// import { Partners } from "components/Partners/Partners";
// import products from "assets/data/products.json";

const Home = () => {
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
//   const newProducts = products.filter(
//     (product) => product.productStatus?.toLowerCase() === "new"
//   );

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative w-full pt-24 pb-0 bg-gray-100">
          {/* <CustomCarousel /> */}
        </section>

        {/* Top Products Section */}
        <section id="topProductsSection" className="bg-green-500 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-white shadow-lg rounded-full">
                <i className="ni ni-building text-green-500 text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Top Products</h2>
                <p className="text-white">
                  The Arctic Ocean freezes every winter, and much of the sea-ice
                  then thaws every summer. That process will continue
                  regardless.
                </p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {/* {newProducts.map((topProduct, index) => (
                <Product
                  key={topProduct.id || index}
                  product={topProduct}
                  thumbnailColor={thumbnailsColors[index % thumbnailsColors.length]}
                />
              ))} */}
            </div>
          </div>
        </section>

        {/* Our Partners Section */}
        <section id="ourPartners" className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 shadow-lg rounded-full">
                <i className="ni ni-building text-gray-600 text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Our Partners
                </h2>
                <p className="text-gray-600">
                  At <strong>HASCHEM BHARAT</strong>, we believe in the power of
                  collaboration and partnership to drive innovation in the
                  pharmaceutical industry. Our strategic alliances help us
                  maintain leadership in the market.
                </p>
              </div>
            </div>

            {/* Partners Component */}
            <div className="mt-8">{/* <Partners /> */}</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
