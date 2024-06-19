import { getAllMovies } from "../hooks/api";
import React, { useState, useEffect } from "react";

const fetchAllMovies = async () => {
  const movies = await getAllMovies();
  console.log(movies);
};
useEffect(() => {
  fetchAllMovies();
}, []);

export default fetchAllMovies;
