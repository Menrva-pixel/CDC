class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open'
    });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {
          max-width: 800px;
          padding: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%; 
          left: 50%; 
          transform: translate(-50%, -50%); 
          transition: box-shadow 0.3s ease-in-out;
        }
        
        .search-container > input {
          width: 300px;
          padding: 12px;
          border: 2px solid #03a1fc;
          border-radius: 25px;
          font-size: 16px;
          color: #03a1fc;
          background-color: transparent;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
        }
        
        .search-container > input:focus {
          outline: none;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          background-color: #1e2021;
        }
        
        .search-container > input::placeholder {
          color: #999999;
          font-size: 16px;
          opacity: 0.8;
        }
        
        .search-container > button {
          margin-left: 15px;
          padding: 12px 20px;
          border: none;
          border-radius: 25px;
          background-color: transparent;
          font-family: 'Orbitron', sans-serif;
          color: #ebe0e0;
          font-weight: 600;
          font-size: 16px;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease-in-out;
          }
          
          .search-container > button:hover {
          color: #03a1fc;
          }
        
        .search-title {
          font-family: 'Orbitron', sans-serif;
          display: flex;
          flex-direction: column;
          font-size: 48px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
          position: absolute;
          top: 40%; 
          left: 50%; 
          transform: translate(-50%, -50%); 
          color: #ebeef5;
          text-shadow: 0 0 10px #2a2a2a;
        }

        .search-title small {
          font-size: 16px;
          text-shadow: 0 0 10px #2a2a2a;
        }
        
        @media screen and (max-width: 768px){
          .search-container {
            flex-direction: column;
          }

          .search-title {
            font-size: 32px;
          }

          .small {
            font-size: 16px;
          }
  
          .search-container > button {
            width: 100%;
            margin-top: 1em;
            margin-left: 0;
          }   
  
          .search-container > input {
            width: 100%;
            margin-top: 17em;
            text-align: center;
          }

          small {
            font-size: 14px;
          }
        }
      </style>
      <div class="search-title">Country Data Center
      <small>Realtime Country Data</small>  
      </div>
      <div id="search-container" class="search-container">
        <input placeholder="Search Country" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);