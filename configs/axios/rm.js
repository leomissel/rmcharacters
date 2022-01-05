import axios from 'axios';

const rmApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
})

export default rmApi;