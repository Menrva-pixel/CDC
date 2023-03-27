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
          font-family: 'Roboto', sans-serif;
          font-weight: 500;
          border-radius: 0px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-decoration: none;
          position: sticky;
          top: 0;
        }

        :host.scrolled {
          background-color: #333;
        }
  
        h2 {
          font-family: 'Orbitron', sans-serif;
          padding: 16px;
          font-size: 28px;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
        }
  
        .menu {
          display: flex;
          align-items: center;
          margin-right: 16px;
          font-weight: 600;
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
          color: #03a1fc;
        }
      </style>
      
      <div class="logo">
        <h2>C.D.C.</h2>
      </div>
  
      <div class="menu">
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
    `;
  }
}

customElements.define('nav-bar', NavBar);