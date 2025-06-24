// @ts-ignore
import React, { useEffect, useState } from "react";
import { fetchDogImageUrl, getDogImageUrl } from "../_utils/utils";
import { DogResponse } from "../_interfaces/interfaces";

const DogImage: React.FC = () => {
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    fetchDogImageUrl().then((data: DogResponse) =>
      setImgUrl(getDogImageUrl(data))
    );
  }, []);

  if (!imgUrl) return <span>Loading...</span>;
  return <img src={imgUrl} alt="Random Dog" width="300" height="300" />;
};

export default DogImage;
