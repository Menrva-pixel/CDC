class TopCountry extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
    


      this.shadowRoot.innerHTML = `
        <style>
        hr {
          border: 0;
          height: 1px;
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #c7c7c7, rgba(0, 0, 0, 0));
        }

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

        h3 {
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
          align-items: center;
          text-align: center;
          margin-bottom: 20px;
          width: auto;
        }
      
        .top-3-countries img {
          width: 150px;
          height: auto;
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
          width: 250px;
          height: 274px;
          background: rgba(1, 1, 1, 0.66);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4.9px);
          -webkit-backdrop-filter: blur(4.9px);
          border: 1px solid rgba(1, 1, 1, 0.68);
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
            <h3>China</h3>
            <h4>Population: <a>1,387,171,146</a></h4>
            <p class="rank">Rank: 1</p>
            <p class="military-power">Military Power: <a style="color:yellow;">High<a/></p>
          </li>
        </div>
        <div class="country-card">
          <li>
            <img src="https://www.worldometers.info/img/flags/in-flag.gif" alt="India Flag">
            <h3>India</h3>
            <h4>Population: <a>1,366,417,754</a></h4>
            <p class="rank">Rank: 2</p>
            <p class="military-power">Military Power: <a style="color:yellow;">High</a></p>
          </li>
        </div>
        <div class="country-card">
          <li>
            <img src="https://www.worldometers.info/img/flags/us-flag.gif" alt="United States Flag">
            <h3>U.S.A.</h3s>
            <h4>Population: <a>332,915,073</a></h4>
            <p class="rank">Rank: 3</p>
            <p class="military-power">Military Power: <a style="color:red;">Very High</a></p>
          </li>
          </div>
        </ul>
      </div>
      <hr>
      <h3>Search Result</h3>
      </main>
      `;
    }
  }
  
  customElements.define('top-country', TopCountry);