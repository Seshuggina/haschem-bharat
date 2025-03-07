import React, { useState } from "react";

// Interface to define the props
interface ImageLoadProps {
  imageName: string; // Expecting imageName to be a string
  altTxt?: string; // altTxt is optional
}

const ImageLoad: React.FC<ImageLoadProps> = ({ imageName, altTxt }) => {
  const secondaryImage =
    "https://preview.free3d.com/img/2019/03/2397303548002961025/5i91fu6o.jpg";
  const defaultImage = "/assets/img/image_not_available.png"; // Use relative paths for images

  // Dynamically import the image based on imageName
  let primaryImage;
  try {
    primaryImage = new URL(
      `../../assets/img/products/${imageName}`,
      import.meta.url
    ).href;
  } catch (error) {
    console.warn(`Image ${imageName} not found, falling back to default.`);
    primaryImage = defaultImage;
  }

  const [imgSrc, setImgSrc] = useState<string>(primaryImage);

  // Handle image load error
  const handleError = () => {
    console.warn(
      `Failed to load image: ${imageName}. Falling back to secondary image.`
    );
    setImgSrc(secondaryImage);
  };

  return (
    <figure>
      <img
        src={imgSrc}
        alt={altTxt || "Image"}
        onError={handleError}
        style={{ width: "100%", height: "auto" }}
      />
    </figure>
  );
};

export default ImageLoad;
