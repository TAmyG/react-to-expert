export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TW4E4Pk0HOYgDGCRyq7ijMMto29HpxFd&q=${category}&limit=5`;

    const resp = await fetch(url);
    const {data} =  await resp.json();

    const gifs = data.map(gif =>({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));

    return gifs;
}