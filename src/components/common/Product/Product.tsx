import { ProductModel } from "../../../types/ProductModel";
import ImageLoad from "../Image/Image";
import "./Product.scss";

const Product = ({ product }: { product: ProductModel }) => {
  return (
    <div className="border-t-4 border-blue-500 max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-all duration-300">
      <p className="flex justify-end p-2">
        <button type="button" className="cursor-pointer">
          <i className="fa fa-cart-plus text-xl"></i>
        </button>
      </p>
      <div className="hb-p-b--35">
        <ImageLoad
          imageName={product.productImage}
          altTxt={product.impurityName}
        />
      </div>
      <div className="p-4 bg-orange-500">
        <h2 className="relative hb-m-t--35 text-l font-semibold text-white bg-gray-900 p-2 rounded-md text-center">
          {product.impurityName}
        </h2>
        <p className="text-sm text-white text-center py-3">
          {product.parentAPI}
        </p>
        <div className="flex hb-gap-4 mt-2 flex-wrap">
          <span className="flex px-3 items-center py-1 text-xs font-semibold bg-white text-gray-600 rounded-xl">
            {product.casNo}
          </span>
          <span className="flex px-3 items-center py-1 text-xs font-semibold bg-white text-gray-600 rounded-xl">
            {product.leadTime}
          </span>
          <span className="flex px-3 items-center py-1 text-xs font-semibold bg-white text-gray-600 rounded-xl">
            {product.readyStock}
          </span>
        </div>
        <div className="mt-4 text-center">
          <button className="cursor-pointer px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full w-full flex items-center justify-center transition-all duration-300">
            Discover More &nbsp;
            <i className="fa-solid fa-chevron-right transform transition-all duration-300 group-hover:translate-x-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
