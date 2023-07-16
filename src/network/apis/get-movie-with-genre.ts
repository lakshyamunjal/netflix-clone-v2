import Api from "..";

import { API_PATH } from "../constants";

const getMovieWithGenre = async (
  genreCode: string,
  type: string,
  options?: { page: number }
) => {
  const apiInstance = new Api();
  let url = `${API_PATH.MOVIE_WITH_GENRE}${genreCode}`;
  if (options && Object.keys(options).length) {
    url = `${url}&page=${options.page}`;
  }

  const data = await apiInstance.get(url);

  return { ...data, type };
};

export default getMovieWithGenre;
