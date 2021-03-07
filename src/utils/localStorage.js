function getLocalStorageItem(key, defaultValue) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (err) {
    console.log(err);
    return defaultValue;
  }
}

function setLocalStorageItem(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export {
  getLocalStorageItem,
  setLocalStorageItem,
};
