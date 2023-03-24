import '../data/search-item.js';

class SearchResult extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  set country(country) {
    this._country = country;
    this._render();
  }

  _render() {
    this.shadowRoot.innerHTML = '';

    if (!this._country || this._country.length === 0) {
      this._renderError('No data available');
      return;
    }

    this._country.forEach((country) => {
      const SearchItemElement = document.createElement('search-item');
      SearchItemElement.country = country;
      this.shadowRoot.appendChild(SearchItemElement);
    });

    const searchResults = this.shadowRoot.querySelector('#search-results');
    if (searchResults) {
      searchResults.scrollIntoView({ behavior: 'smooth' });
    }
  }

  _renderError(message) {
    this.shadowRoot.innerHTML = `
      <style>
        .placeholder {
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          background-color: #f8d7da;
          color: #721c24;
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 20px;
          user-select: none;
        }
      </style>
      <h2 class="placeholder">${message}</h2>
    `;
  }
}

customElements.define('search-result', SearchResult);