import Api from '..';

import { API_PATH } from '../constants';

const getNetflixOriginals = async () => {
  const apiInstance = new Api();
  const data = await apiInstance.get(API_PATH.ORIGINALS);

  return data;
}

export default getNetflixOriginals;
