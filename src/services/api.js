import { movie, tv, API_KEY } from './api_config';
import Axios from 'axios';

export const getMovies = async (type) => {
    try{
        const response = await Axios.get(`${movie}${type}`,{
            params:{
                api_key: API_KEY
            }
        })
        return response.data
    }catch(err){
        throw err;
    }
}

export const getTv = async (type) => {
    try{
        const response = await Axios.get(`${tv}${type}`,{
            params:{
                api_key: API_KEY
            }
        })
        return response.data
    }catch(err){
        throw err;
    }
}