import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "98ee6ed6cd75ae1b0a841a3b465a863d";


const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

export const fetchData = (param) => {
    return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`)
}
export const fetchAllmovies =() =>{
    return axios.get('https://netflix-backend-o5r4.onrender.com/movies')
}

export const fetchMovieWithId = (id) => {
    return axios.get(`https://netflix-backend-o5r4.onrender.com/movies/${id}`)
}

export const streamMovies = (id) => {
    return axios.get(`https://netflix-backend-o5r4.onrender.com/movies/stream/${id}`)
}