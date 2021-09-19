import axios from 'axios';

const Api = axios.create({
  baseURL: `/api`,
});

const dataAPI = {
  getAll: (params) => Api
    .get('/data', { params })
    .then(res => res.data),
  count: () => Api
    .get('/data/count')
    .then(res => { console.log(res); return res.data }),
  updateOne: (id, data) => Api
    .put(`/data/${id}`, data)
    .then(res => res.data),
};

export default dataAPI;

