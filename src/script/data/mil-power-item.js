/*belum berfungsi
class TopMilitaryCountries extends HTMLElement {
  constructor()
   {
    super();
    const shadow = this.attachShadow({mode: 'open'});
   }

   set country(country) 
   {
     this._country = country;
     this.render();
   }

   render() {
        this.shadowDOM.innerHTML =  `
      <style>
      .container {
        background-color: #f1f1f1;
        border: 1px solid black;
        padding: 10px;
      }

      h2 {
        margin-top: 0;
        font-size: 24px;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      li {
        margin-bottom: 10px;
        font-size: 18px;
      }

      .rank {
        font-weight: bold;
        font-size: 24px;
        margin-right: 10px;
      }

      .country {
        font-weight: bold;
        margin-right: 10px;
      }

      .value {
        font-weight: bold;
        font-size: 20px;
      }

      </style>
          <div class="country-container">
      <div class="country-symbol">
        <img class="country-flag" src="${this._country.flags.png}" alt="Country Flag">
        <img class="country-coat" src="${this._country.coatOfArms.svg}" alt="Country Coat of Arms">
      </div>
      <div class="country-info">
        <h2>Military Power</h2>
        <hr>
        <div class="country-sub-info">
          <div class="row">Population:</div>
          <div class="col"><p>100,000,000</p></div>
        </div>
        <div class="country-sub-info">
          <div class="row">Capital:</div>
          <div class="col"><p>City Name</p></div>
        </div>
        <div class="country-sub-info">
          <div class="row">Language:</div>
          <div class="col"><p>Language Name</p></div>
        </div>
      </div>
    </div>

    `;
    

  }

}

customElements.define('mil-power-item', TopMilitaryCountries); */