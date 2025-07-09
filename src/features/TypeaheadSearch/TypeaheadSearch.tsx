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

export const TypeaheadSearch: React.FC<TypeaheadSearchProps> = ({
  onSubmit,
  onInputChange,
}) => {
  const [selected, setSelected] = useState<ProductModel[]>([]);
  const [inputText, setInputText] = useState("");
  const inputRef = useRef<any>(null);
  const navigate = useNavigate();

  const escapeRegExp = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const highlightMatch = (text: string, query: string) => {
    if (!text || !query) return text;

    const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
    console.log(`Highlighting matches for query: ${query} in text: ${text}`);
    const parts = text.split(regex);

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-300 font-semibold">
          {part}
        </mark>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  const handleProductSelectionChange = (selectedOption: ProductModel) => {
    if (selectedOption) {
      navigate(`products-details/${selectedOption.Sno}`);
    }
  };

  const onProductChange = (selected: ProductModel[]) => {
    setSelected(selected);
    if (selected.length > 0) {
      handleProductSelectionChange(selected[0]);
    }
  };

  const handleInputChange = (text: any) => {
    const searchedText = text.target.value ?? "";
    setInputText(searchedText);
    onInputChange(searchedText);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(inputText);
    }
  };

  const clearFilter = () => {
    if (inputRef.current) {
      inputRef.current.clear();
      setSelected([]);
      setInputText("");
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
        // Todo - Earlier search was only impurity Name. Now added for any text
        filterBy={[
          "impurityName",
          "parentAPI",
          "casNo",
          "category",
          "molecularFormula",
          "synonym",
        ]}
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
                <div>
                  <div>
                    <strong>
                      {highlightMatch(result.impurityName ?? "", inputText)}
                    </strong>
                    ,{" "}
                    <span>
                      {highlightMatch(result.parentAPI ?? "", inputText)}
                    </span>{" "}
                    <small>
                      ({Array.isArray(result.category)
                        ? result.category.map((cat: string, i: number) => (
                            <span key={i}>
                              {i > 0 && ', '}
                              {highlightMatch(cat ?? '', inputText)}
                            </span>
                          ))
                        : highlightMatch(result.category ?? '', inputText)})
                    </small>
                  </div>
                  <div>
                    <span>{highlightMatch(result.casNo ?? "", inputText)}</span>
                    ,{" "}
                    <span>
                      {highlightMatch(
                        result.productDetails?.molecularFormula ?? "",
                        inputText
                      )}
                    </span>
                    ,{" "}
                    <span>
                      {highlightMatch(
                        result.productDetails?.synonym ?? "",
                        inputText
                      )}
                    </span>
                  </div>
                </div>
              </MenuItem>
            ))}
          </Menu>
        )}
        onKeyDown={handleKeyDown}
      />

      <button
        type="button"
        onClick={clearFilter}
        className="w-8 rounded-full text-black hover:bg-gray-200 link text-2xl"
        aria-label="Clear search"
      >
        &times;
      </button>
    </>
  );
};
