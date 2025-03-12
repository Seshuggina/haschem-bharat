import { create } from "zustand";

interface GlobalState {
  productsCategory: string[];
  selectedProductsCategory: string[];
  serviceSection: string;
  searchedText: string;
  selectedLetter: string;
  updateProductsCategory: (productsCategory: string[]) => void;
  updateSelectedProductsCategory: (productsCategory: string[]) => void;
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
  updateProductsCategory: (productsCategory: string[]) =>
    set(() => ({ productsCategory })),
  updateSelectedProductsCategory: (selectedProductsCategory: string[]) =>
    set(() => ({ selectedProductsCategory })),
  updateServiceSection: (serviceSection: string) =>
    set(() => ({ serviceSection })),
  updateSearchText: (searchedText: string) => set(() => ({ searchedText })),
  updateSelectedLetter: (selectedLetter: string) =>
    set(() => ({ selectedLetter })),
}));

export default useGlobalStore;
