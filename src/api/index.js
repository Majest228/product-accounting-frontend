import axios from 'axios';

const get = (url) => axios.get(`http://api/${url}`).then((value) => value.data);

export const getCategories = (params = {}) => {
  const searchParams = new URLSearchParams(params);

  return get(`categories?${searchParams}`);
};

export const getManufacturer = (params = {}) => {
  const searchParams = new URLSearchParams(params);

  return get(`manufacturer?${searchParams}`);
};
