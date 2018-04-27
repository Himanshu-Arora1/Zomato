import axios from "axios";

export const FETCH_RESTAURANTS = "fetch_restaurants";
export const FETCH_RESTAURANT =  "fetch_restaurant";

    const ROOT_URL = "https://developers.zomato.com/api/v2.1/search?";
      const API_KEY = "46327a3a1c3db149805d3ba2cf8a4abb";

export  function fetchRestaurant(City,Cuisines) {

  const  request = axios.get(`${ROOT_URL}apikey=${API_KEY}&q=${City}&cuisines=${Cuisines}`);

      return{
        type:FETCH_RESTAURANTS,
        payload:request
            }
    }

export function fetchSingleRestaurant(id){

    const RESTAURANT_URL = "https://developers.zomato.com/api/v2.1/restaurant?";

     console.log('id in action',id);
    
     const request = axios.get(`${RESTAURANT_URL}apikey=${API_KEY}&res_id=${id}`);

     return {
            type:FETCH_RESTAURANT,
            payload:request
        }

    }

    