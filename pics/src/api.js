import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID UR_viNZZnt9TzrmjWwp-QaSmI5pCKHtmW4nW6u7fHwE'
        },
        params: {
            query: term,
        }
    });
    console.log(response);
    return response.data.results;
};

export default searchImages;