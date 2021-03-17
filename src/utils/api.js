const queryBackend = (url, method) => fetch(url, { method })
  .then((res) => res.json());

const queryExternalAPI = (url) => fetch(url).then((res) => res.json());

export {
  queryBackend,
  queryExternalAPI,
};
