import '../component/search-result.js';
import '../component/search-bar.js';
import '../component/top-countries.js';
import '../component/mil-power.js';

import DataSource from '../data/rest-country-api.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const countryListElement = document.querySelector('search-result');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCountry(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    countryListElement.country = results;
  };

  const fallbackResult = message => {
    countryListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;