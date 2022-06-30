import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {


    const arrayImages = await getGif(category);
    setImages(arrayImages);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);




  };

  getImages()

  // useEffect(() => {
  //   getImages();
  // });

  return {
    images,
    isLoading
  }
}

export default useFetchGifs