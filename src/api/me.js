import myAxios from './axios'

export const getData = () => myAxios('/data/json/me.json')