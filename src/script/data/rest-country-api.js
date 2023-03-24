class RcApi {
  static searchCountry(keyword) {
    return fetch(`https://restcountries.com/v3.1/name/${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`${keyword} tidak ditemukan`);
        }
      })
      .catch(error => {
        return Promise.reject(`Terjadi kesalahan: ${error}`);
      });
  }
}

export const fetchCountries = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMilitaryPower = (country) => {
  const militaryPower = country.population * country.area;
  return militaryPower;
};

export const sortCountriesByMilitaryPower = (countries) => {
  return countries.sort((a, b) => {
    return getMilitaryPower(b) - getMilitaryPower(a);
  });
};

export default RcApi;