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
    <div className="border-t-4 border-[#F79901] outline outline-1 outline-[#F79901] max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-all duration-300">
      <p className="flex justify-end p-2">
        <button
          type="button"
          className="cursor-pointer grayscale opacity-50"
          disabled
        >
          <i className="fa fa-cart-plus text-xl"></i>
        </button>
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
      <div className="p-4 bg-[#F79901] h-full">
        <h2 className="relative text-l font-semibold text-white bg-gray-900 p-2 rounded-md text-center hb-m-t--35">
          {product.impurityName}
        </h2>
        <p className="text-sm text-white text-center py-3">
          {product.parentAPI}
        </p>

        <div className="flex gap-4 mt-2 flex-wrap justify-center">
          <span className="flex px-3 items-center py-1 text-xs font-semibold bg-white text-gray-600 rounded-xl">
            {product.casNo}
          </span>
          <span className="flex px-3 items-center py-1 text-xs font-semibold bg-white text-gray-600 rounded-xl">
            {product.leadTime}
          </span>
          <span
            title="Stock Ready"
            className="flex px-3 items-center py-1 text-xs font-semibold bg-white text-gray-600 rounded-xl"
          >
            {product.readyStock ? product.readyStock : "No Stock"}
          </span>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            data-content="Discover More"
            onClick={showProductDetails}
            className="hb-btn cursor-pointer px-4 py-2 text-white bg-[#F79901] hover:bg-orange-600 rounded-full border flex items-center justify-center transition-all duration-300"
          >
            <span className="hb-btn-text">
              Discover More &nbsp;
              <i className="fa-solid fa-chevron-right transform transition-all duration-300 group-hover:translate-x-2"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
