import {api} from '../api';

const useApi = () => {
  const getData = async endpoint => {
    const res = await api.get(endpoint);
    return res.data;
  };

  const postData = async ({endpoint, data}) => {
    const res = await api.post(endpoint, data);
    return res.data;
  };

  return {
    getData,
    postData,
  };
};

export default useApi;
