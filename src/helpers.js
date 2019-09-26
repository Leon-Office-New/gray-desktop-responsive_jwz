export const removeByKey = (list, key, value) => {
  return list.filter(item => item[key] !== value);
};
