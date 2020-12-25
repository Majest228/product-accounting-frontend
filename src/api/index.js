import axios from 'axios';

const get = (url) => axios.get(`http://api/${url}`).then((value) => value.data);
const post = (url, data) =>
  axios
    .post(`http://api/${url}`, toFormData(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((value) => value.data);
const getWithParams = (url, params = {}) => {
  const searchParams = new URLSearchParams(params);

  return get(`${url}?${searchParams}`);
};
const toFormData = (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};
export const getCategories = (params) => getWithParams('categories', params);
export const addCategory = (values) => post('categories/add', values);
export const getManufacturer = (params) => getWithParams('manufacturer', params);
export const getItem = (params) => getWithParams('items', params);
export const getProducts = (params) => getWithParams('products', params);
export const getStashy = (params) => getWithParams('stashy', params);
