const languageRegex = {
  en: /[a-z]/i,
  ru: /[а-я]/i,
  ua: /[а-щьюяґєії'`’ʼ]/i,
};

const checkSearchLanguage = (value, language) => !languageRegex[language].test(value);

const filterCountryList = (data, value, language) => {
  if (!value || checkSearchLanguage(value, language)) {
    return data;
  }

  return data.filter(({ name, capital }) => {
    const nameTest = new RegExp(value, 'i').test(name);
    const countryTest = new RegExp(value, 'i').test(capital);

    return nameTest || countryTest;
  });
};

export default filterCountryList;
