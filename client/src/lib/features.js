const fileFormat = (url = "") => {
    const fileExtension = url.split('.').pop();
    if (fileExtension === "mp4" || fileExtension === "webn" || fileExtension === "ogg") return "video";
    if (fileExtension === "mp3" || fileExtension === "wav") return "audio";
    if (fileExtension === "png" || fileExtension === "jpg" || fileExtension === "jpeg" || fileExtension === "gif" || fileExtension === "webp") return "image";
    return "file";
};
const transformImage = (url = "", width = 100) => url;
export { fileFormat, transformImage };