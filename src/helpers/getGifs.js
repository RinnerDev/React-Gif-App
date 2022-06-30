export const getGif = async (category) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=39pDv18mAhufiOw3d4NqU0E97LBFBzaq&q=${category}&limit=10`)
    const {data} = await response.json()
    const gifsArray = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifsArray
}