import axios from "axios";

export const Movies = type => {
  let movieAPI = '8d65cb0c'
  return axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=${movieAPI}&${type}`
  });
};
