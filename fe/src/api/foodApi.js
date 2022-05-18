import axiosClient from './api';

const foodApi = {
  getAll(params) {
    const url = '/foods';
    return axiosClient.get(url, { params });
  },

  getById(id) {
    const url = `/foods/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/foods';
    return axiosClient.post(url, data);
  },

  update(id, data) {
    const url = `/foods/${id}`;
    return axiosClient.put(url, data);
  },

  favourite(id) {
    const url = `/foods/${id}/favourite`;
    return axiosClient.patch(url);
  },

  remove(id) {
    const url = `/foods/${id}`;
    return axiosClient.delete(url);
  },
};

export default foodApi;
