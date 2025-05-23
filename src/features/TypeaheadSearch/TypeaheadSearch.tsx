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
      console.log("Typed text:", inputText);
      onSubmit(inputText);
      // Perform any action you want with the input text here
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
        onChange={(selected) => {
          onProductChange(selected as ProductModel[]);
          inputRef.current?.blur();
        }}
        onInputChange={(text) => handleInputChange(text)}
        options={products}
        placeholder="Enter #CAS No, Name, Category, Molecular Formula"
        selected={selected}
        ref={inputRef}
        id="typeahead"
        filterBy={["impurityName"]}
        labelKey={(option: any) =>
          `${option.impurityName} ${option.parentAPI} ${option.casNo} ${option.category} ${option.molecularFormula} ${option.synonym}`
        }
        // onMenuToggle={(isOpen) => {
        //   if (isOpen) {
        //     debugger; // This will trigger the breakpoint in dev tools
        //     console.log("Dropdown opened");
        //   }
        // }}
        renderMenu={(results, menuProps) => (
          <Menu {...menuProps}>
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
      >
        &times;
      </button>
    </>
  );
};
