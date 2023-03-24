class SearchItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: 'open'
        });
    }

    set country(country) {
        this._country = country;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
      <style>
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host {
        display: block;
        margin-bottom: 18px;
        border-radius: 0px;
        overflow: hidden;
     }

     .result h2{
        text-align: center;
        padding: 30px;
        font-family: 'Orbitron', sans-serif;
        #c7c7c7
      }

    .country-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: start;
        background-color: #040812;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        font-family: Arial, sans-serif;
        margin: 20px;
      }
      
      .country-symbol {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      
      .country-flag {
        width: 150px;
        height: auto;
        margin-right: 20px;
      }
      
      .country-coat {
        width: 100px;
        height: auto;
      }
      
      .country-info {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
      }
      
      h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #dce0dd;
      }

      h3{
        font-size: 2em;
        text-align: center;
        padding: 30px;
        color: #acaeb0;
        font-family: 'Orbitron', sans-serif;
      }
      
      hr {
        border: none;
        height: 2px;
        background-color: #333;
        margin-top: 0;
      }
      
      .country-sub-info {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
      }
      
      .row {
        width: 150px;
        font-weight: bold;
        color: #777;
      }
      
      .col {
        width: calc(100% - 150px);
        color: #333;
      }
      
      p {
        margin: 0;
        line-height: 1.5;
        color: #c7c7c7;
      }

      @media screen and (max-width: 768px) {
        .country-container {
        flex-direction: column;
        padding: 10px;
        margin: 10px;
        }
        
        .country-flag {
        width: 100%;
        margin-bottom: 10px;
        }
        
        .country-coat {
        width: 80px;
        margin-bottom: 10px;
        }
        
        .country-info {
        margin-left: 0;
        }
        
        .row, .col {
        width: 100%;
        margin-bottom: 5px;
        }
        
        h2 {
        font-size: 18px;
        margin-bottom: 5px;
        }
        
        hr {
        margin-top: 5px;
        }

        P {
        font-size: 10px;
        }

        .result {
            color: #f0f0f0;
        }

        }

      </style>
      <h3>${this._country.name.common}</h3>
    <div id="search-results">
        <div class="country-container">
        <div class="country-symbol">
            <img class="country-flag" src="${this._country.flags.png}" alt="Country Flag">
            <img class="country-coat" src="${this._country.coatOfArms.svg}" alt="Country Coat">
        </div>
        <div class="country-info">
            <h2>${this._country.name.official}
            <hr>
            </h2>
            <div class="country-sub-info">
                <div class="row">
                    <p>Capital</p>
                </div>
                <div class="col">
                    <p class="result">
                    ${this._country.capital}
                    </p>
                </div>
            </div>
            <div class="country-sub-info">
                <div class="row">
                    <p>Common Name</p>
                </div>
                <div class="col">
                    <p class="result">
                    ${this._country.name.common}
                    </p>
                </div>
            </div>
            <div class="country-sub-info">
                <div class="row">
                    <p>Population</p>
                </div>
                <div class="col">
                    <p class="result">
                    ${this._country.population}
                    </p>
                </div>
            </div>
            <div class="country-sub-info">
                <div class="row">
                    <p>Continent</p>
                </div>
                <div class="col">
                    <p class="result">
                    ${this._country.continents}
                    </p>
                </div>
            </div>
            <div class="country-sub-info">
                <div class="row">
                    <p>Sub Continent</p>
                </div>
                <div class="col">
                    <p class="result">
                    ${this._country.subregion}
                    </p>
                </div>
            </div>
            <div class="country-sub-info">
                <div class="row">
                    <p>Time Zone</p>
                </div>
                <div class="col">
                    <p class="result">${this._country.timezones}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}


customElements.define('search-item', SearchItem);