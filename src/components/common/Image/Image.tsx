import React from "react";

interface ImageLoadProps {
  imageName: string;
  altTxt?: string;
}

const ImageLoad: React.FC<ImageLoadProps> = ({ imageName, altTxt }) => {
  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src =
      "https://seshuggina.github.io/haschem-bharat/not_found.png";
  };

  return (
    <figure className="p-3 flex justify-center">
      <img
        src={`https://seshuggina.github.io/haschem-bharat/assets/img/products/${imageName}`}
        alt={altTxt || "Product Image"}
        onError={handleError}
      />
    </figure>
  );
};

export default ImageLoad;
