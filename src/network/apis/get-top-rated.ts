import Api from '..';

import { API_PATH } from '../constants';

const getTopRated = async () => {
  const apiInstance = new Api();
  const data = await apiInstance.get(API_PATH.TOP_RATED);

  return data;
}

export default getTopRated;
