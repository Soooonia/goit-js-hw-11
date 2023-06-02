import axios from "axios";

const BASE_URL = `https://pixabay.com/api/`;
const PER_PAGE = 40;

async function fetchImages (name, page) {
    const modName = name.split(' ').join('+');
    // дає можливість записувати декілька слів у пошуку
   return  await axios.get(`${BASE_URL}`, {
    params: {
        key: `36976828-185b29cf4941df1518df1f340`,
        q: modName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: PER_PAGE,
        page,
    }
   })
}

export {fetchImages, PER_PAGE}