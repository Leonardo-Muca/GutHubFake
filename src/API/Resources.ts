import axios from 'axios';

const BASE_URL = axios.create({
    baseURL: 'https://api.github.com'
});

const API_GITHUB = {
    SEARCH_USER: '/users',
    SEARCH_REPOSITORIE: '/repos',
}

export {
    BASE_URL,
    API_GITHUB
};