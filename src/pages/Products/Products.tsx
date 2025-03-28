import React, { useEffect, useState, useRef } from "react";
import products from "./../../assets/data/products.json";
import useGlobalStore from "./../../store/globals";
import Product from "../../components/common/Product/Product";
import { ProductModel } from "../../types/ProductModel";
import { CategoryModel } from "../../types/models";
import { getCategoriesObject } from "../../services/utilities";

export const Products: React.FC = () => {
  const categoriesList = getCategoriesObject();
  const [searchText, setSearchText] = useState<string>(""); // Search state
  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([]); // Filtered products state
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]); // Selected letters state
  const [categories, setCategories] = useState<CategoryModel[]>(categoriesList); // Categories state
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const searchedTxt = useGlobalStore((state) => state.searchedText); // Get search text from global store
  const selectedCategory = useGlobalStore(
    (state) => state.selectedProductsCategory
  ); // Selected categories from store

  const selectedCategoriesList = useRef<string[]>([]);

  // Synchronize `searchedTxt` from global store with the local `searchText` state
  useEffect(() => {
    // Only set searchText if searchedTxt has changed to avoid infinite re-renders
    if (searchedTxt !== searchText) {
      setSearchText(searchedTxt); // Update the local state when `searchedTxt` changes
    }
  }, [searchedTxt, searchText]); // Added searchText to the dependency array to prevent infinite loop

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
  };

  return (
    <>
      <section className="flex services-banner products-banner relative py-16 hb-h-350 items-center text-white">
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mt-16">Products</h1>
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

      <section className="pt-16 pb-8 hb-products-section-1 shadow-lg">
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

      <div className="container mx-auto px-4 pt-16 pb-30">
        <div className="flex flex-wrap gap-8 justify-start">
          {filteredProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
