const queryFakeBackend = (url, method, headers) => fetch(url, {
  method,
  headers: { ...headers },
})
  .then((res) => res.text())
  .then((text) => ({
    body: JSON.parse(text),
  }));

const queryBackend = (url, method) => fetch(url, { method })
  .then((res) => res.json());

const queryCurrencyAPI = (url) => fetch(url).then((res) => res.json());

export {
  queryBackend,
  queryFakeBackend,
  queryCurrencyAPI,
};
