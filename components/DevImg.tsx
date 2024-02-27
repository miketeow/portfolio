import Image from "next/image";
import React from "react";
interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
}
const DevImg = ({ containerStyles, imgSrc }: DevImgProps) => {
  return (
    <div className={containerStyles}>
      <Image src={imgSrc} priority fill alt="profile pic" />
    </div>
  );
};

export default DevImg;
