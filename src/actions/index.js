import axios from 'axios';

export const FETCH_RESTAURANT = 'fetch_restaurant';

export function fetchRestaurant(values,callBack){

const ROOT_URL = 'https://developers.zomato.com/api/v2.1/search?';
const API_KEY = '46327a3a1c3db149805d3ba2cf8a4abb';

	const request = axios.get(`${ROOT_URL}apikey=${API_KEY}&q=${values.city}&cuisines=${values.cuisines}`);
 	
 	return{			
			type : FETCH_RESTAURANT,
			payload : request
		}
}