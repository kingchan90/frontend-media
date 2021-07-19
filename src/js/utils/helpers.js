import * as getValue from 'lodash.get';

export const formatRawErrMsg = (error = {}) => {
  const data = getValue(error, 'response.data', '');
  if (data) {
    return data.message;
  }
  return error.message;
};

export const queryBuilder = (obj = {}) => {
  let query = '?';
  Object.keys(obj).forEach(key => {
    query += `${key}=${obj[key]}&`
  });
  return query;
}

export const scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
};