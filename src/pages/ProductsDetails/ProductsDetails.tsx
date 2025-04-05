import React from "react";
import products from "./../../assets/data/products.json";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.scss";
import ImageLoad from "../../components/common/Image/Image";

export const ProductDetails: React.FC = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const selectedProduct = products?.find(
    (product) => product.Sno?.toString() === id
  );

  const relatedProducts = products.filter(
    (product) =>
      selectedProduct &&
      product.Sno !== selectedProduct.Sno && // Exclude the current product
      product.category.some((category) =>
        selectedProduct.category.includes(category)
      )
  );
  const backToProducts = () => {
    navigate("/products");
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* TODO - Add Back to Products button */}
      {/* ICON - Add Back to Products button */}
      <div className="bg-gray">
        <section className="flex services-banner products-banner relative py-16 hb-h-350 items-center text-white">
          <div className="relative container mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mt-16">
              Product Details
            </h1>
          </div>
        </section>

        <div className="container mx-auto py-8 pb-16 pb-25">
          <div className="flex flex-wrap gap-8">
            <div className="hidden lg:flex rounded-md flex-col py-8 p-4 bg-white product-list relative">
              <h3 className="font-bold text-xl mb-4 bg-white">
                Related Products
              </h3>
              <ul className="pr-2">
                {relatedProducts.map((product, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      title={product.impurityName}
                      to={`/products-details/${product.Sno}`}
                      className="text-gray-700 hover:text-orange flex items-center px-3 py-2 pr-2 text-sm font-medium"
                    >
                      &#10095;&#10095; &nbsp;{product.impurityName}
                    </Link>
                  </li>
                ))}
                {relatedProducts.length === 0 && (
                  <h6 className="mb-2">2,2,6-Trimethyl Cyclohexanone</h6>
                )}
              </ul>
            </div>

            <div className="flex-1 bg-white p-8 rounded-md">
              <h2 className="flex text-2xl sm:text-3xl font-semibold mb-4 justify-between items-center">
                {selectedProduct?.impurityName}
                <button
                  title=" Back to Products"
                  className="bg-gray-100 hover:bg-gray-300 text-gray-800 text-xs font-semibold py-2 pl-2 pr-1 rounded inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </h2>
              <div className="flex flex-col lg:flex-row items-start gap-6 mb-6 product-details items-stretch">
                {/* Details Section */}
                <div className="flex-2 xs:order-2">
                  <div className="text-gray-700 hb-details grid grid-cols-1 gap-x-8 gap-y-4">
                    <div className="grid grid-cols-[auto_1fr] items-start gap-x-2 gap-y-1">
                      <span className="font-semibold whitespace-nowrap">
                        CAS Number:
                      </span>
                      <span className="text-secondary font-semibold break-words">
                        {selectedProduct?.casNo}
                      </span>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] items-start gap-x-2 gap-y-1">
                      <span className="font-semibold whitespace-nowrap">
                        Molecular Formula:
                      </span>
                      <span className="text-secondary font-semibold break-words">
                        {selectedProduct?.molecularFormula}
                      </span>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] items-start gap-x-2 gap-y-1">
                      <span className="font-semibold whitespace-nowrap">
                        Product Format:
                      </span>
                      <span className="text-secondary font-semibold break-words">
                        TODO
                      </span>
                    </div>

                    <div className="grid grid-cols-[auto_1fr] items-start gap-x-2 gap-y-1">
                      <span className="font-semibold whitespace-nowrap">
                        Molecular Weight:
                      </span>
                      <span className="text-secondary font-semibold break-words">
                        {selectedProduct?.molecularWeight}
                      </span>
                    </div>

                    <div className="grid grid-cols-[auto_1fr] items-start gap-x-2 gap-y-1">
                      <span className="font-semibold whitespace-nowrap">
                        Product Category:
                      </span>
                      <span className="text-secondary font-semibold break-words">
                        {selectedProduct?.category.join(", ")}
                      </span>
                    </div>

                    <div className="grid grid-cols-[auto_1fr] items-start gap-x-2 gap-y-1">
                      <span className="font-semibold whitespace-nowrap">
                        Ready Stock:
                      </span>
                      <span className="text-secondary font-semibold break-words">
                      {selectedProduct?.readyStock === 'Yes' ? <span className="text-[#4CAF50]">{selectedProduct.readyStock}</span> : <span className="text-[#F44336]">{selectedProduct?.readyStock || 'Inquire'}"</span>}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center items-center xs:order-1">
                  <ImageLoad
                    key={selectedProduct?.productImage}
                    imageName={selectedProduct?.productImage || ""}
                    altTxt={selectedProduct?.impurityName}
                  />
                </div>
              </div>

              <div className="flex justify-end items-center">
                {" "}
                <button
                  type="button"
                  onClick={backToProducts}
                  title=" Back to Products"
                  className="cursor-pointer bg-gray-100 hover:bg-gray-300 text-gray-800 text-xs font-semibold py-2 pl-2 pr-1 rounded inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Back to Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
