import axios from 'axios';
//dev URL
const API = axios.create({ baseURL: 'http://localhost:5555' });

export const getAllPosts = () => API.get('/posts')

export const vote = (id, vote) => API.post(`/${id}`, vote)
