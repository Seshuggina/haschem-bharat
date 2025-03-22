import { create } from "zustand";
import { CategoryModel } from "../types/models";

interface GlobalState {
  productsCategory: CategoryModel[];
  selectedProductsCategory: CategoryModel[];
  serviceSection: string;
  searchedText: string;
  selectedLetter: string;
  updateProductsCategory: (productsCategory: CategoryModel[]) => void;
  updateSelectedProductsCategory: (productsCategory: CategoryModel[]) => void;
  updateServiceSection: (serviceSection: string) => void;
  updateSearchText: (searchedText: string) => void;
  updateSelectedLetter: (selectedLetter: string) => void;
}

const useGlobalStore = create<GlobalState>((set: any) => ({
  productsCategory: [],
  selectedProductsCategory: [],
  serviceSection: "",
  searchedText: "",
  selectedLetter: "",
  updateProductsCategory: (productsCategory: CategoryModel[]) =>
    set(() => ({ productsCategory })),
  updateSelectedProductsCategory: (selectedProductsCategory: CategoryModel[]) =>
    set(() => ({ selectedProductsCategory })),
  updateServiceSection: (serviceSection: string) =>
    set(() => ({ serviceSection })),
  updateSearchText: (searchedText: string) => set(() => ({ searchedText })),
  updateSelectedLetter: (selectedLetter: string) =>
    set(() => ({ selectedLetter })),
}));

export default useGlobalStore;
