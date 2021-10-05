import axios from 'axios';

async function api(name){
   const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_KEY}&hash=${process.env.REACT_APP_HASH}${name?`&nameStartsWith=${name}`:''}`)
   
    return res.data.data.results

}

export default api;