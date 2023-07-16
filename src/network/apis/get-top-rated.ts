import Api from "..";

import { API_PATH } from "../constants";

const getTopRated = async (options?: { page: number }) => {
  const apiInstance = new Api();
  let url = API_PATH.TOP_RATED;
  if (options && Object.keys(options).length) {
    url = `${url}?page=${options.page}`;
  }
  const data = await apiInstance.get(url);

  return { ...data, type: "top_rated" };
};

export default getTopRated;
