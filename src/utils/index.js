export const createImageObject = (imageUrl) => {
    const id = (new Date()).getMilliseconds();
    return {
        largeImageURL: imageUrl,
        id,
        myPhoto: true
    }
}