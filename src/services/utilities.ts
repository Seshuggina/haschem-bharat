// Ensure the module exists and is correctly typed
import products from "./../assets/data/products.json";

// Use the 'products' variable or remove the import if unused
console.log(products); // Example usage to avoid 'value is never read' error

export const getCategories = () => {
  const uniqueCategories = [
    ...new Set(products.flatMap((item) => item.category)),
  ];
  return uniqueCategories;
};

export const getCategoriesObject = () => {
  const uniqueCategories = getCategories();
  uniqueCategories.unshift("All");
  const uniqueCategoriesObj = uniqueCategories.map((item, index) => ({
    id: index + 1,
    name: item,
    isSelected: false,
  }));
  return uniqueCategoriesObj;
};
