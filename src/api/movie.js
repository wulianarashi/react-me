import myAxios from './axios'

export const getData = () => myAxios('/data/json/movie.json')