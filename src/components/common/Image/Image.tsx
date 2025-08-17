import React from "react";

interface ImageLoadProps {
  imageName: string;
  altTxt?: string;
}

const ImageLoad: React.FC<ImageLoadProps> = ({ imageName, altTxt }) => {
  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    // Prevent an infinite loop if the fallback also fails
    const fallback = "/not_found.png";
    if (!event.currentTarget.src.endsWith(fallback)) {
      event.currentTarget.src = fallback;
    }
  };

  return (
    <figure className="p-3 flex justify-center">
      <img
        src={imageName ? `/assets/img/products/${imageName}` : "/not_found.png"}
        alt={altTxt || "Product Image"}
        onError={handleError}
      />
    </figure>
  );
};

export default ImageLoad;
