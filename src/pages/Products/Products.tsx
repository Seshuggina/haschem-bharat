
// import React, { useEffect, useRef, useState } from "react";
// import products from "./../../assets/data/products.json";
// import useGlobalStore from "./../../store/globals";
// import Multiselect from "multiselect-react-dropdown";
// import Product from "../../components/common/Product/Product";

// // Define types for state variables
// interface ProductType {
//   impurityName: string;
//   category: string[];
//   // Add other properties as per your product structure
// }

// export const Products: React.FC = () => {
//   const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
//   const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
//   const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
//   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//   const categoriesList = useGlobalStore((state) => state.productsCategoryList);
//   const productsCategory = useGlobalStore((state) => state.productsCategory);
//   const selectedLetter = useGlobalStore((state) => state.selectedLetter);
//   const searchedTxt = useGlobalStore((state) => state.searchedText);
//   const updateProductsCategory = useGlobalStore((state) => state.updateProductsCategory);
//   const searchTextRef = useRef<string>(""); // Ref for search text
//   const selectedCategoriesList = useRef<string[]>([]);

//   useEffect(() => {
//     if (searchedTxt) {
//       searchTextRef.current = searchedTxt;
//     }
//     filterProducts();
//   }, [selectedLetters, productsCategory, selectedLetter]);

//   useEffect(() => {
//     if (productsCategory.length > 0 && !productsCategory.includes("All")) {
//       selectedCategoriesList.current = productsCategory;
//     }
//     const unsubscribe = useGlobalStore.subscribe((state) => {
//       searchTextRef.current = state.searchedText;
//       filterProducts();
//     });

//     // Cleanup subscription on unmount
//     return () => {
//       unsubscribe();
//       updateProductsCategory([]);
//     };
//   }, []);

//   useEffect(() => {
//     if (selectedLetter) {
//       setSelectedLetters([selectedLetter]);
//     }
//   }, [selectedLetter]);

//   const handleLetterClick = (letter: string) => {
//     setSelectedLetters((prevSelectedLetters) => {
//       const newSelectedLetters = prevSelectedLetters.includes(letter)
//         ? prevSelectedLetters.filter((l) => l !== letter)
//         : [...prevSelectedLetters, letter];

//       if (newSelectedLetters.includes("") && newSelectedLetters.length > 1) {
//         return newSelectedLetters.filter((l) => l !== "");
//       }

//       return newSelectedLetters;
//     });
//   };

//   const filterProducts = () => {
//     let filteredProductsList = products; // Fetch more products for better demo

//     // Filter by categories
//     if (selectedCategoriesList.current && selectedCategoriesList.current.length > 0) {
//       filteredProductsList = filteredProductsList.filter((obj) =>
//         obj.category.some((category) =>
//           selectedCategoriesList.current.includes(category)
//         )
//       );
//     }

//     // Filter by selected letters
//     if (selectedLetters.length > 0) {
//       filteredProductsList = filterObjectsByCharacters(filteredProductsList, selectedLetters);
//     }

//     // Filter by search text
//     if (searchTextRef.current) {
//       filteredProductsList = filteredProductsList.filter((obj) => {
//         const allProperties = JSON.stringify(obj).toLowerCase();
//         return allProperties.includes(searchTextRef.current.toLowerCase());
//       });
//     }

//     setFilteredProducts(filteredProductsList);
//   };

//   function filterObjectsByCharacters(productsList: ProductType[], selectedCharacters: string[]) {
//     if (!selectedCharacters || selectedCharacters.length === 0) {
//       return productsList;
//     }

//     return productsList.filter((obj) => {
//       const propertiesToCheck = ["impurityName"];

//       const impurityName = obj.impurityName || "";
//       const firstAlphabeticChar = impurityName
//         .split("")
//         .find((char) => /^[a-zA-Z]$/.test(char)); // Find the first alphabetic character

//       const normalizedFirstChar = firstAlphabeticChar?.toLowerCase();
//       const normalizedCharacters = selectedCharacters.map((char) => char.toLowerCase());

//       return (
//         normalizedFirstChar &&
//         normalizedCharacters.includes(normalizedFirstChar)
//       );
//     });
//   }

//   const clearSelection = () => {
//     setSelectedLetters([]);
//   };

//   const searchProducts = (value: string) => {
//     searchTextRef.current = value;
//     filterProducts();
//   };

//   const handleCategoriesSelect = (categories: string[]) => {
//     selectedCategoriesList.current = categories;
//     updateProductsCategory([...selectedCategoriesList.current]);
//     filterProducts();
//   };

//   const clearCategory = () => {
//     handleCategoriesSelect([]);
//   };

//   return (
//     <>
//       <section className="section section-shaped section-sm">
//         <div className="shape products-banner">
//           <div className="wrap">
//             {Array(100)
//               .fill()
//               .map((_, i) => (
//                 <div key={i}></div>
//               ))}
//           </div>
//         </div>
//         <div className="pt-lg-7 pt-sm-7 pt-xs-7 text-center">
//           <h1 className="text-white">Products</h1>
//         </div>
//       </section>
//       <section className="my-4">
//         <div className="mx-auto p-4">
//           <div className="flex justify-between items-center mb-4">
//             <button
//               className={`px-4 py-2 border border-primary rounded-lg ${
//                 selectedLetters.length === 0 ? "bg-primary text-white" : ""
//               }`}
//               onClick={clearSelection}
//             >
//               All
//             </button>
//             {alphabet.map((letter) => (
//               <button
//                 key={letter}
//                 className={`px-4 py-2 border border-primary rounded-lg ${
//                   selectedLetters.includes(letter) ? "bg-primary text-white" : ""
//                 }`}
//                 onClick={() => handleLetterClick(letter)}
//               >
//                 {letter}
//               </button>
//             ))}
//           </div>

//           <div className="flex justify-between items-center mb-4">
//             <input
//               type="text"
//               className="border p-2 rounded-lg w-full"
//               placeholder="Search Products"
//               onChange={(e) => searchProducts(e.target.value)}
//               value={searchTextRef.current}
//             />
//             <button
//               className="ml-4 px-4 py-2 bg-red-500 text-white rounded-full"
//               disabled={!searchTextRef.current}
//               onClick={() => searchProducts("")}
//             >
//               x
//             </button>
//           </div>

//           <div className="mb-4">
//             <div className="text-sm mb-2">Selected Category: </div>
//             <Multiselect
//               options={categoriesList} // Options to display in the dropdown
//               selectedValues={selectedCategoriesList.current} // Preselected value to persist in dropdown
//               onSelect={handleCategoriesSelect} // Function will trigger on select event
//               onRemove={handleCategoriesSelect} // Function will trigger on remove event
//               displayValue="name" // Property name to display in the dropdown options
//               isObject={false}
//             />
//             <button
//               className="ml-4 px-4 py-2 bg-red-500 text-white rounded-full"
//               disabled={selectedCategoriesList.current.length === 0}
//               onClick={clearCategory}
//             >
//               CLEAR
//             </button>
//           </div>
//         </div>
//       </section>
//       <div className="mx-auto p-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredProducts.map((product, index) => (
//             <Product
//               product={product}
//               thumbnailColor={thumbnailsColors[index % thumbnailsColors.length]}
//               key={index}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
