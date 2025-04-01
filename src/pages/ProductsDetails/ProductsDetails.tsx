import React from "react";
import products from "./../../assets/data/products.json";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.scss";
import ImageLoad from "../../components/common/Image/Image";

export const ProductDetails: React.FC = () => {
  let { id } = useParams();
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

  return (
    <>
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
              <h2 className="text-3xl font-semibold mb-2">
                {selectedProduct?.impurityName}
              </h2>
              <div className="flex items-start mb-6 gap-16">
                <div className="flex-1 items-center">
                  <ImageLoad
                    key={selectedProduct?.productImage}
                    imageName={selectedProduct?.productImage || ""}
                    altTxt={selectedProduct?.impurityName}
                  />
                </div>
                <div className="flex-1">
                  <div className="text-gray-700">
                    <div className="flex mb-4">
                      <span className="w-1/3">Molecular Formula:</span>
                      <span className="text-secondary font-semibold">
                        {selectedProduct?.molecularFormula}
                      </span>
                    </div>

                    <div className="flex mb-4">
                      <span className="w-1/3">CAS Number:</span>
                      <span className="text-secondary font-semibold">
                        {selectedProduct?.casNo}
                      </span>
                    </div>

                    <div className="flex mb-4">
                      <span className="w-1/3">Molecular Weight:</span>
                      <span className="text-secondary font-semibold">
                        {selectedProduct?.molecularWeight}
                      </span>
                    </div>

                    <div className="flex mb-4">
                      <span className="w-1/3">Smile Code:</span>
                      <span className="text-secondary font-semibold">
                        {/* {selectedProduct?.smileCode}  */} TODO
                      </span>
                    </div>

                    <div className="flex mb-4">
                      <span className="w-1/3">Chemical Safety:</span>
                      <span className="text-secondary font-semibold">
                        {/* {selectedProduct?.chemicalSafety} */} TODO
                      </span>
                    </div>

                    <div className="flex mb-4">
                      <span className="w-1/3">Synonyms:</span>
                      <span className="text-secondary font-semibold">
                        {/* {selectedProduct?.synonyms} // TODO */} TODO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
