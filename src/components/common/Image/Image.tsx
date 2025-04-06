import React from "react";

interface ImageLoadProps {
  imageName: string;
  altTxt?: string;
}

const ImageLoad: React.FC<ImageLoadProps> = ({ imageName, altTxt }) => {
  return (
    <figure className="p-3 flex justify-center">
      <img
        src={`/assets/img/products/${imageName}`}
        alt={altTxt || "Product Image"}
      />
    </figure>
  );
};

export default ImageLoad;
