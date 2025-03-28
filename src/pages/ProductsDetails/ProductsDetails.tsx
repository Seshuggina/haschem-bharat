import React, { useEffect, useState, useRef } from "react";
import products from "./../../assets/data/products.json";
import useGlobalStore from "./../../store/globals";
import Product from "../../components/common/Product/Product";
import { ProductModel } from "../../types/ProductModel";
import { CategoryModel } from "../../types/models";
import { getCategoriesObject } from "../../services/utilities";
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
  const categoriesList = getCategoriesObject();
  const [searchText, setSearchText] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [categories, setCategories] = useState<CategoryModel[]>(categoriesList);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const searchedTxt = useGlobalStore((state) => state.searchedText); // Get search text from the global store
  const selectedCategory = useGlobalStore(
    (state) => state.selectedProductsCategory
  ); // Selected categories from store
  const selectedCategoriesList = useRef<string[]>([]);

  // Synchronize `searchedTxt` from global store with the local `searchText` state
  useEffect(() => {
    setSearchText(searchedTxt); // Update the local state when `searchedTxt` changes
  }, [searchedTxt]);

  // Effect to handle filtering products when selectedCategory or selectedLetters change
  useEffect(() => {
    if (selectedCategory.length > 0) {
      if (selectedCategory.includes("All")) {
        setSelectedLetters([]); // Reset selected letters when "All" is selected
        selectedCategoriesList.current = [];
      } else {
        selectedCategoriesList.current = [...selectedCategory];
      }
    }

    filterProducts(); // Re-filter products whenever selectedCategory changes
  }, [categories]);

  useEffect(() => {
    if (selectedCategory.length > 0) {
      if (selectedCategory.includes("All")) {
        setSelectedLetters([]); // Reset selected letters when "All" is selected
        selectedCategoriesList.current = [];
      } else {
        selectedCategoriesList.current = [...selectedCategory];
      }

      const updatedCategories = categories.map((cat) => {
        cat.isSelected = selectedCategory.includes(cat.name);
        return cat;
      });
      setCategories(updatedCategories); // Update categories state
    }

    filterProducts(); // Re-filter products whenever selectedCategory changes
  }, [selectedCategory]);

  // Effect to filter products when selectedLetters changes
  useEffect(() => {
    filterProducts();
  }, [selectedLetters]);

  // Function to handle filtering of products based on selected categories, letters, and search text
  const filterProducts = () => {
    let filteredProductsList: any[] = products;

    // Filter by categories
    if (selectedCategoriesList.current.length > 0) {
      filteredProductsList = filteredProductsList.filter((obj) =>
        obj.category.some((category: any) =>
          selectedCategoriesList.current.includes(category)
        )
      );
    }

    // Filter by selected letters
    if (selectedLetters.length > 0) {
      filteredProductsList = filterObjectsByCharacters(
        filteredProductsList,
        selectedLetters
      );
    }

    // Filter by search text
    if (searchText) {
      filteredProductsList = filteredProductsList.filter((obj) =>
        JSON.stringify(obj).toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredProducts(filteredProductsList as ProductModel[]);
  };

  // Helper function to filter products by starting letter of impurityName
  const filterObjectsByCharacters = (
    productsList: ProductModel[],
    selectedCharacters: string[]
  ) => {
    if (!selectedCharacters || selectedCharacters.length === 0) {
      return productsList;
    }

    return productsList.filter((obj) => {
      const impurityName = obj.impurityName || "";
      const firstAlphabeticChar = impurityName
        .split("")
        .find((char) => /^[a-zA-Z]$/.test(char));
      const normalizedFirstChar = firstAlphabeticChar?.toLowerCase();
      const normalizedCharacters = selectedCharacters.map((char) =>
        char.toLowerCase()
      );

      return (
        normalizedFirstChar &&
        normalizedCharacters.includes(normalizedFirstChar)
      );
    });
  };

  // Function to handle category selection
  const handleCategoriesSelect = (category: CategoryModel) => {
    const updatedCategories = categories.map((c) =>
      c.id === category.id ? { ...c, isSelected: !c.isSelected } : c
    );

    const selectedCat = updatedCategories.filter((c) => c.isSelected);
    selectedCategoriesList.current = selectedCat.map((c) => c.name);
    setCategories(updatedCategories);
    filterProducts();
  };

  // Handle search input change
  const handleSearchChange = (value: string) => {
    setSearchText(value);
  };

  // Clear the selection of letters
  const clearSelection = () => {
    setSelectedLetters([]);
  };

  // Clear selected categories
  const clearCategory = () => {
    const updatedCategories = categories.map((category) => {
      category.isSelected = false;
      return category;
    });

    setCategories(updatedCategories);
    selectedCategoriesList.current = [];
    filterProducts();
  };

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

        <section className="py-16 hb-products-section-1 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-4 py-2 border border-primary rounded-sm ${
                  selectedLetters.length === 0 ? "hb-bg-brand text-white" : ""
                }`}
                onClick={clearSelection}
              >
                All
              </button>

              {alphabet.map((letter) => (
                <button
                  key={letter}
                  className={`w-12 py-2 border border-primary rounded-sm text-center ${
                    selectedLetters.includes(letter)
                      ? "hb-bg-brand text-white"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedLetters((prev) =>
                      prev.includes(letter)
                        ? prev.filter((l) => l !== letter)
                        : [...prev, letter]
                    )
                  }
                >
                  {letter}
                </button>
              ))}

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  className="border py-2 px-3 rounded-sm min-w-[200px] h-[42px] flex-2"
                  placeholder="Search Products"
                  value={searchText}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />

                <button
                  className={`px-4 py-2 rounded-sm h-[42px] ${
                    searchText
                      ? "bg-red-500 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!searchText}
                  onClick={() => handleSearchChange("")}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-16 pb-8  hb-products-section-1 shadow-lg">
          <div className="container mx-auto px-4">
            <h5 className="mb-2">Filter By Category: </h5>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  hidden={category.name === "All"}
                  className={`inline-flex items-center rounded-full px-5 py-1 text-sm font-medium text-black ring-1 text-gray-700 ring-inset ${
                    category.isSelected ? "bg-orange text-orange" : ""
                  }`}
                  onClick={() => handleCategoriesSelect(category)}
                >
                  {category.isSelected && (
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  )}
                  {category.name}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <button
                title="Clear Selection"
                className={`px-4 text-sm py-1 text-white rounded-full ${
                  selectedCategoriesList.current.length === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-red-500"
                }`}
                disabled={selectedCategoriesList.current.length === 0}
                onClick={clearCategory}
              >
                Clear Selection
              </button>
            </div>
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
                    <Link title={product.impurityName}
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
