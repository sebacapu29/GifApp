import { useEffect, useState } from "react";
import { getGifs } from "../services/getGifs";

export const useFetchGif = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async ()=> {
        const newImages = await getGifs(category);
        setImages(newImages)
        isLoading(false);
    }
    useEffect(()=> {
        getImages();
    }, [])

    return { images, isLoading: true };
}
