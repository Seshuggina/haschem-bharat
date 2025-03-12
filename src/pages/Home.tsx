import CarouselComponent from "../features/BannerCarousel/BannerCarousel";
import Partners from "../features/Partners/Partners";
import Product from "../components/common/Product/Product";
import products from "./../assets/data/products.json";
import { ProductModel } from "../types/ProductModel";
// import AutoComplete from "../components/common/AutoComplete/AutoComplete";

const Home = () => {
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
  const newProducts: any[] = products.filter(
    (product) => product.productStatus?.toLowerCase() === "new"
  );

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative w-full pt-24 pb-0">
          {/* <div className="container mx-auto px-6 lg:px-8"> */}
            <CarouselComponent />
          {/* </div> */}
        </section>

        {/* <AutoComplete /> */}

        {/* Top Products Section */}
        <section id="topProductsSection" className="bg-green-500 py-12">
          <div className="container mx-auto px-6 lg:px-8">
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
              {newProducts.map((topProduct: ProductModel) => (
                <Product key={topProduct.Sno} product={topProduct} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Partners Section */}
        <section id="ourPartners" className="py-12">
          <div className="container mx-auto px-6 lg:px-8">
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
            <div className="mt-8">
              <Partners />
            </div>
            <button className="relative px-6 py-2 text-sm font-medium text-black bg-white border-2 border-orange-500 rounded-full transition-all duration-300 ease-in-out hover:bg-orange-500 hover:text-white hover:border-orange-600">
              <span className="absolute left-0 right-0 bottom-0 top-0 transition-transform duration-300 ease-in-out transform hover:translate-x-0 translate-x-full">
                Hover me
              </span>
              Button
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
