import Api from "..";

import { API_PATH } from "../constants";

const getTrending = async (options?: { page: number }) => {
  const apiInstance = new Api();
  let url = API_PATH.TRENDING;
  if (options && Object.keys(options).length) {
    url = `${url}?page=${options.page}`;
  }
  const data = await apiInstance.get(url);

  return { ...data, type: "trending" };
};

export default getTrending;
