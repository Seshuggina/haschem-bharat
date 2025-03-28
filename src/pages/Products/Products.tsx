import React, { useEffect, useRef, useState } from "react";
import products from "./../../assets/data/products.json";
import useGlobalStore from "./../../store/globals";
import Product from "../../components/common/Product/Product";
import { ProductModel } from "../../types/ProductModel";
import { CategoryModel } from "../../types/models";
import { getCategoriesObject } from "../../services/utilities";

export const Products: React.FC = () => {
  const categoriesList = getCategoriesObject();
  const [searchText, setSearchText] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [categories, setCategories] = useState<CategoryModel[]>(categoriesList);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  let productsCategory = useGlobalStore((state) => state.productsCategory);
  const searchedTxt = useGlobalStore((state) => state.searchedText);

  const updateSelectedProductsCategory = useGlobalStore(
    (state) => state.updateSelectedProductsCategory
  );
  const selectedCategoriesList = useRef<string[]>([]);

  useEffect(() => {
    if (searchedTxt) {
      setSearchText(searchedTxt);
    }
    filterProducts();
  }, [selectedLetters, productsCategory]);

  useEffect(() => {
    if (
      productsCategory.length > 0 &&
      !productsCategory.some((category) => category.name === "All")
    ) {
      selectedCategoriesList.current = productsCategory.map((c) => c.name);
    }
    const unsubscribe = useGlobalStore.subscribe((state) => {
      setSearchText(state.searchedText);
      filterProducts();
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
      selectedCategoriesList.current = [];
      updateSelectedProductsCategory([]);
    };
  }, []);

  const handleLetterClick = (letter: string) => {
    setSelectedLetters((prevSelectedLetters) => {
      const newSelectedLetters = prevSelectedLetters.includes(letter)
        ? prevSelectedLetters.filter((l) => l !== letter)
        : [...prevSelectedLetters, letter];

      if (newSelectedLetters.includes("") && newSelectedLetters.length > 1) {
        return newSelectedLetters.filter((l) => l !== "");
      }

      return newSelectedLetters;
    });
  };

  const filterProducts = () => {
    let filteredProductsList: any[] = products; // Fetch more products for better demo

    // Filter by categories
    if (
      selectedCategoriesList.current &&
      selectedCategoriesList.current.length > 0
    ) {
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
      filteredProductsList = filteredProductsList.filter((obj) => {
        const allProperties = JSON.stringify(obj).toLowerCase();
        return allProperties.includes(searchText.toLowerCase());
      });
    }

    setFilteredProducts(filteredProductsList as ProductModel[]);
  };

  function filterObjectsByCharacters(
    productsList: ProductModel[],
    selectedCharacters: string[]
  ) {
    if (!selectedCharacters || selectedCharacters.length === 0) {
      return productsList;
    }

    return productsList.filter((obj) => {
      // const propertiesToCheck = ["impurityName"];

      const impurityName = obj.impurityName || "";
      const firstAlphabeticChar = impurityName
        .split("")
        .find((char) => /^[a-zA-Z]$/.test(char)); // Find the first alphabetic character

      const normalizedFirstChar = firstAlphabeticChar?.toLowerCase();
      const normalizedCharacters = selectedCharacters.map((char) =>
        char.toLowerCase()
      );

      return (
        normalizedFirstChar &&
        normalizedCharacters.includes(normalizedFirstChar)
      );
    });
  }

  const clearSelection = () => {
    setSelectedLetters([]);
  };

  const searchProducts = (value: string) => {
    setSearchText(value);
    filterProducts();
  };

  const handleCategoriesSelect = (category: CategoryModel) => {
    const updatedCategories = categories.map((c) =>
      c.id === category.id ? { ...c, isSelected: !c.isSelected } : c
    );
    // Update state with a new array
    const selectedCat = updatedCategories.filter((c) => c.isSelected);
    selectedCategoriesList.current = [...selectedCat.map((c) => c.name)];
    setCategories(updatedCategories);
    filterProducts();
  };

  const clearCategory = () => {
    let cat = categories.map((category) => {
      category.isSelected = false;
      return category;
    });
    setCategories(cat);
    filterProducts();
    selectedCategoriesList.current = [];
  };

  return (
    <>
      <section className="flex services-banner products-banner relative py-16 hb-h-350 items-center text-white">
        <div className="relative container mx-auto text-center">
          <div className="shape products-banner">
            <div className="wrap">
              {/* {Array(100)
                .fill()
                .map((_, i) => (
                  <div key={i}></div>
                ))} */}
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mt-16">Products</h1>
        </div>
      </section>
      {/* Filter */}
      <section className="py-16 hb-products-section-1 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {/* "All" button with flexible width */}
            <button
              className={`px-4 py-2 border border-primary rounded-sm ${
                selectedLetters.length === 0 ? "hb-bg-brand text-white" : ""
              }`}
              onClick={clearSelection}
            >
              All
            </button>

            {/* Static width buttons */}
            {alphabet.map((letter) => (
              <button
                key={letter}
                className={`w-12 py-2 border border-primary rounded-sm text-center ${
                  selectedLetters.includes(letter)
                    ? "hb-bg-brand text-white"
                    : ""
                }`}
                onClick={() => handleLetterClick(letter)}
              >
                {letter}
              </button>
            ))}

            {/* Search input and clear button */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="text"
                className="border py-2 px-3 rounded-sm min-w-[200px] h-[42px] flex-2"
                placeholder="Search Products"
                onChange={(e) => searchProducts(e.target.value)}
                value={searchText}
              />

              <button
                className={`px-4 py-2 rounded-sm h-[42px] ${
                  searchText
                    ? "bg-red-500 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!searchText}
                onClick={() => searchProducts("")}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Section Products Type Filter*/}
      <section className="py-16 hb-products-section-2 shadow-lg">
        <div className="container mx-auto px-4">
          <h5 className="mb-2">Filter By Category: </h5>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                hidden={category.name === "All"}
                key={index}
                className={`inline-flex items-center rounded-full px-5 py-1 text-sm font-medium text-black ring-1 text-gray-700 ring-inset ${
                  category.isSelected ? " bg-orange text-orange" : ""
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
              onClick={() => clearCategory()}
            >
              Clear Selection
            </button>
          </div>
        </div>
      </section>
      <div className="mx-auto p-4">
        <div className="flex flex-wrap gap-8 justify-start">
          {filteredProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
