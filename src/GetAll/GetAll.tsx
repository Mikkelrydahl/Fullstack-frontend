import { getAllMovies } from "../hooks/api";
import { useEffect } from "react";

const fetchAllMovies = async () => {
  const movies = await getAllMovies();
  console.log(movies);
};
useEffect(() => {
  fetchAllMovies();
}, []);

export default fetchAllMovies;
