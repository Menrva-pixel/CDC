class TopCountry extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
    


      this.shadowRoot.innerHTML = `
        <style>

        .top-3-countries {
          background-color: transparent;
          margin: 20px;
        }
      
        .top-3-countries h3 {
          font-family: 'Orbitron', sans-serif;
          margin-bottom: 10px;
          font-size: 28px;
          color: #fff;
          text-align: center;
        }
      
        .top-3-countries ul {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          margin: 0;
          padding: 0;
          justify-content: center;
          align-items: center;
        }
      
        .top-3-countries li {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 20px;
          width: 33.33%;
        }
      
        .top-3-countries img {
          width: 50px;
          height: 35px;
          object-fit: cover;
          margin-bottom: 10px;
        }
      
        .top-3-countries h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
          color: #acaeb0;
        }
      
        .top-3-countries p {
          font-size: 14px;
          margin-bottom: 0;
          color: #acaeb0;
        }
      
        .top-3-countries .rank {
          font-size: 14px;
          font-weight: 600;
          color: #666;
          margin-top: 5px;
        }
      
        .top-3-countries .military-power {
          font-size: 14px;
          font-weight: 600;
          color: #666;
          margin-top: 5px;
        }

        .country-card {
          border-radius: 10px;
          width: 190px;
          height: 254px;
          background: rgb(38, 38, 38);
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: 30px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .country-card img {
          max-width: 100%;
          height: auto;
          margin-bottom: 10px;
        }
        
        .country-card h4 {
          font-size: 20px;
          margin-bottom: 10px;
          text-align: center;
        }
        
        .country-card p {
          margin-bottom: 5px;
          font-size: 16px;
          text-align: center;
        }
        
        .country-card p a {
          color: #007bff;
          text-decoration: none;
          font-weight: bold;
        }
        
        .country-card p.rank {
          font-weight: bold;
          text-align: center;
        }
        
        .country-card p.military-power {
          font-weight: bold;
          font-size: 12px;
        }
        
        .country-card p.military-power a {
          color: #ffbb33;
          text-decoration: none;
          font-weight: bold;
        }
        
        @media screen and (max-width: 767px) {
          .country-card {
            margin: 10px 0;
            width: 100%;
          }
        }
              
        </style>
        <div class="top-3-countries">
        <hr>
        <h3>Top 3 Countries</h3>
        <ul>
        <div class="country-card">
          <li>
            <img src="https://www.worldometers.info/img/flags/ch-flag.gif" alt="China Flag">
            <h4>China</h4>
            <p>Population: <a>1,387,171,146</a></p>
            <p class="rank">Rank: 1</p>
            <p class="military-power">Military Power: <a style="color:yellow;">High<a/></p>
          </li>
        </div>
        <div class="country-card">
          <li>
            <img src="https://www.worldometers.info/img/flags/in-flag.gif" alt="India Flag">
            <h4>India</h4>
            <p>Population: <a>1,366,417,754</a></p>
            <p class="rank">Rank: 2</p>
            <p class="military-power">Military Power: <a style="color:yellow;">High</a></p>
          </li>
        </div>
        <div class="country-card">
          <li>
            <img src="https://www.worldometers.info/img/flags/us-flag.gif" alt="United States Flag">
            <h4>U.S.A.</h4>
            <p>Population: <a>332,915,073</a></p>
            <p class="rank">Rank: 3</p>
            <p class="military-power">Military Power: <a style="color:red;">Very High</a></p>
          </li>
          </div>
        </ul>
      </div>
      </main>
      `;
    }
  }
  
  customElements.define('top-country', TopCountry);