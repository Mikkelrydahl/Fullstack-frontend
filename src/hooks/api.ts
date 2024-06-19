import axios from "axios";
import { API_URLS } from "../constants";

const { LIBRARY_API_URL } = API_URLS;

export const getAllMovies = async () => {
    const response = await axios.get(`${LIBRARY_API_URL}/getAll`);
    return response.data;
}


export default 
{
//getMovieByID
getAllMovies
//loginAccount
//deleteAccount
};