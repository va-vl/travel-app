const queryFakeBackend = (url, method, headers) => fetch(url, {
  method,
  headers: { ...headers },
})
  .then((res) => res.text())
  .then((text) => ({
    status: 'success',
    data: JSON.parse(text),
  }))
  .catch((err) => {
    if (err.status === 404) {
      return {
        status: 'error',
        data: err.message,
      };
    }

    throw err;
  });

export default queryFakeBackend;
