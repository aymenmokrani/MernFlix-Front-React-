import axios from "axios";
import { API_KEY, API_URL } from "./config";

export const getPopular = async () => {
  try {
    const response = await axios.get(`${API_URL}/movie/popular?${API_KEY}`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getGenres = async () => {
  try {
    const response = await axios.get(`${API_URL}/genre/movie/list?${API_KEY}`);
    return response.data.genres;
  } catch (error) {
    throw error;
  }
};

export const getMovie = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${id}?${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
