import Api from "..";

import { API_PATH } from "../constants";

const getMovieWithGenre = async (genreCode: string) => {
  const apiInstance = new Api();
  const url = `${API_PATH.MOVIE_WITH_GENRE}${genreCode}`;
  const data = await apiInstance.get(url);

  return data;
};

export default getMovieWithGenre;
