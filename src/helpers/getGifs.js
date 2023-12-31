const getGifs = async (category) => {

    const limit = 4;
    const api_key = 'JOHBNFWTxsJBQDV1Mp9h9OZGy13JgIfj';

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${api_key}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });

    return gifs
}

export default getGifs;