import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjMzNWIxN2NkZGU4ZTU5YjFmNmE5NTk4MmRmNWVmMyIsInN1YiI6IjYyMWY1NDFkOWYxYmU3MDA0NDZiMjYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5jgvE54rxr1RYFwQ944kT5cY_DpbKWZvy7zB1fzURPE';
export default axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers : {
        Authorization: `Bearer $(token)`
    }
})

/* const key = 'api_key=e6335b17cdde8e59b1f6a95982df5ef3';
const url = 'https://api.themoviedb.org/3';
const apiurl = url + '/discover/movie?sort_by=popularity.desc&' + key; */