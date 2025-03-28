import CarouselComponent from "../features/BannerCarousel/BannerCarousel";
import Partners from "../features/Partners/Partners";
import Product from "../components/common/Product/Product";
import products from "./../assets/data/products.json";
import { ProductModel } from "../types/ProductModel";
// import AutoComplete from "../components/common/AutoComplete/AutoComplete";

const Home = () => {
  // const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
  const newProducts: any[] = products.filter(
    (product) => product.productStatus?.toLowerCase() === "new"
  );

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative w-full pb-0 home-carousel">
          {/* <div className="container mx-auto px-6 lg:px-8"> */}
          <CarouselComponent />
          {/* </div> */}
        </section>

        {/* <AutoComplete /> */}

        {/* Top Products Section */}
        <section id="topProductsSection" className="py-12">
          <div className="container mx-auto px-6 lg:px-8">
            {/* Header */}
            <p className="pb-8 text-center">
              <span className="inline-flex items-center rounded-full bg-yellow-50 px-5 py-2 text-sm font-medium text-orange ring-1 ring-yellow-600/20 ring-inset">
                OUR PRODUCTS
              </span>
            </p>
            <h2 className="text-3xl font-bold text-center">
              We Provide Reliable Products
            </h2>

            {/* Products Grid */}
            <div className="flex flex-wrap gap-8 justify-start mt-8">
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
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 shadow-lg rounded-full">
                <i className="fa-solid fa-handshake text-secondary text-3xl"></i>
              </div>
              <div>
                <h2 className="text-3xl font-bold">
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
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
