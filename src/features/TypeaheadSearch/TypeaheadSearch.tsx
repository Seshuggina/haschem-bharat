import { useState, useRef } from "react";
import { Typeahead, Menu, MenuItem } from "react-bootstrap-typeahead";
import "./TypeaheadSearch.scss";
import { useNavigate } from "react-router-dom";
import products from "./../../assets/data/products.json";
import { ProductModel } from "../../types/ProductModel";
import "react-bootstrap-typeahead/css/Typeahead.css";

interface TypeaheadSearchProps {
  onSubmit: (text: string) => void;
  onInputChange: (text: string) => void;
}

export const TypeaheadSearch: React.FC<TypeaheadSearchProps> = (props) => {
  const { onSubmit, onInputChange } = props;
  const [selected, setSelected] = useState<ProductModel[]>([]);
  // const [options, setOptions] = useState<ProductModel[]>(
  //   products as Array<ProductModel>
  // );
  // console.log("options", options);

  const inputRef = useRef<any>(null);
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const handleProductSelectionChange = (selectedOption: ProductModel) => {
    if (selectedOption) {
      navigate(`products-details/${selectedOption.Sno}`);
    }
  };

  const onProductChange = (selected: ProductModel[]) => {
    setSelected(selected); // Always update state
    if (selected.length > 0) {
      handleProductSelectionChange(selected[0]);
    }
  };

  const handleInputChange = (text: any) => {
    setInputText(text);
    onInputChange(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(inputText);
    }
  };

  const clearFilter = () => {
    if (inputRef.current) {
      inputRef.current.clear();
      setSelected([]); // Clear the selected state
      setInputText(""); // Clear the input text state
    }
  };

  return (
    <>
      <Typeahead
        className="typeaheadSearch"
        minLength={3}
        onChange={(selected) => {
          onProductChange(selected as ProductModel[]);
          inputRef.current?.blur();
        }}
        onInputChange={(text) => handleInputChange(text)}
        options={products}
        placeholder="Enter #CAS No, Name, Category, Molecular Formula"
        selected={selected}
        ref={inputRef}
        id="product-search"
        filterBy={["impurityName"]}
        labelKey={(option: any) =>
          `${option.impurityName} ${option.parentAPI} ${option.casNo} ${option.category} ${option.molecularFormula} ${option.synonym}`
        }
        aria-label="Search for products"
        aria-expanded={false}
        aria-owns="typeahead-menu"
        aria-haspopup="listbox"
        renderMenu={(results, menuProps) => (
          <Menu {...menuProps} id="typeahead-menu" role="listbox">
            {results.map((result: any, index: number) => (
              <MenuItem
                key={index}
                option={result}
                position={index}
                onClick={() => {
                  onProductChange([result]);
                  handleProductSelectionChange(result);
                  inputRef.current?.blur();
                }}
                role="option"
                aria-selected={selected.includes(result)}
              >
                <strong>{result.impurityName}</strong>,{" "}
                <span>{result.parentAPI}</span>{" "}
                <small>({result.category})</small>
                <br />
                <span>{result.casNo}</span>,{" "}
                <span>{result.productDetails?.molecularFormula}</span>,{" "}
                <span>{result.productDetails?.synonym}</span>
              </MenuItem>
            ))}
          </Menu>
        )}
        onKeyDown={handleKeyDown}
      />

      <button
        type="button"
        onClick={() => clearFilter()}
        className="w-8 rounded-full text-black hover:bg-gray-200 link text-2xl"
        aria-label="Clear search"
      >
        &times;
      </button>
    </>
  );
};
