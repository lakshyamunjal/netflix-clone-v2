import Api from '..';

import { API_PATH } from '../constants';

const getTrending = async () => {
  const apiInstance = new Api();
  const data = await apiInstance.get(API_PATH.TRENDING);

  return data;
}

export default getTrending;
