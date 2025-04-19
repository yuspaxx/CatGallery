export const fetchCats = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=6");
    return res.json();
};
