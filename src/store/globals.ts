import { create } from "zustand";

interface GlobalState {
  productsCategory: string[];
  serviceSection: string;
  searchedText: string;
  selectedLetter: string;
  updateProductsCategory: (productsCategory: string[]) => void;
  updateServiceSection: (serviceSection: string) => void;
  updateSearchText: (searchedText: string) => void;
  updateSelectedLetter: (selectedLetter: string) => void;
}

const useGlobalStore = create<GlobalState>((set: any) => ({
  productsCategory: [],
  serviceSection: "",
  searchedText: "",
  selectedLetter: "",
  updateProductsCategory: (productsCategory: string[]) =>
    set(() => ({ productsCategory })),
  updateServiceSection: (serviceSection: string) =>
    set(() => ({ serviceSection })),
  updateSearchText: (searchedText: string) => set(() => ({ searchedText })),
  updateSelectedLetter: (selectedLetter: string) =>
    set(() => ({ selectedLetter })),
}));

export default useGlobalStore;
