const queryFakeBackend = (url, method, headers) => fetch(url, {
  method,
  headers: { ...headers },
})
  .then((res) => res.text())
  .then((text) => ({
    body: JSON.parse(text),
  }));

export default queryFakeBackend;
