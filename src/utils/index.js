export const fetchUrl = url => {
  return fetch(url).then(response => response.json());
};
