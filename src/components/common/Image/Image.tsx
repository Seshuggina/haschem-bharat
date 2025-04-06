import React, { useState } from "react";

interface ImageLoadProps {
  imageName: string;
  altTxt?: string;
}

const ImageLoad: React.FC<ImageLoadProps> = ({ imageName, altTxt }) => {
  const secondaryImage =
    "https://preview.free3d.com/img/2019/03/2397303548002961025/5i91fu6o.jpg";

  // Construct the correct image path for Vite
  const getImagePath = (name: string) => {
    return `/assets/img/products/${name}`;
  };

  const [imgSrc, setImgSrc] = useState<string>(getImagePath(imageName));

  // Handle image load error
  const handleError = () => {
    console.warn(
      `Failed to load image: ${imageName}. Falling back to secondary image.`
    );
    setImgSrc(secondaryImage);
  };

  return (
    <figure className="p-3 flex justify-center">
      <img src={imgSrc} alt={altTxt || "Image"} onError={handleError} />
    </figure>
  );
};

export default ImageLoad;
