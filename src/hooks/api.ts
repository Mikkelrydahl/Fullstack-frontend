import axios from "axios";
import { API_URLS } from "../constants";

const { LIBRARY_API_URL } = API_URLS;

export const getMovieByID = async (id: string) => {
    const response = await axios.get(`${LIBRARY_API_URL}/${id}`);
    return response.data;
}