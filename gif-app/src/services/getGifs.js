export const getGifs = async (category)=>{
    const url = `/api/v1/gifs/search?api_key=sRP3Sc8MjSakzE2bUv1Lb0oVypSlCrod&q=${category}&limit=5`
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
        }))
     return gifs;
  }