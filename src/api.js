import { API_URL } from './config';

const getHomePage = async () => {
    const resp = await fetch(API_URL + 'homepage');
    return await resp.json();
};
const getSinglePage = async (name = '') => {
  const resp = await fetch(`${API_URL}/${name}`);
  return await resp.json();
};

export {getHomePage, getSinglePage };
