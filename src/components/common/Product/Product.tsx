import { useNavigate } from "react-router-dom";
import { ProductModel } from "../../../types/ProductModel";
import ImageLoad from "../Image/Image";
import "./Product.scss";

const Product = ({ product }: { product: ProductModel }) => {
  const navigate = useNavigate();
  const showProductDetails = () => {
    navigate(`/products-details/${product.Sno}`);
  };

  return (
    <div className="border-t-4 border-[#2d7da0] max-w-xs rounded-lg outline outline-1 outline-[#2d7da0] overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-all duration-300 product-card">
      <p className="flex justify-end p-2 bg-gray-100">
        <button
          type="button"
          className={`product-stock cursor-pointer ${
            product.readyStock === "Yes" ? "available" : ""
          }`}
        ></button>
      </p>

      {/* Image Container */}
      <div className="flex justify-center items-center h-60 w-full bg-gray-100">
        <div className="w-48 h-48 flex justify-center items-center overflow-hidden">
          <ImageLoad
            imageName={product.productImage}
            altTxt={product.impurityName}
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 h-full bg-[#2d7da0]">
        <h2 className="relative text-l font-semibold text-white bg-[#2d7da0] p-2 rounded-md text-center hb-m-t--35 card-title-band">
          {product.impurityName}
        </h2>
        <div className="flex gap-4 mt-2 flex-wrap justify-center text-[#123456]">
          <span
            className="flex px-3 items-center py-1 text-xs font-semibold border-1 border-[#F79901] text-white rounded-xl"
            title="Molecular Formula"
          >
            <span className="text-[#f9f9f9]">M.F: </span>
            &nbsp;{product.molecularFormula}
          </span>
          <span
            className="flex px-3 items-center py-1 text-xs font-semibold border-1 border-[#F79901] text-white rounded-xl"
            title="Molecular Weight"
          >
            <span className="text-[#f9f9f9]">M.W: </span>
            &nbsp;{product.molecularWeight}
          </span>
          <span
            className="flex px-3 items-center py-1 text-xs font-semibold border-1 border-[#F79901] text-white rounded-xl"
            title="CAS Number"
          >
            <span className="text-[#f9f9f9]">CAS: </span>
            &nbsp;{product.casNo}
          </span>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            data-content="Discover More &#10095;"
            onClick={showProductDetails}
            className="hb-btn text-gray-900 py-1 px-4 rounded border text-white bg-[#f79a06] border-orange hover:text-white"
          >
            <span className="hb-btn-text">
              Discover More &nbsp;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
