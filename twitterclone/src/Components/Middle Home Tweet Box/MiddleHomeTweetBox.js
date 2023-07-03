import React, { useState, useRef } from "react";
import { UserPost } from "../../Recoil State/User Post/UserPost";
import { useRecoilState } from "recoil";

function MiddleHomeTweetBox() {
  const [image, setImage] = useState(null);
  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  return <div></div>;
}

export default MiddleHomeTweetBox;
