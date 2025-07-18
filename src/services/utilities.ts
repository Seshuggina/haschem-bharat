// Ensure the module exists and is correctly typed
import products from "./../assets/data/products.json";

export const getCategories = () => {
  const uniqueCategories = [
    ...new Set(products.flatMap((item) => item.category)),
  ];
  return uniqueCategories;
};

export const getCategoriesObject = () => {
  // const uniqueCategories = getCategories();
  const uniqueCategories = [
    "All",
    "API Standards",
    "Nitrosamines",
    "Carbohydrates",
    "Impurity Standards",
    "Research tools",
    "Environmental Contaminants",
  ];
  uniqueCategories.unshift("All");
  const uniqueCategoriesObj = uniqueCategories.map((item, index) => ({
    id: index + 1,
    name: item,
    isSelected: false,
  }));
  return uniqueCategoriesObj;
};
