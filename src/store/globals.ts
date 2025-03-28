import { create } from "zustand";
import { CategoryModel } from "../types/models";

interface GlobalState {
  productsCategory: CategoryModel[];
  selectedProductsCategory: CategoryModel[];
  searchedText: string;
  updateSelectedProductsCategory: (productsCategory: CategoryModel[]) => void;
  updateSearchText: (searchedText: string) => void;
}

const useGlobalStore = create<GlobalState>((set: any) => ({
  productsCategory: [],
  selectedProductsCategory: [],
  searchedText: "",
  updateSelectedProductsCategory: (selectedProductsCategory: CategoryModel[]) =>
    set(() => ({ selectedProductsCategory })),
  updateSearchText: (searchedText: string) => set(() => ({ searchedText })),
}));

export default useGlobalStore;
