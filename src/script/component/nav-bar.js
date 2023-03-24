class NavBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
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
          width: 100%;
          background-color: none;
          color: #c7c7c7;
          font-family: sans-serif;
          border-radius: 0px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-decoration: none;
          transition: background-color 0.5s ease;
        }

        :host.scrolled {
          background-color: #333;
        }
  
        h2 {
          padding: 16px;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
        }
  
        .menu {
          display: flex;
          align-items: center;
          margin-right: 16px;
        }
  
        .menu a {
          color: white;
          text-decoration: none;
          margin-left: 16px;
          font-size: 16px;
        }
  
        .menu a:hover {
          text-decoration: none;
          transform: scale(1.1);
        }
      </style>
      
      <div class="logo">
        <h2>CDC</h2>
      </div>
  
      <div class="menu">
        <a href="#result">About</a>
        <a href="#">Contact</a>
      </div>
    `;
  }
}

customElements.define('nav-bar', NavBar);